import { useRouter } from "next/router";
import MyScrap_UI from "./myscrap_presenter";
import { useEffect, useState } from "react";
import axios from "axios";
import { getCookie } from "@/src/commons/cookies/cookie";
import PaginationComponent from "@/src/commons/pagination/pagination";

interface IScrapData {
  details_list: [
    {
      posting_id: number;
      contents_id: number;
      contents_title: string;
      contents_poster_path: string;
      user_id: number;
      user_nickname: string;
      user_profile_image: string;
      posting_title: string;
      category: number;

      created_date: string;

      scrap_id: number | null;
    }
  ];
  total_elements: number;
  total_pages: number;
  page_number: number;
  number_of_elements: number;
  size_of_page: number;
  sort_direction: number;
  sort_property: string;
  search_type: any | null; // 'any'를 사용하여 어떤 형식도 올 수 있음을 표시, 타입이 특정되면 더 정확하게 작성 가능
}

export default function MyScrap_container() {
  const router = useRouter();
  const [scrapData, setScrapData] = useState<IScrapData | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const FETCH_MYSCRAP = async () => {
    try {
      const response = await axios.get(
        "http://api.iimad.com/api/profile/scrap/list?page=1",
        {
          headers: {
            Authorization: `Bearer ${getCookie("Authorization")}`,
          },
        }
      );
      if (response.status === 200) {
        setScrapData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const FETCH_MYSCRAP_PAGES = async (currentPage: number) => {
    try {
      const response = await axios.get(
        `http://api.iimad.com/api/profile/scrap/list?page=${currentPage}`,
        {
          headers: {
            Authorization: `Bearer ${getCookie("Authorization")}`,
          },
        }
      );
      if (response.status === 200) {
        setScrapData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onClickScrap = (id: number) => {
    router.push(`/write/${id}`);
  };

  useEffect(() => {
    FETCH_MYSCRAP();
  }, []);

  useEffect(() => {
    FETCH_MYSCRAP_PAGES(currentPage);
  }, [currentPage]);

  if (!scrapData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <MyScrap_UI scrapData={scrapData} onClickScrap={onClickScrap} />
      <PaginationComponent
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        pageCount={scrapData.total_pages || 1}
      />
    </>
  );
}
