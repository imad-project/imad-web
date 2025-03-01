import { useEffect, useState } from "react";
import MainPageUI from "./main.presenter";
import axios from "axios";
import { getCookie } from "@/src/commons/cookies/cookie";
import { useRouter } from "next/router";
import apiClient from "@/api/apiClient";

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

export default function MainContainer(): JSX.Element {
  const [Ranking, setRanking] = useState<Ranking | null>(null);
  const [Recommend, setRecommend] = useState<Recommend_data | null>(null);
  const [TopReview, setTopReview] = useState<Review_data | null>(null);
  const [TopWrite, setTopWrite] = useState<Write_Data | null>(null);
  const [contentsType, setContentsType] = useState("all");
  const [times, setTimes] = useState("alltime");
  const [mergedChart, setMergedChart] = useState<Ranking_Item[]>([]);
  const [loginData, setLoginData] = useState<LoginData | null>(null);
  const router = useRouter();

  // 토큰 확인부
  const token =
    getCookie("Authorization") !== undefined
      ? `Bearer ${getCookie("Authorization")}`
      : "GUEST"; // token 변수를 함수 외부에서 선언

  // 로그인정보 확인부
  const MainLogin = async () => {
    if (token === "GUEST") {
      console.log("로그인되지 않은 사용자입니다.");
      return;
    }
    try {
      const LoginRES = await apiClient.get("/api/user");
      if (LoginRES.status === 200) {
        setLoginData(LoginRES.data.data);
      }
    } catch (error) {
      console.error("Error occurred while liking review:", error);
    }
  };

  //전체 랭킹 확인부
  const mergeRanking = async () => {
    let mergeDetailList: Array<any> = [];
    let page = 1;
    let totalPages = 1;

    try {
      const MergeRES = await apiClient.get(
        `/api/ranking/${times}?page=${page}&type=${contentsType}`
      );
      if (MergeRES.status === 200) {
        mergeDetailList = MergeRES.data.data.details_list;
        totalPages = MergeRES.data.data.total_pages;

        if (totalPages === 0) {
          setMergedChart([]);
          return;
        }
        while (page <= totalPages) {
          page++;
          const nextPageRES = await apiClient.get(
            `/api/ranking/${times}?page=${page}&type=${contentsType}`
          );
          mergeDetailList = mergeDetailList.concat(
            nextPageRES.data.data.details_list
          );
        }
      }
    } catch (error) {
      console.error("Error occurred while liking review:", error);
    }
    setMergedChart(mergeDetailList);
  };

  const allTimeRanking = async () => {
    try {
      const MonthRES = await apiClient.get(
        `/api/ranking/alltime?page=1&type=all`
      );
      if (MonthRES.status === 200) {
        setRanking(MonthRES.data.data);

        console.log(Ranking);
      }
    } catch (error) {
      console.error("Error occurred while liking review:", error);
    }
  };
  const monthlyRanking = async () => {
    try {
      const MonthRES = await apiClient.get(
        `/api/ranking/monthly?page=1&type=all`
      );
      if (MonthRES.status === 200) {
        setRanking(MonthRES.data.data);

        console.log(Ranking);
      }
    } catch (error) {
      console.error("Error occurred while liking review:", error);
    }
  };
  const weeklyRanking = async () => {
    try {
      const MonthRES = await apiClient.get(
        `/api/ranking/weekly?page=1&type=all`
      );
      if (MonthRES.status === 200) {
        setRanking(MonthRES.data.data);

        console.log(Ranking);
      }
    } catch (error) {
      console.error("Error occurred while liking review:", error);
    }
  };

  const TotalRecommend = async () => {
    try {
      const RecommendRES = await apiClient.get(`/api/recommend/all`);
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
      const ReviewRES = await apiClient.get(`/api/popular/review`);
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
      const WriteRES = await apiClient.get(`/api/popular/posting`);
      if (WriteRES.status === 200) {
        setTopWrite(WriteRES.data.data);

        console.log(TopWrite);
      }
    } catch (error) {
      console.error("Error occurred while liking review:", error);
    }
  };

  // 페이지 이동부
  const onClickTvContents = (id: number): void => {
    void router.push(`/search/tv/${id}`);
  };
  const onClickMovieContents = (id: number): void => {
    void router.push(`/search/movie/${id}`);
  };
  const onClickContentsId = (id: number): void => {
    void router.push(`/search/contents/${id}`);
  };
  const onClickReview = (id: number): void => {
    void router.push(`/review/${id}`);
  };
  const onClickWrite = (id: number): void => {
    void router.push(`/write/${id}`);
  };

  useEffect(() => {
    allTimeRanking();
    TotalRecommend();
    Review();
    Write();
    MainLogin();
  }, []);

  useEffect(() => {
    mergeRanking();
  }, [times, contentsType]);
  return (
    <MainPageUI
      Ranking={Ranking}
      Recommend={Recommend}
      TopReview={TopReview}
      TopWrite={TopWrite}
      allTimeRanking={allTimeRanking}
      monthlyRanking={monthlyRanking}
      weeklyRanking={weeklyRanking}
      mergeRanking={mergeRanking}
      mergedChart={mergedChart}
      setTimes={setTimes}
      times={times}
      setContentsType={setContentsType}
      contentsType={contentsType}
      loginData={loginData}
      onClickTvContents={onClickTvContents}
      onClickMovieContents={onClickMovieContents}
      onClickContentsId={onClickContentsId}
      onClickReview={onClickReview}
      onClickWrite={onClickWrite}
    />
  );
}
