import { useRouter } from "next/router";
import { setCookie, getCookie } from "../../../../src/commons/cookies/cookie";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function KakaoRedirect(): JSX.Element {
  const router = useRouter();

  // 유저 정보 불러오기
  const PATCHUSER = async () => {
    await axios
      .get("https://api.iimad.com/api/user", {
        headers: {
          Authorization: `Bearer ${getCookie("Authorization")}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          if (res.data.data.role === "GUEST") {
            console.log(res.data.data.role);
            router.push("/user/edit");
          } else if (res.data.data.role === "USER") {
            console.log(res.data.data.role);
            router.push("/user");
          }
        }

        return res.data;
      })
      .catch((res) => {
        alert(res?.response.data.message);
        return;
      });
  };

  //페이지가 렌더링될때 URL의 쿼리를 읽어 토큰과 리프레쉬 토큰을 쿠키에 저장한다.
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const refresh_token = params.get("refresh_token");
    const token = params.get("token");
    setCookie("Authorization_refresh", refresh_token, {
      path: "/",
      secure: true,
      sameSite: "none",
    });
    setCookie("Authorization", token, {
      path: "/",
      secure: true,
      sameSite: "none",
    });
    //쿠키에 저장된 토큰값으로 유저 정보 PATCHUSER 실행
    PATCHUSER();
  }, []);

  return (
    <div>
      <span>로그인중...</span>
    </div>
  );
}
