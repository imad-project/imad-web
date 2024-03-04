import { ChangeEvent, useState } from "react";
import axios from "axios";
import * as S from "../search/search_styles";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (query !== "") {
      await search();
    } else {
      alert("검색어를 입력해주세요.");
    }
  };

  return (
    <div>
      <h1>작품 검색</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="작품명을 입력해주세요..."
        />
        <button type="submit">Search</button>
      </form>
      {showSearch && searchResults && searchResults.length > 0 && (
        <>
          {searchResults.map((result: any) => (
            <div key={result.id}>
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