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
    setQuery(event.target.value);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (query) {
      timer = setTimeout(() => {
        search();
      }, 500);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [query]);

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
