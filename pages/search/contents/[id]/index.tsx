import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SearchDetailUI from "../../../../src/components/units/search_detail/search_detail_presenter";
import { IDetailUIProps } from "@/src/components/units/search_detail/search_detail_types";
import { getCookie } from "../../../../src/commons/cookies/cookie";

interface seasonData {
  air_date: string;
  id: number;
  name: string;
  episode_count: number;
  overview: string;
  poster_path: string | null;
  season_number: number;
}

interface networksData {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface personData {
  gender: string;
  id: number;
  credit_id: string;
  name: string;
  profile_path: string | null;
  character: string | null;
  known_for_department: string | null;
  department: string | null;
  job: string | null;
  importance_order: number;
  credit_type: "CAST" | "CREW";
}

interface data {
  genres: number[];
  production_countries: string[];
  contents_id: number | null;
  seasons: seasonData[] | null;
  networks: networksData[] | null;
  credits: {
    cast: personData[] | null;
    crew: personData[] | null;
  };
  title: string;
  name: string;
  tmdb_type: "TV" | "MOVIE";
  overview: string;
  poster_path: string;
  backdrop_path: string | null;
  contents_type: string;
  imad_score: number;
  original_title: string | null;
  original_name: string | null;
  release_date: string | null;
  certification: string;
  runtime: number | null;
  number_of_episodes: number;
  number_of_seasons: number;
  first_air_date: string | null;
}

export default function TvDetail_Page(): JSX.Element {
  const router = useRouter();
  const [detail, setDetail] = useState<data | null>(null);
  const [review, setReview] = useState();
  const [like, setLike] = useState(true);

  // 토큰 확인부
  const token =
    getCookie("Authorization") !== undefined
      ? `Bearer ${getCookie("Authorization")}`
      : "GUEST"; // token 변수를 함수 외부에서 선언

  const detailSearch = async () => {
    try {
      const detailRES = await axios.get(
        `https://api.iimad.com/api/contents/${router.query.id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (detailRES.status === 200) {
        setDetail(detailRES.data.data);
        console.log(detail);
        const reviewSearch = async () => {
          try {
            const reviewRES = await axios.get(
              `https://api.iimad.com/api/review/list?page=1&sort=createdDate&order=0&contents_id=${detailRES.data.data.contents_id}`,
              {
                headers: {
                  Authorization: token,
                },
              }
            );
            if (reviewRES.status === 200) {
              setReview(reviewRES.data.data);
              console.log(review);
            }
          } catch (error) {
            console.error("Error occurred while review searching:", error);
          }
        };
        reviewSearch();
      }
    } catch (error) {
      console.error("Error occurred while searching:", error);
    }
  };

  const reviewSearch = async () => {
    try {
      const reviewRES = await axios.get(
        `https://api.iimad.com/api/review/list?page=1&sort=createdDate&order=0&contents_id=${detail?.contents_id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (reviewRES.status === 200) {
        setReview(reviewRES.data.data);
        console.log(review);
      }
    } catch (error) {
      console.error("Error occurred while review searching:", error);
    }
  };

  const onClickLike = async (id: number) => {
    if (getCookie("Authorization") !== undefined) {
      try {
        const likeReview = await axios.patch(
          `https://api.iimad.com/api/review/like/${id}`,
          {
            like_status: 1,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );
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
        const likeReview = await axios.patch(
          `https://api.iimad.com/api/review/like/${id}`,
          {
            like_status: -1,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );
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
        const likeReview = await axios.patch(
          `https://api.iimad.com/api/review/like/${id}`,
          {
            like_status: 0,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );
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
    reviewSearch();
  }, [like]);

  useEffect(() => {
    detailSearch();
  }, []);

  const WritePush = () => {
    if (getCookie("Authorization") !== undefined) {
      const { id } = router.query;
      router.push(`/search/movie/${id}/write`);
    } else {
      alert("게시물작성은 회원만 가능합니다! 로그인후 재시도 해주세요!");
    }
  };
  return (
    <SearchDetailUI
      data={detail}
      review={review}
      onClickLike={onClickLike}
      onClickDisLike={onClickDisLike}
      onClickCancelLike={onClickCancelLike}
      setLike={setLike}
      like={like}
      onClickWrite={WritePush}
    />
  );
}
