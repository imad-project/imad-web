import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SearchDetailUI from "../../../../src/components/units/search_detail/search_detail_presenter";
import { IDetailUIProps } from "@/src/components/units/search_detail/search_detail_types";
export default function TvDetail_Page(): JSX.Element {
  const router = useRouter();
  const [detail, setDetail] = useState();

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
      }
    } catch (error) {
      console.error("Error occurred while searching:", error);
    }
  };

  useEffect(() => {
    detailSearch();
  }, []);

  return <SearchDetailUI data={detail} />;
}
