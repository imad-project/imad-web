import { getCookie } from "@/src/commons/cookies/cookie";
import Write_Detail_UI from "../../../src/components/units/write_detail/write_detail_presenter";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import apiClient from "@/api/apiClient";

interface Comment {
  comment_id: number;
  posting_id: number;
  user_id: number;
  user_nickname: string;
  user_profile_image: string;
  parent_id: number | null;
  child_cnt: number;
  content: string;
  like_status: number;
  like_cnt: number;
  dislike_cnt: number;
  created_at: string;
  modified_at: string;
  removed: boolean;
  author: boolean;
  reported: boolean;
}

interface CommentListResponse {
  details_list: Comment[];
  total_elements: number;
  total_pages: number;
  page_number: number;
  number_of_elements: number;
  size_of_page: number;
  sort_direction: number;
  sort_property: string;
}

interface Data {
  posting_id: number;
  contents_id: number;
  contents_title: string;
  contents_poster_path: string;
  contents_backdrop_path: string;
  user_id: number;
  user_nickname: string;
  user_profile_image: string;
  title: string;
  content: string;
  category: number;
  view_cnt: number;
  like_cnt: number;
  dislike_cnt: number;
  like_status: number;
  created_at: string;
  modified_at: string;
  comment_cnt: number;
  comment_list_response: CommentListResponse;
  scrap_id: number | null;
  scrap_status: boolean;
  author: boolean;
  reported: boolean;
  spoiler: boolean;
}

export default function WriteDetail_Page(): JSX.Element {
  const router = useRouter();
  const [contentsLike, setContentsLike] = useState(true);
  const [detail, setDetail] = useState<Data | null>(null);
  const [commentsDetail, setCommentsDetail] = useState<
    Record<number, CommentListResponse>
  >({});

  // 토큰 확인부
  const token =
    getCookie("Authorization") !== undefined
      ? `Bearer ${getCookie("Authorization")}`
      : "GUEST"; // token 변수를 함수 외부에서 선언

  const WRITE_DETAIL = async (id: string) => {
    try {
      const detailRES = await apiClient.get(`/api/posting/${id}`);

      if (detailRES.status === 200) {
        setDetail(detailRES.data.data);
        console.log(detail);
      }
    } catch (error) {
      console.error("Error occurred while searching:", error);
    }
  };

  const COMMENTS_DETAIL = async (posting_id: number, parent_id: number) => {
    try {
      const commentsRES = await apiClient.get(
        `/api/posting/comment/list?posting_id=${posting_id}&comment_type=1&parent_id=${parent_id}&page=1&sort=createdDate&order=0`
      );
      if (commentsRES.status === 200) {
        setCommentsDetail((prev) => ({
          ...prev,
          [parent_id]: commentsRES.data.data,
        }));
      }
    } catch (error) {
      console.error("Error occurred while searching:", error);
    }
  };

  const onClickContentsLike = async (id: number) => {
    if (getCookie("Authorization") !== undefined) {
      try {
        const likeReview = await apiClient.patch(`/api/posting/like/${id}`, {
          like_status: 1,
        });
        if (likeReview.status === 200) {
          setContentsLike(!contentsLike);
        }
      } catch (error) {
        console.error("Error occurred while liking review:", error);
      }
    } else {
      alert("게시물 좋아요/싫어요 는 회원만 가능합니다!");
    }
  };

  const onClickContentsDisLike = async (id: number) => {
    if (getCookie("Authorization") !== undefined) {
      try {
        const likeReview = await apiClient.patch(`/api/posting/like/${id}`, {
          like_status: -1,
        });
        if (likeReview.status === 200) {
          setContentsLike(!contentsLike);
        }
      } catch (error) {
        console.error("Error occurred while liking review:", error);
      }
    } else {
      alert("게시물 좋아요/싫어요 는 회원만 가능합니다!");
    }
  };

  const onClickContentsCancelLike = async (id: number) => {
    if (getCookie("Authorization") !== undefined) {
      try {
        const likeReview = await apiClient.patch(`/api/posting/like/${id}`, {
          like_status: 0,
        });
        if (likeReview.status === 200) {
          setContentsLike(!contentsLike);
        }
      } catch (error) {
        console.error("Error occurred while liking review:", error);
      }
    } else {
      alert("게시물 좋아요/싫어요 는 회원만 가능합니다!");
    }
  };

  const onClickPoster = (id: number): void => {
    void router.push(`/search/contents/${id}`);
  };

  useEffect(() => {
    const { id } = router.query;

    // router.query.id가 정의되었을 때만 detailSearch 호출
    if (id && typeof id === "string") {
      WRITE_DETAIL(id);
    }
  }, [router.query, contentsLike]);

  const onClickMoreComments = (posting_id: number, parent_id: number) => {
    COMMENTS_DETAIL(posting_id, parent_id);
  };

  const onClickScrap = async () => {
    if (getCookie("Authorization") !== undefined) {
      try {
        const bookmarkRES = await apiClient.post(
          `/api/profile/scrap`,

          {
            posting_id: detail?.posting_id,
          }
        );
        if (bookmarkRES.status === 200) {
          setContentsLike(!contentsLike);
        }
      } catch (error) {
        console.error("Error occurred while review searching:", error);
      }
    } else {
      alert("게시물 스크랩은 회원만 가능합니다.");
    }
  };

  const onClickDelScrap = async () => {
    if (getCookie("Authorization") !== undefined) {
      try {
        const bookmarkRES = await apiClient.delete(
          `/api/profile/scrap/${detail?.scrap_id}`
        );
        if (bookmarkRES.status === 200) {
          setContentsLike(!contentsLike);
        }
      } catch (error) {
        console.error("Error occurred while review searching:", error);
      }
    } else {
      alert("게시물 스크랩은 회원만 가능합니다.");
    }
  };

  if (!detail) {
    return <div>Loading...</div>;
  }

  return (
    <Write_Detail_UI
      detail={detail}
      commentsDetail={commentsDetail}
      onClickMoreComments={onClickMoreComments}
      onClickContentsLike={onClickContentsLike}
      onClickContentsDisLike={onClickContentsDisLike}
      onClickContentsCancelLike={onClickContentsCancelLike}
      onClickPoster={onClickPoster}
      contentsLike={contentsLike}
      setContentsLike={setContentsLike}
      onClickScrap={onClickScrap}
      onClickDelScrap={onClickDelScrap}
    />
  );
}
