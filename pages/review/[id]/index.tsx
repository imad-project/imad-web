import { MouseEvent, useEffect, useState } from "react";
import { getCookie } from "../../../src/commons/cookies/cookie";
import axios from "axios";
import MyReview_UI from "../../../src/components/units/review_detail/review_detail_presenter";
import { useRouter } from "next/router";
import apiClient from "@/api/apiClient";

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
  const [like, setLike] = useState(true);

  // 토큰 확인부
  const token =
    getCookie("Authorization") !== undefined
      ? `Bearer ${getCookie("Authorization")}`
      : "GUEST"; // token 변수를 함수 외부에서 선언

  const FETCH_REVIEW = async (id: string) => {
    try {
      const response = await apiClient.get(`/api/review/${id}`);
      if (response.status === 200) {
        setReviewData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onClickLike = async (id: number) => {
    if (getCookie("Authorization") !== undefined) {
      try {
        const likeReview = await apiClient.patch(`/api/review/like/${id}`, {
          like_status: 1,
        });
        if (likeReview.status === 200) {
          setLike(!like);
        }
      } catch (error) {
        console.error("Error occurred while liking review:", error);
      }
    } else {
      alert("리뷰 좋아요/싫어요 는 회원만 가능합니다!");
    }
  };

  const onClickDisLike = async (id: number) => {
    if (getCookie("Authorization") !== undefined) {
      try {
        const likeReview = await apiClient.patch(`/api/review/like/${id}`, {
          like_status: -1,
        });
        if (likeReview.status === 200) {
          setLike(!like);
        }
      } catch (error) {
        console.error("Error occurred while liking review:", error);
      }
    } else {
      alert("리뷰 좋아요/싫어요 는 회원만 가능합니다!");
    }
  };

  const onClickCancelLike = async (id: number) => {
    if (getCookie("Authorization") !== undefined) {
      try {
        const likeReview = await apiClient.patch(`/api/review/like/${id}`, {
          like_status: 0,
        });
        if (likeReview.status === 200) {
          setLike(!like);
        }
      } catch (error) {
        console.error("Error occurred while liking review:", error);
      }
    } else {
      alert("리뷰 좋아요/싫어요 는 회원만 가능합니다!");
    }
  };

  useEffect(() => {
    const { id } = router.query;

    // router.query.id가 정의되었을 때만 detailSearch 호출
    if (id && typeof id === "string") {
      FETCH_REVIEW(id);
    }
  }, [router.query, like]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.query.id]);

  const onClickPoster = (id: number): void => {
    void router.push(`/search/contents/${id}`);
  };

  if (!reviewData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <MyReview_UI
        reviewData={reviewData}
        onClickPoster={onClickPoster}
        onClickLike={onClickLike}
        onClickDisLike={onClickDisLike}
        onClickCancelLike={onClickCancelLike}
      />
    </>
  );
}
