import axios from "axios";
import { getCookie, removeCookie } from "../cookies/cookie";

export default async function revoke(type: string): Promise<void> {
  const DELETE_IMAD = async () => {
    try {
      const response = await axios.delete("https://api.iimad.com/api/user", {
        headers: {
          Authorization: `Bearer ${getCookie("Authorization")}`,
        },
      });
      if (response.status === 200) {
        removeCookie("Authorization");
        removeCookie("Authorization_refresh");
        alert("회원 탈퇴완료!");
      }
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  const DELETE_APPLE = async () => {
    try {
      const response = await axios.delete(
        "https://api.iimad.com/api/oauth2/revoke/apple?ios=false",
        {
          headers: {
            Authorization: `Bearer ${getCookie("Authorization")}`,
          },
        }
      );
      if (response.status === 200) {
        removeCookie("Authorization");
        removeCookie("Authorization_refresh");
        alert("애플회원 탈퇴완료!");
      }
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  const DELETE_GOOGLE = async () => {
    try {
      const response = await axios.delete(
        "https://api.iimad.com/api/oauth2/revoke/google",
        {
          headers: {
            Authorization: `Bearer ${getCookie("Authorization")}`,
          },
        }
      );
      if (response.status === 200) {
        removeCookie("Authorization");
        removeCookie("Authorization_refresh");
        alert("구글회원 탈퇴완료!");
      }
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  const DELETE_NAVER = async () => {
    try {
      const response = await axios.delete(
        "https://api.iimad.com/api/oauth2/revoke/naver",
        {
          headers: {
            Authorization: `Bearer ${getCookie("Authorization")}`,
          },
        }
      );
      if (response.status === 200) {
        removeCookie("Authorization");
        removeCookie("Authorization_refresh");
        alert("네이버회원 탈퇴완료!");
      }
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  const DELETE_KAKAO = async () => {
    try {
      const response = await axios.delete(
        "https://api.iimad.com/api/oauth2/revoke/kakao",
        {
          headers: {
            Authorization: `Bearer ${getCookie("Authorization")}`,
          },
        }
      );
      if (response.status === 200) {
        removeCookie("Authorization");
        removeCookie("Authorization_refresh");
        alert("카카오회원 탈퇴완료!");
      }
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  const confirmDelete = confirm("정말 회원을 탈퇴하시겠습니까?");
  if (!confirmDelete) return;

  if (type === "IMAD") await DELETE_IMAD();
  if (type === "APPLE") await DELETE_APPLE();
  if (type === "GOOGLE") await DELETE_GOOGLE();
  if (type === "NAVER") await DELETE_NAVER();
  if (type === "KAKAO") await DELETE_KAKAO();
}
