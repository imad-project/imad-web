import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import * as S from "../search/search_styles";
import Modal from "react-modal";
import { useRouter } from "next/router";

interface IDetail {
  poster_path: string;
  overview: string;
}

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const router = useRouter();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    // 검색어 입력(input)에 변화가 생겼을 때, 입력된 내용을 상태에 저장
    setQuery(event.target.value);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout; // 타이머 변수 선언

    // 입력된 검색어(query)가 존재할 때만 실행
    if (query) {
      // 0.5초 후에 search 함수를 실행하는 타이머 설정
      timer = setTimeout(() => {
        search(); // 검색 함수 실행
      }, 500);
    }

    // useEffect가 다시 실행되기 전에 이전 타이머가 존재하면 제거
    return () => {
      clearTimeout(timer); // 이전 타이머 제거
    };
  }, [query]); // query 상태가 변경될 때마다 useEffect 실행
  const search = async () => {
    try {
      const response = await axios.get(
        `https://api.iimad.com/api/contents/search?query=${query}&type=multi&page=1`,
        {
          headers: {
            Authorization: "GUEST",
          },
        }
      );

      if (response.status === 200) {
        setSearchResults(response.data?.data?.results ?? []);
        console.log(searchResults);
        setShowSearch(true);
        
      }
    } catch (error) {
      console.error("Error occurred while searching:", error);
    }
  };

  const onClickImg = (resultId: String, media_type: String) => {
    router.push(`/search/${media_type}/${resultId}`);
  };

  return (
    <div>
      <h1>작품 검색</h1>

      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="작품명을 입력해주세요..."
      />

      {showSearch && searchResults && searchResults.length > 0 && (
        <>
          {searchResults.map((result: any, index) => (
            <div
              key={result.id}
              onClick={() => onClickImg(result.id, result.media_type)}
            >
              {result.poster_path && (
                <S.ImgBox
                  src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
                  alt="Poster"
                />
              )}
              <p>
                {result.name ?? result.title ?? "No name or title available"}
              </p>
            </div>
          ))}
        </>
      )}
      {showSearch && searchResults && searchResults.length === 0 && (
        <h1>검색 결과가 없습니다.</h1>
      )}
    </div>
  );
}
