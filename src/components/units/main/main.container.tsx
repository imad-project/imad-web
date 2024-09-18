import { useEffect, useState } from "react";
import MainPageUI from "./main.presenter";
import axios from "axios";
import { getCookie } from "@/src/commons/cookies/cookie";

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

export default function MainContainer(): JSX.Element {
  const [month, setMonth] = useState();
  const token = getCookie("Authorization");

  const monthRanking = async () => {
    try {
      const MonthRES = await axios.get(
        `https://api.iimad.com/api/ranking/monthly?page=1&type=all`,
        {
          headers: {
            Authorization: "GUEST",
          },
        }
      );
      if (MonthRES.status === 200) {
        setMonth(MonthRES.data.data.details_list);

        console.log(month);
      }
    } catch (error) {
      console.error("Error occurred while liking review:", error);
    }
  };

  useEffect(() => {
    monthRanking();
  }, []);
  return <MainPageUI month={month} />;
}
