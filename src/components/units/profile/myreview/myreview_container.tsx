import { useEffect, useState } from "react";
import { getCookie } from "../../../../commons/cookies/cookie";
import axios from "axios";
import MyReview_UI from "./myreview_presenter";

interface IReviewData {
  details_list: [
    {
      review_id: number;
      contents_id: number;
      contents_title: string;
      contents_poster_path: string;
      contents_backdrop_path: string;
      user_id: number;
      user_nickname: string;
      user_profile_image: string;
      title: string;
      content: string;
      score: number;
      like_cnt: number;
      dislike_cnt: number;
      created_at: string;
      modified_at: string;
      like_status: number;
      author: boolean;
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
}

export default function MyReview_Container() {
  const [reviewData, setReviewData] = useState<IReviewData | null>(null);

  const FETCH_MYREVIEW = async () => {
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
        setReviewData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FETCH_MYREVIEW();
  });

  return <MyReview_UI reviewData={reviewData} />;
}
