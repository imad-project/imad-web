import { useRouter } from "next/router";

import React, { ChangeEvent, useEffect, useState } from "react";
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
    id: 2,
    class: "질문글",
  },
  {
    id: 3,
    class: "토론글",
  },
];

const orderList = [
  {
    id: 1,
    class: "내림차순",
  },
  {
    id: 0,
    class: "오름차순",
  },
];

const sortList = [
  {
    id: 0,
    class: "createdDate",
    name: "최신순",
  },
  {
    id: 1,
    class: "likeCnt",
    name: "좋아요순",
  },
  {
    id: 2,
    class: "dislikeCnt",
    name: "싫어요순",
  },
];

export default function Board_container() {
  const [query, setQuery] = useState<string>("");
  const [sort, setSort] = useState("createdDate");
  const [currentSort, setCurrentSort] = useState("최신순");
  const [order, setOrder] = useState(1);
  const [currentOrder, setCurrentOrder] = useState("내림차순");
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const [writeData, setWriteData] = useState<IWriteData | null>(null);
  const [category, setCategory] = useState(0);
  const [currentCategory, setCurrentCategory] = useState("전체");

  // 토큰 확인부
  const token =
    getCookie("Authorization") !== undefined
      ? `Bearer ${getCookie("Authorization")}`
      : "GUEST"; // token 변수를 함수 외부에서 선언

  const FETCH_BOARD_FIRST = async () => {
    try {
      const response = await axios.get(
        "https://api.iimad.com/api/posting/list?page=1&order=1&category=0",
        {
          headers: {
            Authorization: token,
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

  const FETCH_BOARD_VALUECHANGE = async () => {
    try {
      const response = await axios.get(
        `https://api.iimad.com/api/posting/list/search?search_type=0&query=${query}&page=1&sort=${sort}&order=${order}&category=${category}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (response.status === 200) {
        setWriteData(response.data.data);
        setCurrentPage(1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const FETCH_BOARD_PAGES = async (currentPage: number) => {
    try {
      const response = await axios.get(
        `https://api.iimad.com/api/posting/list/search?search_type=0&query=${query}&page=${currentPage}&sort=${sort}&order=${order}&category=${category}`,
        {
          headers: {
            Authorization: token,
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

  const onChangeCategory = (e: React.MouseEvent<HTMLLIElement>) => {
    const value = e.currentTarget.getAttribute("data-value");
    const id = e.currentTarget.getAttribute("data-id");

    if (value) {
      setCurrentCategory(value);
    }

    if (id) {
      setCategory(Number(id));
    }
  };

  const onChangeOrder = (e: React.MouseEvent<HTMLLIElement>) => {
    const value = e.currentTarget.getAttribute("data-value");
    const id = e.currentTarget.getAttribute("data-id");

    if (value) {
      setCurrentOrder(value);
    }

    if (id) {
      setOrder(Number(id));
    }
  };

  const onChangeSort = (e: React.MouseEvent<HTMLLIElement>) => {
    const value = e.currentTarget.getAttribute("data-value");
    const id = e.currentTarget.getAttribute("data-id");

    if (value) {
      setCurrentSort(value);
    }

    if (id) {
      setSort(id);
    }
  };

  const onChangeQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const onClickSearch = () => {
    FETCH_BOARD_VALUECHANGE();
  };

  const onClickWrite = (id: number) => {
    router.push(`/write/${id}`);
  };

  const onClickPoster = (id: number): void => {
    void router.push(`/search/contents/${id}`);
  };

  useEffect(() => {
    FETCH_BOARD_VALUECHANGE();
  }, [category]);

  useEffect(() => {
    FETCH_BOARD_VALUECHANGE();
  }, [order]);

  useEffect(() => {
    FETCH_BOARD_VALUECHANGE();
  }, [sort]);

  useEffect(() => {
    FETCH_BOARD_PAGES(currentPage);
  }, [currentPage]);

  useEffect(() => {
    FETCH_BOARD_FIRST();
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
        currentCategory={currentCategory}
        onChangeCategory={onChangeCategory}
        currentOrder={currentOrder}
        onChangeOrder={onChangeOrder}
        currentSort={currentSort}
        onChangeSort={onChangeSort}
        query={query}
        onChangeQuery={onChangeQuery}
        onClickSearch={onClickSearch}
      />
      <PaginationComponent
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        pageCount={writeData.total_pages || 1}
      />
    </>
  );
}
