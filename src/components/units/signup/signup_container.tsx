import SignupUI from "./signup_presenter";
import { ChangeEvent, useState } from "react";

import axios from "axios";
import { useRouter } from "next/router";
import { setCookie } from "../../../commons/cookies/cookie";

export default function SignupContainer(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const SIGNUPIMAD = async () => {
    await axios
      .post("https://ncookie.site/api/signup", {
        email: email,
        password: password,
        auth_provider: "IMAD",
      })
      .then((res) => {
        if (res.status === 200) {
          LOGINIMAD();
        } else {
          alert(res.data.message);
        }
      });
  };
  const LOGINIMAD = async () => {
    await axios
      .post("https://ncookie.site/api/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          const accessToken = res.headers["authorization"];
          setCookie("Authorization", accessToken, {
            path: "/",
            secure: true,
            sameSite: "none",
          });
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

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassWord = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickSignUp = () => {
    if (email === "" || password === "") {
      alert("회원가입에 사용할 아이디와 비밀번호를 입력해주세요.");
      return;
    }
    SIGNUPIMAD();
  };

  return (
    <SignupUI
      onChangeEmail={onChangeEmail}
      onChangePassWord={onChangePassWord}
      onClickSignUp={onClickSignUp}
    />
  );
}
