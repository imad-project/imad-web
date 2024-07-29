import { useRouter } from "next/router";
import MyWritePage_UI from "./mywrite_presenter";
import { useEffect, useState } from "react";
import axios from "axios";
import { getCookie } from "../../../../../src/commons/cookies/cookie";

interface IWriteData {
  details_list: [
    {
      posting_id: number;
      contents_id: number;
      contents_title: string;
      contents_poster_path: string;
      user_id: number;
      user_nickname: string;
      user_profile_image: string;
      title: string;
      category: number;
      view_cnt: number;
      comment_cnt: number;
      like_cnt: number;
      dislike_cnt: number;
      like_status: number;
      created_at: string;
      modified_at: string;
      scrap_id: number | null;
      scrap_status: boolean;
      reported: boolean;
      spoiler: boolean;
    }
  ];
  total_elements: number;
  total_pages: number;
  page_number: number;
  number_of_elements: number;
  size_of_page: number;
  sort_direction: number;
  sort_property: string;
  search_type: any | null; // 'any'를 사용하여 어떤 형식도 올 수 있음을 표시, 타입이 특정되면 더 정확하게 작성 가능
}

export default function MyWrite_container() {
  const router = useRouter();
  const [writeData, setWriteData] = useState<IWriteData | null>(null);

  const FETCH_MYWRITE = async () => {
    try {
      const response = await axios.get(
        "http://api.iimad.com/api/profile/review/list?page=1",
        {
          headers: {
            Authorization: `Bearer ${getCookie("Authorization")}`,
          },
        }
      );
      if (response.status === 200) {
        setWriteData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FETCH_MYWRITE();
  }, []);

  return <MyWritePage_UI writeData={writeData} />;
}
