import { getCookie } from "../../../commons/cookies/cookie";
import axios from "axios";
import { useState } from "react";

import { useEffect } from "react";
import { IUserData } from "./login_complete_type";
export default function LoginCompletePage(): JSX.Element {
  const [userData, setUserData] = useState<IUserData | null>(null);
  const aaa = [];

  useEffect(() => {
    const FETCHUSER = async () => {
      try {
        const response = await axios.get("https://ncookie.site/api/user", {
          headers: {
            Authorization: `Bearer ${getCookie("Authorization")}`,
          },
        });
        if (response.status === 200) {
          setUserData((prevUserData) => response.data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    FETCHUSER();
  }, []);

  return (
    <>
      <div>{userData ? userData.data.nickname : "???"}님 환영합니다!</div>
      <div>나이대 : {userData ? userData.data.age_range : "???"}</div>
      <div>성별 : {userData ? userData.data.gender : "???"}</div>
      <div>회원종류 : {userData ? userData.data.auth_provider : "???"}</div>
      <div>email : {userData ? userData.data.email : "???"}</div>
    </>
  );
}
