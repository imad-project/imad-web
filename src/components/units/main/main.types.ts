import { contextType } from "react-modal";
import { useState } from "react";
interface Ranking_Item {
  contents_id: number;
  contents_type: string;
  imad_score: number | null;
  title: string;
  poster_path: string;
  ranking: number;
  ranking_changed: number;
}

interface Ranking {
  details_list: Ranking_Item[];
  total_elements: number;
  total_pages: number;
  page_number: number;
  number_of_elements: number;
  size_of_page: number;
  sort_direction: number;
  sort_property: string;
}

interface Tv {
  id: number;
  name: string;
  genre_ids: number[];
  poster_path: string;
  backdrop_path: string | null;
}
interface Movie {
  id: number;
  title: string;
  genre_ids: number[];
  poster_path: string;
  backdrop_path: string | null;
}
interface TvGroup {
  page: number;
  total_pages: number;
  total_results: number;
  results: Tv[];
  contents_id: null;
}
interface MovieGroup {
  page: number;
  total_pages: number;
  total_results: number;
  results: Movie[];
  contents_id: null;
}

interface Recommend_data {
  preferred_genre_recommendation_tv: TvGroup | null;
  preferred_genre_recommendation_movie: MovieGroup | null;
  user_activity_recommendation_tv: TvGroup | null;
  user_activity_recommendation_movie: MovieGroup | null;
  user_activity_recommendation_tv_animation: TvGroup | null;
  user_activity_recommendation_movie_animation: MovieGroup | null;
  popular_recommendation_tv: TvGroup;
  popular_recommendation_movie: MovieGroup;
  top_rated_recommendation_tv: TvGroup;
  top_rated_recommendation_movie: MovieGroup;
  trend_recommendation_tv: TvGroup;
  trend_recommendation_movie: MovieGroup;
}

interface Review_data {
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
  spoiler: boolean;
  author: boolean;
  reported: boolean;
}

interface Write_Data {
  posting_id: number;
  contents_id: number;
  contents_title: string;
  contents_poster_path: string;
  contents_backdrop_path: string | null;
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
  comment_list_response: Comments_Data | null;
}

interface Comments_Data {
  details_list: [
    {
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
      author: boolean;
      reported: boolean;
      removed: boolean;
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

interface LoginData {
  email: string;
  nickname: string;
  auth_provider: string;
  gender: string;
  birth_year: number;
  age_range: number;
  profile_image: string;
  role: string;
}

export interface IMainProps {
  Ranking: Ranking | null;
  Recommend: Recommend_data | null;
  TopReview: Review_data | null;
  TopWrite: Write_Data | null;
  allTimeRanking: () => void;
  monthlyRanking: () => void;
  weeklyRanking: () => void;
  mergeRanking: () => void;
  mergedChart: Ranking_Item[];
  setTimes: React.Dispatch<React.SetStateAction<string>>;
  times: string;
  setContentsType: React.Dispatch<React.SetStateAction<string>>;
  contentsType: string;
  loginData: LoginData | null;
  onClickTvContents: (id: number) => void;
  onClickMovieContents: (id: number) => void;
  onClickContentsId: (id: number) => void;
}
