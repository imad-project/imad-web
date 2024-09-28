import { useEffect, useState } from "react";
import MainPageUI from "./main.presenter";
import axios from "axios";
import { getCookie } from "@/src/commons/cookies/cookie";

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

export default function MainContainer(): JSX.Element {
  const [month, setMonth] = useState<Ranking | null>(null);
  const [Recommend, setRecommend] = useState<Recommend_data | null>(null);
  const [TopReview, setTopReview] = useState<Review_data | null>(null);
  const [TopWrite, setTopWrite] = useState(null);

  // 토큰 확인부
  const token =
    getCookie("Authorization") !== undefined
      ? `Bearer ${getCookie("Authorization")}`
      : "GUEST"; // token 변수를 함수 외부에서 선언

  const monthRanking = async () => {
    try {
      const MonthRES = await axios.get(
        `https://api.iimad.com/api/ranking/monthly?page=1&type=all`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (MonthRES.status === 200) {
        setMonth(MonthRES.data.data);

        console.log(month);
      }
    } catch (error) {
      console.error("Error occurred while liking review:", error);
    }
  };

  const TotalRecommend = async () => {
    try {
      const RecommendRES = await axios.get(
        `https://api.iimad.com/api/recommend/all`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (RecommendRES.status === 200) {
        setRecommend(RecommendRES.data.data);

        console.log(Recommend);
      }
    } catch (error) {
      console.error("Error occurred while liking review:", error);
    }
  };

  const Review = async () => {
    try {
      const ReviewRES = await axios.get(
        `https://api.iimad.com/api/popular/review`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (ReviewRES.status === 200) {
        setTopReview(ReviewRES.data.data);

        console.log(TopReview);
      }
    } catch (error) {
      console.error("Error occurred while liking review:", error);
    }
  };

  const Write = async () => {
    try {
      const WriteRES = await axios.get(
        `https://api.iimad.com/api/popular/posting`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (WriteRES.status === 200) {
        setTopWrite(WriteRES.data.data);

        console.log(TopWrite);
      }
    } catch (error) {
      console.error("Error occurred while liking review:", error);
    }
  };

  useEffect(() => {
    monthRanking();
    TotalRecommend();
    Review();
    Write();
  }, []);
  return (
    <MainPageUI month={month} Recommend={Recommend} TopReview={TopReview} />
  );
}
