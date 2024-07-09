import { getCookie } from "../../../commons/cookies/cookie";
import axios from "axios";
import { useEffect, useState } from "react";
import Profile_UI from "./profile_presenter";
import { IProfileProps } from "./profile_types";

interface IData {
  user_id: number;
  user_nickname: string;
  user_profile_image: string;
  my_review_cnt: number;
  my_posting_cnt: number;
  my_scrap_cnt: number;
  bookmark_list_response: {
    details_list: [];
    total_elements: number;
    total_pages: number;
    page_number: number;
    number_of_elements: number;
    size_of_page: number;
    sort_direction: number;
    sort_property: number;
  };
}

export default function ProfileContainer() {
  const [userData, setUserData] = useState<IData | null>(null);

  const FETCH_PROFILE = async () => {
    try {
      const response = await axios.get("http://api.iimad.com/api/profile", {
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

  useEffect(() => {
    FETCH_PROFILE();
  }, []);

  return <Profile_UI data={userData} />;
}
