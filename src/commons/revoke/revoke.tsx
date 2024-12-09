import axios from "axios";
import { getCookie } from "../cookies/cookie";

export default function revoke(type: string) {
  const DELETE_IMAD = async () => {
    try {
      const response = await axios.delete(
        "https://api.iimad.com/api/user",

        {
          headers: {
            Authorization: `Bearer ${getCookie("Authorization")}`,
          },
        }
      );
      if (response.status === 200) {
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
        alert("카카오회원 탈퇴완료!");
      }
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };
}
