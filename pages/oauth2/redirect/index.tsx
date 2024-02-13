import { useRouter } from "next/router";
import { setCookie } from "../../../src/commons/cookies/cookie";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function KakaoRedirect(): JSX.Element {
  const params = useParams();
  const router = useRouter();
  useEffect(() => {
    setCookie("Authorization", params.token, {
      path: "/",
      secure: true,
      sameSite: "none",
    });
    router.push("/login/success");
  }, []);

  return (
    <div>
      <span>로그인중...</span>
    </div>
  );
}
