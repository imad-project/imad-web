import SignupUI from "./signup_presenter";
import { ChangeEvent, useState } from "react";
import { SHA256 } from "crypto-js";
import axios from "axios";
import { useRouter } from "next/router";
import { setCookie } from "../../../commons/cookies/cookie";

export default function SignupContainer(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [emailChecked, setEmailChecked] = useState<boolean>(false);
  const router = useRouter();

  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

  const emailCheck = (username: string) => {
    return emailRegEx.test(username); //형식에 맞을 경우, true 리턴
  };
  const SIGNUPIMAD = async () => {
    await axios
      .post("https://api.iimad.com/api/signup", {
        email: email,
        password: SHA256(password).toString(),
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
      .post("https://api.iimad.com/api/login", {
        email: email,
        password: SHA256(password).toString(),
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

  const EMAILCHECK = async () => {
    if (email === "") {
      alert("이메일이 비어있습니다.");
      return;
    }

    if (!emailCheck(email)) {
      alert("이메일 형식이 맞지 않습니다.");
      return;
    }

    try {
      const response = await axios.post(
        "https://api.iimad.com/api/user/validation/email",
        {
          info: email,
        }
      );

      if (response.status === 200) {
        setIsChecked(true);
        setEmailChecked(response.data.data.validation);
      }
    } catch (error) {
      console.error("Error occurred while searching:", error);
    }
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setIsChecked(false);
  };

  const onChangePassWord = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangePassWord2 = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword2(event.target.value);
  };

  const onClickSignUp = () => {
    if (isChecked === false) {
      alert("이메일 중복확인을 해주세요!");
      return;
    }

    if (emailChecked === false) {
      alert("중복된 이메일입니다.");
      return;
    }

    if (password !== password2) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
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
      onChangePassWord2={onChangePassWord2}
      onClickSignUp={onClickSignUp}
      isChecked={isChecked}
      emailChecked={emailChecked}
      EMAILCHECK={EMAILCHECK}
    />
  );
}
