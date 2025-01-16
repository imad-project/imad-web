import axios from "axios";
import {
  getCookie,
  setCookie,
  removeCookie,
} from "../src/commons/cookies/cookie"; // 쿠키 유틸리티

const apiClient = axios.create({
  baseURL: "https://api.imad.ncookie.net", // 기본 API URL 설정
  headers: {
    "Content-Type": "application/json", // 기본 헤더 설정
  },
});

let isRefreshing = false;
let refreshSubscribers: Array<(token: string) => void> = [];

// 리프레시 후 토큰을 각 요청에 반영
const onRefreshed = (token: string) => {
  refreshSubscribers.forEach((callback) => callback(token));
  refreshSubscribers = [];
};

// 요청 인터셉터 설정
apiClient.interceptors.request.use(
  (config) => {
    const accessToken = getCookie("Authorization"); // 쿠키에서 액세스 토큰 가져오기

    // 로그인 여부 확인
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`; // 로그인한 경우 액세스 토큰을 설정
    } else {
      config.headers.Authorization = "GUEST"; // 로그인하지 않은 경우 "GUEST" 토큰 설정
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터 설정
apiClient.interceptors.response.use(
  (response) => response, // 정상 응답 처리
  async (error) => {
    const originalRequest = error.config;

    // 401 에러(인증 실패)가 발생하면
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (!isRefreshing) {
        isRefreshing = true;

        try {
          const accessToken = getCookie("Authorization");
          const refreshToken = getCookie("Authorization_refresh"); // 쿠키에서 리프레시 토큰 가져오기
          const response = await axios.get(
            "https://api.imad.ncookie.net/api/token", // 리프레시 요청 URL
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
                "Authorization-refresh": `Bearer ${refreshToken}`,
              },
            }
          );

          // 새로운 액세스 토큰을 쿠키에 저장

          setCookie("Authorization", response.headers["authorization"], {
            path: "/",
            secure: true,
            sameSite: "none",
          });
          setCookie(
            "Authorization_refresh",
            response.headers["authorization-refresh"],
            {
              path: "/",
              secure: true,
              sameSite: "none",
            }
          );

          isRefreshing = false;

          onRefreshed(response.headers["authorization"]); // 토큰 갱신 후 대기 중인 요청에 반영
        } catch (refreshError) {
          console.error("리프레시 에러:", refreshError); // 에러 로그 출력
          isRefreshing = false;
          alert("로그인기간이 만료되었습니다. 로그아웃 처리됩니다.");
          removeCookie("Authorization");
          removeCookie("Authorization_refresh");
          // 로그아웃 로직 추가
          return Promise.reject(refreshError);
        }
      }

      return new Promise((resolve) => {
        refreshSubscribers.push((token: string) => {
          originalRequest.headers.Authorization = `Bearer ${token}`; // 갱신된 토큰으로 Authorization 헤더 업데이트
          resolve(axios(originalRequest)); // 원래 요청을 다시 전송
        });
      });
    }

    return Promise.reject(error); // 401 외의 오류 처리
  }
);

export default apiClient;
