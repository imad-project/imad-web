import { getCookie } from "../../../commons/cookies/cookie";
import axios from "axios";
import { useState } from "react";

import { useEffect } from "react";
import { IUserData } from "./login_complete_type";
import { useRouter } from "next/router";
import apiClient from "@/api/apiClient";
export default function LoginCompletePage(): JSX.Element {
  const [userData, setUserData] = useState<IUserData | null>(null);
  const [event, setEvent] = useState(true);
  const router = useRouter();

  const onClickEdit = () => {
    router.push("/user/edit");
  };

  const onClickQuit = () => {
    // IMAD 유저 삭제부
    if (userData?.data.auth_provider === "IMAD") {
      const DELIMADUSER = async () => {
        try {
          const response = await apiClient.delete("/api/user");
          if (response.status === 200) {
            alert("아이매드 회원탈퇴가 정상적으로 진행되었습니다.");
            router.push("/");
          }
        } catch (error) {
          console.error("Error delete user", error);
        }
      };
      DELIMADUSER();
    }
    // KAKAO 유저 삭제부
    else if (userData?.data.auth_provider === "KAKAO") {
      const DELKAKAOUSER = async () => {
        try {
          const response = await apiClient.delete("/api/oauth2/revoke/kakao");
          if (response.status === 200) {
            alert("아이매드 카카오 회원탈퇴가 정상적으로 진행되었습니다.");
            router.push("/");
          }
        } catch (error) {
          console.error("Error delete user", error);
        }
      };
      DELKAKAOUSER();
    }
    // NAVER 유저 삭제부
    else if (userData?.data.auth_provider === "NAVER") {
      const DELNAVERUSER = async () => {
        try {
          const response = await apiClient.delete("/api/oauth2/revoke/naver");
          if (response.status === 200) {
            alert("아이매드 네이버 회원탈퇴가 정상적으로 진행되었습니다.");
            router.push("/");
          }
        } catch (error) {
          console.error("Error delete user", error);
        }
      };
      DELNAVERUSER();
    }
    // GOOGLE 유저 삭제부
    else if (userData?.data.auth_provider === "GOOGLE") {
      const DELGOOGLEUSER = async () => {
        try {
          const response = await apiClient.delete("/api/oauth2/revoke/google");
          if (response.status === 200) {
            alert("아이매드 구글 회원탈퇴가 정상적으로 진행되었습니다.");
            router.push("/");
          }
        } catch (error) {
          console.error("Error delete user", error);
        }
      };
      DELGOOGLEUSER();
    }
    // APPLE 유저 삭제부
    else if (userData?.data.auth_provider === "APPLE") {
      const DELAPPLEUSER = async () => {
        try {
          const response = await apiClient.delete("/api/oauth2/revoke/apple");
          if (response.status === 200) {
            alert("아이매드 애플 회원탈퇴가 정상적으로 진행되었습니다.");
            router.push("/");
          }
        } catch (error) {
          console.error("Error delete user", error);
        }
      };
      DELAPPLEUSER();
    }
  };

  const eventHandler = () => {
    setEvent(!event);
  };
  useEffect(() => {
    const FETCHUSER = async () => {
      try {
        const response = await apiClient.get("/api/user");
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
      <button onClick={onClickQuit}>회원탈퇴</button>
    </>
  );
}
