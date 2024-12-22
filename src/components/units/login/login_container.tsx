import { ChangeEvent, useState } from "react";
import LoginPageUI from "./login_presenter";
import axios from "axios";
import { useRouter } from "next/router";
import { setCookie } from "../../../commons/cookies/cookie";
import { useParams } from "react-router-dom";
import { SHA256 } from "crypto-js";

export default function LoginContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const redirectUrl = router.query.redirect || "/"; // 쿼리에서 redirect 값을 가져오거나 기본값 설정

  const LOGINIMAD = async () => {
    const expText = /[%=*><]/;
    if (expText.test(email) == true) {
      alert("특수문자 %, =, *, >, < 들은 사용할 수 없습니다. ");
      return;
    }

    if (expText.test(password) == true) {
      alert("특수문자 %, =, *, >, < 들은 사용할 수 없습니다. ");
      return;
    }

    await axios
      .post("https://api.iimad.com/api/login", {
        email: email,
        password: SHA256(password).toString(),
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data.message);
          const accessToken = res.headers["authorization"];
          const refresh_token = res.headers["authorization-refresh"];
          setCookie("Authorization", accessToken, {
            path: "/",
            secure: true,
            sameSite: "none",
          });
          setCookie("Authorization_refresh", refresh_token, {
            path: "/",
            secure: true,
            sameSite: "none",
          });
          if (process.browser) {
            router.push(String(redirectUrl));
          }
        }

        return res.data;
      })
      .catch((res) => {
        alert(res?.response?.data.message);
        console.log(res?.response?.data.message);
      });
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassWord = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickLogin = () => {
    if (email === "" || password === "") {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    LOGINIMAD();

    // if (process.browser) {
    // dd  router.push("/login/success");
    // }
  };

  //회원가입 버튼
  const onClickSignUp = () => {
    router.push("/signup");
  };

  //소셜로그인 선택부
  const onClickLoginKakao = async () => {
    window.location.href = `https://api.iimad.com/oauth2/authorization/kakao?redirect_uri=https://iimad.com/oauth2/redirect&origin_site=${redirectUrl}`;
  };

  const onClickLoginGoogle = async () => {
    window.location.href = `https://api.iimad.com/oauth2/authorization/google?redirect_uri=https://iimad.com/oauth2/redirect&origin_site=${redirectUrl}`;
  };

  const onClickLoginNaver = async () => {
    window.location.href = `https://api.iimad.com/oauth2/authorization/naver?redirect_uri=https://iimad.com/oauth2/redirect&origin_site=${redirectUrl}`;
  };

  const onClickLoginApple = async () => {
    window.location.href = `https://api.iimad.com/oauth2/login/apple?redirect_uri=https://iimad.com/oauth2/redirect&origin_site=${redirectUrl}`;
  };

  return (
    <>
      <LoginPageUI
        onChangeEmail={onChangeEmail}
        onChangePassWord={onChangePassWord}
        onClickLogin={onClickLogin}
        onClickLoginKakao={onClickLoginKakao}
        onClickLoginGoogle={onClickLoginGoogle}
        onClickLoginNaver={onClickLoginNaver}
        onClickLoginApple={onClickLoginApple}
        onClickSignUp={onClickSignUp}
      />
    </>
  );
}
