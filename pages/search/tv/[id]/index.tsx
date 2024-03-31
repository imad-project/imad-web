import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SearchDetailUI from "../../../../src/components/units/search_detail/search_detail_presenter";
import { IDetailUIProps } from "@/src/components/units/search_detail/search_detail_types";
export default function TvDetail_Page(): JSX.Element {
  const router = useRouter();
  const [detail, setDetail] = useState();
  const [review, setReview] = useState();

  const detailSearch = async () => {
    try {
      const detailRES = await axios.get(
        `https://api.iimad.com/api/contents/details?id=${router.query.id}&type=tv`,
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
              `http://api.iimad.com/api/review/list?page=1&sort=createdDate&order=0&contents_id=${detailRES.data.data.contents_id}`,
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
            console.error("Error occurred while searching:", error);
          }
        };
        reviewSearch();
      }
    } catch (error) {
      console.error("Error occurred while searching:", error);
    }
  };

  useEffect(() => {
    detailSearch();
  }, []);

  return <SearchDetailUI data={detail} review={review} />;
}
