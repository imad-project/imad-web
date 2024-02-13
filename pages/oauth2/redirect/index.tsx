import { useRouter } from "next/router";
import { setCookie, getCookie } from "../../../src/commons/cookies/cookie";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function KakaoRedirect(): JSX.Element {
  const params = useParams();
  const router = useRouter();

  const PATCHUSER = async () => {
    await axios
      .patch("https://api.iimad.com/api/user", {
        headers: {
          Authorization: `Bearer ${getCookie("Authorization")}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          if (res.data.data.role === "GUEST") {
            console.log(res.data.data.role);
            router.push("/signup/SetUserData");
          } else if (res.data.data.role === "USER") {
            console.log(res.data.data.role);
            router.push("/login/success");
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
    setCookie("Authorization", params.token, {
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
