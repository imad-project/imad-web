import { MouseEvent } from "react";

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
  score: number | null;
  like_cnt: number;
  dislike_cnt: number;
  created_at: string;
  modified_at: string;
  like_status: number;
  author: boolean;
  spoiler: boolean;
}

export interface IMyReviewProps {
  reviewData: IReviewData | null;
  onClickPoster: (id: number) => void;
}
