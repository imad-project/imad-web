import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import NavigationUI from "./navigation.presenter";
import axios from "axios";
import { getCookie, removeCookie } from "../../cookies/cookie";

interface IUserData {
  gender: string;
  age_range: number;
  profile_image: number;
  nickname: string;
  preferred_tv_genres: [];
  preferred_movie_genres: [];
  auth_provider: string;
  role: string;
  email: string;
  birth_year: number;
}

export default function NavigationContainer(): JSX.Element {
  const [userData, setUserData] = useState<IUserData>({
    gender: "",
    age_range: 0,
    profile_image: 1,
    nickname: "",
    preferred_tv_genres: [],
    preferred_movie_genres: [],
    auth_provider: "",
    role: "",
    email: "",
    birth_year: 0,
  });
  const [userName, setUserName] = useState("");
  const router = useRouter();

  const onClickMenu = (event: MouseEvent<HTMLDivElement>): void => {
    void router.push(event.currentTarget.id);
  };

  const onClickLogout = (event: MouseEvent<HTMLDivElement>): void => {
    removeCookie("Authorization");
    void router.push(event.currentTarget.id);
  };

  const FETCHUSER = async () => {
    try {
      const response = await axios.get("https://api.iimad.com/api/user", {
        headers: {
          Authorization: `Bearer ${getCookie("Authorization")}`,
        },
      });
      if (response.status === 200) {
        setUserData(response.data.data);
        return response.data.data;
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      if (getCookie("Authorization")) {
        const data = await FETCHUSER(); // 비동기 함수 호출 후 기다림
        if (data) {
          setUserName(data.nickname);
        }
      }
    };
    fetchUserData();
  }, []);

  return (
    <NavigationUI
      onClickMenu={onClickMenu}
      userData={userData}
      onClickLogout={onClickLogout}
    />
  );
}
