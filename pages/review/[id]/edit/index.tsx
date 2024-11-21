import { MouseEvent, useEffect, useState } from "react";
import { getCookie } from "../../../../src/commons/cookies/cookie";
import axios from "axios";

import { useRouter } from "next/router";
import Review_EDIT from "../../../../src/components/units/review_detail/review_edit/review_edit_presenter";

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

  const FETCH_REVIEW = async (id: string) => {
    if (!getCookie("Authorization")) {
      alert("리뷰수정은 본인의 리뷰&회원만 가능합니다.");
      router.back();
      return;
    } else {
      try {
        const response = await axios.get(
          `https://api.iimad.com/api/review/${id}`,
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
    }
  };

  useEffect(() => {
    const { id } = router.query;

    // router.query.id가 정의되었을 때만 detailSearch 호출
    if (id && typeof id === "string") {
      FETCH_REVIEW(id);
    }
  }, [router.query]);

  const onClickPoster = (id: number): void => {
    void router.push(`/search/contents/${id}`);
  };

  if (!reviewData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Review_EDIT reviewData={reviewData} onClickPoster={onClickPoster} />
    </>
  );
}
