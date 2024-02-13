import { useRouter } from "next/router";
import { setCookie } from "../../../src/commons/cookies/cookie";
import { useEffect, useState } from "react";

export default function KakaoRedirect(res: any): JSX.Element {
  const router = useRouter();
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(res.headers["autorization"]);
    setCookie("Authorization", token, {
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
