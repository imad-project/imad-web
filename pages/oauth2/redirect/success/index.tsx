import { useRouter } from "next/router";
import { setCookie, getCookie } from "../../../../src/commons/cookies/cookie";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function KakaoRedirect(): JSX.Element {
  const router = useRouter();

  const PATCHUSER = async () => {
    await axios
      .get("https://ncookie.site/api/user", {
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
    PATCHUSER();
  }, []);

  return (
    <div>
      <span>로그인중...</span>
    </div>
  );
}
