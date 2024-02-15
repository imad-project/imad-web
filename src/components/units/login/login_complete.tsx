import { getCookie } from "../../../commons/cookies/cookie";
import axios from "axios";
import { useState } from "react";

import { useEffect } from "react";
import { IUserData } from "./login_complete_type";
import { useRouter } from "next/router";
export default function LoginCompletePage(): JSX.Element {
  const [userData, setUserData] = useState<IUserData | null>(null);
  const [event, setEvent] = useState(true);
  const router = useRouter();

  const onClickEdit = () => {
    router.push("/user/edit");
  };

  const eventHandler = () => {
    setEvent(!event);
  };
  useEffect(() => {
    const FETCHUSER = async () => {
      try {
        const response = await axios.get("https://ncookie.site/api/user", {
          headers: {
            Authorization: `Bearer ${getCookie("Authorization")}`,
          },
        });
        if (response.status === 200) {
          setUserData(response.data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    FETCHUSER();
  }, [event]);

  return (
    <>
      <div>{userData ? userData.data.nickname : "???"}님 환영합니다!</div>
      <div>출생년도 : {userData ? userData.data.birth_year : "???"}</div>
      <div>나이대 : {userData ? userData.data.age_range : "???"}</div>
      <div>성별 : {userData ? userData.data.gender : "???"}</div>
      <div>회원종류 : {userData ? userData.data.auth_provider : "???"}</div>
      <div>email : {userData ? userData.data.email : "???"}</div>
      <button onClick={eventHandler}>새로고침</button>
      <button onClick={onClickEdit}>회원정보수정</button>
    </>
  );
}
