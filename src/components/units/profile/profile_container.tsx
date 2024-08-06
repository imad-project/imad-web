import { getCookie } from "../../../commons/cookies/cookie";
import axios from "axios";
import { useEffect, useState } from "react";
import Profile_UI from "./profile_presenter";
import { IProfileProps } from "./profile_types";
import { useRouter } from "next/router";

interface IData {
  user_id: number;
  user_nickname: string;
  user_profile_image: string;
  my_review_cnt: number;
  my_posting_cnt: number;
  my_scrap_cnt: number;
  bookmark_list_response: {
    details_list: [
      {
        bookmark_id: number;
        user_id: number;
        contents_id: number;
        contents_title: string;
        contents_poster_path: string;
        created_date: string;
      }
    ];
    total_elements: number;
    total_pages: number;
    page_number: number;
    number_of_elements: number;
    size_of_page: number;
    sort_direction: number;
    sort_property: number;
  };
}

interface IData2 {
  email: string;
  nickname: string;
  auth_provider: string;
  gender: string;
  birth_year: number;
  age_range: number;
  profile_image: string;
  role: string;
  preferred_tv_genres: [number];
  preferred_movie_genres: [number];
}

export default function ProfileContainer() {
  const [userData, setUserData] = useState<IData | null>(null);
  const [userData2, setUserData2] = useState<IData2 | null>(null);
  const router = useRouter();

  const FETCH_PROFILE = async () => {
    try {
      const response = await axios.get("https://api.iimad.com/api/profile", {
        headers: {
          Authorization: `Bearer ${getCookie("Authorization")}`,
        },
      });
      if (response.status === 200) {
        setUserData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const FETCH_USER = async () => {
    try {
      const response2 = await axios.get("https://api.iimad.com/api/user", {
        headers: {
          Authorization: `Bearer ${getCookie("Authorization")}`,
        },
      });
      if (response2.status === 200) {
        setUserData2(response2.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onClickMyReview = () => {
    router.push("/profile/myreview");
  };
  const onClickMyWrite = () => {
    router.push("/profile/mywrite");
  };
  const onClickMyScrap = () => {
    router.push("/profile/myscrap");
  };

  useEffect(() => {
    FETCH_PROFILE();
    FETCH_USER();
  }, []);

  return (
    <Profile_UI
      data={userData}
      data2={userData2}
      onClickMyReview={onClickMyReview}
      onClickMyWrite={onClickMyWrite}
      onClickMyScrap={onClickMyScrap}
    />
  );
}
