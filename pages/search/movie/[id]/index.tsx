import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SearchDetailUI from "../../../../src/components/units/search_detail/search_detail_presenter";
import { IDetailUIProps } from "@/src/components/units/search_detail/search_detail_types";
import { getCookie } from "../../../../src/commons/cookies/cookie";
export default function TvDetail_Page(): JSX.Element {
  const router = useRouter();
  const [detail, setDetail] = useState();
  const [review, setReview] = useState();
  const [like, setLike] = useState(true);

  const detailSearch = async () => {
    try {
      const detailRES = await axios.get(
        `https://api.iimad.com/api/contents/details?id=${router.query.id}&type=movie`,
        {
          headers: {
            Authorization: "GUEST",
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
                  Authorization: "GUEST",
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

  const onClickLike = async (id: number) => {
    if (getCookie("Authorization") !== undefined) {
      try {
        const likeReview = await axios.patch(
          `https://api.iimad.com/api/review/like/${id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${getCookie("Authorization")}`,
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
          `https://api.iimad.com/api/review/dislike/${id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${getCookie("Authorization")}`,
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
    detailSearch();
  }, [like]);

  useEffect(() => {
    detailSearch();
  }, []);

  return (
    <SearchDetailUI
      data={detail}
      review={review}
      onClickLike={onClickLike}
      onClickDisLike={onClickDisLike}
    />
  );
}
