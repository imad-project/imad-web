import { getCookie } from "../../../commons/cookies/cookie";
import axios from "axios";
import { useState } from "react";

import { useEffect } from "react";
export default function LoginCompletePage(): JSX.Element {
  const [userData, setUserData] = useState();
  const aaa = [];
  const FETCHUSER = async () =>
    await axios
      .get("https://api.iimad.com/api/user", {
        headers: {
          Authorization: `Bearer ${getCookie("Authorization")}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setUserData(res.data);
          console.log(userData);
          return res.data;
        }
      });

  useEffect(() => {
    FETCHUSER();
  }, []);

  return (
    <>
      <div>{userData?.data?.nickname}님 환영합니다!</div>
      <div>나이 : {userData?.data?.age_range}</div>
      <div>성별 : {userData?.data?.gender}</div>
      <div>회원종류 : {userData?.data?.auth_provider}</div>
      <div>email : {userData?.data?.email}</div>
    </>
  );
}
