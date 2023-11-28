import { ChangeEvent, useState } from "react";
import LoginPageUI from "./login_presenter";
import axios from "axios";
export default function LoginContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassWord = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickLogin = () => {
    // if (email === "" || password === "") {
    //   alert("아이디와 비밀번호를 입력해주세요.");
    //   return;
    // }
    const LOGINIMAD = () => {
      axios
        .post("https://ncookie.site/api/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res.data);
        });
    };
    LOGINIMAD();
  };

  return (
    <>
      <LoginPageUI
        onChangeEmail={onChangeEmail}
        onChangePassWord={onChangePassWord}
        onClickLogin={onClickLogin}
      />
    </>
  );
}
