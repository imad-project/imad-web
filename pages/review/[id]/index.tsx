import { MouseEvent, useEffect, useState } from "react";
import { getCookie } from "../../../src/commons/cookies/cookie";
import axios from "axios";
import MyReview_UI from "../../../src/components/units/review_detail/review_detail_presenter";
import { useRouter } from "next/router";

interface IReviewData {
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

export default function MyReview_Container() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewData, setReviewData] = useState<IReviewData | null>(null);

  // 토큰 확인부
  const token =
    getCookie("Authorization") !== undefined
      ? `Bearer ${getCookie("Authorization")}`
      : "GUEST"; // token 변수를 함수 외부에서 선언

  const FETCH_REVIEW = async () => {
    try {
      const response = await axios.get(
        `https://api.iimad.com/api/review/${router.query.id}`,
        {
          headers: {
            Authorization: token,
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
    FETCH_REVIEW();
  }, []);

  const onClickPoster = (event: MouseEvent<HTMLImageElement>): void => {
    void router.push(`/search/contents/${event.currentTarget.id}`);
  };

  if (!reviewData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <MyReview_UI reviewData={reviewData} onClickPoster={onClickPoster} />
    </>
  );
}
