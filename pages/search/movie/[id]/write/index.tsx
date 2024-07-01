import BoardWriteUI from "../../../../../src/components/units/board_write/board_write_presenter";
import { getCookie } from "../../../../../src/commons/cookies/cookie";
import axios from "axios";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";

export default function MovieWritePage() {
  const [detail, setDetail] = useState();
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [is_spoiler, setIs_spoiler] = useState(false);
  const [category, setCategory] = useState(0);
  const [x, setX] = useState(2);
  const [titleCount, setTitleCount] = useState(0);
  const [contentsCount, setContentsCount] = useState(0);
  const [titleError, setTitleError] = useState<string>("");
  const [contentsError, setContentsError] = useState<string>("");
  const router = useRouter();

  const TITLE_MAX_BYTES = 50; // 제목 최대 바이트 수
  const CONTENTS_MAX_BYTES = 5000; // 내용 최대 바이트 수

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
        setDetail(detailRES?.data?.data ?? []);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const postBoard = async (detail: any) => {
    try {
      const postRES = await axios.post(
        `https://api.iimad.com/api/posting`,
        {
          contents_id: detail.contents_id,
          title: title,
          contents: contents,
          category: category,
          is_spoiler: is_spoiler,
        },
        {
          headers: {
            Authorization: `Bearer ${getCookie("Authorization")}`,
          },
        }
      );
      if (postRES.status === 200) {
        alert("게시글이 정상적으로 등록되었습니다!");
        const { id } = router.query;
        router.push(`/search/movie/${id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    detailSearch();
  }, []);

  const getByteLength = (str: string) => {
    return new Blob([str]).size;
  };

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const byteLength = getByteLength(value);
    setTitleCount(byteLength);

    if (byteLength <= TITLE_MAX_BYTES) {
      setTitle(value);
      setTitleError("");
    } else {
      setTitleError(
        `제목은 최대 ${TITLE_MAX_BYTES}바이트까지 입력 가능합니다.`
      );
    }
  };

  const handleContentsChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    const byteLength = getByteLength(value);
    setContentsCount(byteLength);

    if (byteLength <= CONTENTS_MAX_BYTES) {
      setContents(value);
      setContentsError("");
    } else {
      setContentsError(
        `내용은 최대 ${CONTENTS_MAX_BYTES}바이트까지 입력 가능합니다.`
      );
    }
  };

  const onChangeCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategory(Number(event.target.value));
  };

  const onChangeSpoiler = () => {
    setIs_spoiler(!is_spoiler);
  };

  const handleSpoiler = (event: ChangeEvent<HTMLInputElement>) => {
    setX(Number(event.target.value));
    if (x === 1) {
      setIs_spoiler(true);
    } else if (x === 2) {
      setIs_spoiler(false);
    }
  };

  const onClickSubmit = () => {
    if (!title) {
      setTitleError("제목이 비어있습니다.");
    }
    if (!contents) {
      setContentsError("내용이 비어있습니다.");
    }
    if (!getCookie("Authorization")) {
      alert("게시글 등록은 회원만 가능합니다 로그인후 재시도 해주세요!");
    }
    if (
      title &&
      contents &&
      !titleError &&
      !contentsError &&
      getCookie("Authorization")
    ) {
      postBoard(detail);
    }
  };
  return (
    <BoardWriteUI
      handleTitleChange={handleTitleChange}
      handleContentsChange={handleContentsChange}
      onChangeCategory={onChangeCategory}
      onChangeSpoiler={onChangeSpoiler}
      onClickSubmit={onClickSubmit}
      handleSpoiler={handleSpoiler}
      x={x}
      titleCount={titleCount}
      contentsCount={contentsCount}
      titleError={titleError}
      contentsError={contentsError}
    />
  );
}
