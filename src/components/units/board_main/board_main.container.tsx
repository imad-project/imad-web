import { useRouter } from "next/router";

import { useEffect, useState } from "react";
import axios from "axios";
import { getCookie } from "../../../../src/commons/cookies/cookie";
import PaginationComponent from "@/src/commons/pagination/pagination";
import Board_Page_UI from "./board_main.presenter";

interface IWriteData {
  details_list: [
    {
      posting_id: number;
      contents_id: number;
      contents_title: string;
      contents_poster_path: string;
      user_id: number;
      user_nickname: string;
      user_profile_image: string;
      title: string;
      category: number;
      view_cnt: number;
      comment_cnt: number;
      like_cnt: number;
      dislike_cnt: number;
      like_status: number;
      created_at: string;
      modified_at: string;
      scrap_id: number | null;
      scrap_status: boolean;
      reported: boolean;
      spoiler: boolean;
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

const categoryList = [
  {
    id: 0,
    class: "전체",
  },
  {
    id: 1,
    class: "자유글",
  },
  {
    id: 0,
    class: "질문글",
  },
  {
    id: 0,
    class: "토론글",
  },
];

const orderList = [
  {
    id: 0,
    class: "오름차순",
  },
  {
    id: 1,
    class: "내림차순",
  },
];

const sortList = [
  {
    id: 0,
    class: "createdDate",
  },
  {
    id: 1,
    class: "likeCnt",
  },
  {
    id: 2,
    class: "dislikeCnt",
  },
];

export default function Board_container() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("createdDate");
  const [order, setOrder] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const [writeData, setWriteData] = useState<IWriteData | null>(null);
  const [category, setCategory] = useState(0);

  const FETCH_MYWRITE = async () => {
    try {
      const response = await axios.get(
        "https://api.iimad.com/api/posting/list?page=1&category=0",
        {
          headers: {
            Authorization: `Bearer ${getCookie("Authorization")}`,
          },
        }
      );
      if (response.status === 200) {
        setWriteData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const FETCH_MYWRITE_PAGES = async (currentPage: number) => {
    try {
      const response = await axios.get(
        `https://api.iimad.com/api/posting/list/search?search_type=0&query=${query}page=${currentPage}&sort=${sort}&order=${order}&category=${category}`,
        {
          headers: {
            Authorization: `Bearer ${getCookie("Authorization")}`,
          },
        }
      );
      if (response.status === 200) {
        setWriteData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onClickWrite = (id: number) => {
    router.push(`/write/${id}`);
  };

  const onClickPoster = (id: number): void => {
    void router.push(`/search/contents/${id}`);
  };

  useEffect(() => {
    FETCH_MYWRITE_PAGES(currentPage);
  }, [currentPage]);

  useEffect(() => {
    FETCH_MYWRITE();
  }, []);

  if (!writeData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Board_Page_UI
        writeData={writeData}
        onClickWrite={onClickWrite}
        onClickPoster={onClickPoster}
      />
      <PaginationComponent
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        pageCount={writeData.total_pages || 1}
      />
    </>
  );
}
