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
  const [userData, setUserData] = useState<IUserData | null>(null);
  const [authToken, setAuthToken] = useState<string | null>(
    getCookie("Authorization")
  );
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [userName, setUserName] = useState("");
  const router = useRouter();

  const onClickMenu = (event: MouseEvent<HTMLDivElement>): void => {
    void router.push(event.currentTarget.id);
  };

  const onClickLogout = async (
    event: MouseEvent<HTMLDivElement>
  ): Promise<void> => {
    removeCookie("Authorization");
    removeCookie("Authorization_refresh");
    setAuthToken(null);
    await router.push(event.currentTarget.id);
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
    if (authToken) {
      FETCHUSER();
    } else {
      setUserData(null);
    }
  }, [authToken]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    handleResize(); // 초기 로딩 시에도 한 번 실행
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Add a useEffect to update authToken when the cookie changes
  useEffect(() => {
    const intervalId = setInterval(() => {
      const token = getCookie("Authorization");
      if (token !== authToken) {
        setAuthToken(token);
      }
    }, 1000); // Check every second

    return () => clearInterval(intervalId);
  }, [authToken]);

  return (
    <NavigationUI
      onClickMenu={onClickMenu}
      userData={userData}
      onClickLogout={onClickLogout}
      isMobile={isMobile}
    />
  );
}
