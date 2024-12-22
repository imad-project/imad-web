import BoardWriteUI from "../../../../../src/components/units/board_write/board_write_presenter";
import { getCookie } from "../../../../../src/commons/cookies/cookie";
import axios from "axios";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import apiClient from "@/api/apiClient";

export default function MovieWritePage() {
  const [detail, setDetail] = useState();
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [category, setCategory] = useState(1);

  const [titleCount, setTitleCount] = useState(0);
  const [contentsCount, setContentsCount] = useState(0);
  const [titleError, setTitleError] = useState<string>("");
  const [contentsError, setContentsError] = useState<string>("");
  const router = useRouter();
  const [isSpoiler, setIsSpoiler] = useState(false);

  const TITLE_MAX_BYTES = 50; // 제목 최대 바이트 수
  const CONTENTS_MAX_BYTES = 5000; // 내용 최대 바이트 수

  // 토큰 확인부
  const token =
    getCookie("Authorization") !== undefined
      ? `Bearer ${getCookie("Authorization")}`
      : "GUEST"; // token 변수를 함수 외부에서 선언

  const detailSearch = async (id: string) => {
    try {
      const detailRES = await apiClient.get(`/api/contents/${id}`);
      if (detailRES.status === 200) {
        setDetail(detailRES?.data?.data ?? []);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const postBoard = async (detail: any) => {
    try {
      const postRES = await apiClient.post(`/api/posting`, {
        contents_id: detail.contents_id,
        title: title,
        content: contents,
        category: category,
        is_spoiler: isSpoiler,
      });
      if (postRES.status === 200) {
        alert("게시글이 정상적으로 등록되었습니다!");
        router.back();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onClickSpoiler = () => {
    setIsSpoiler((prev) => !prev);
  };

  useEffect(() => {
    const { id } = router.query;

    // router.query.id가 정의되었을 때만 detailSearch 호출
    if (id && typeof id === "string") {
      detailSearch(id);
    }
  }, [router.query]);

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

  const onClickSubmit = () => {
    if (!title) {
      setTitleError("제목이 비어있습니다.");
    }
    if (!contents) {
      setContentsError("내용이 비어있습니다.");
    }
    const expText = /[%=*><]/;

    if (expText.test(title) == true) {
      alert("특수문자 %, =, *, >, < 들은 사용할 수 없습니다. ");
      return;
    }
    if (expText.test(contents) == true) {
      alert("특수문자 %, =, *, >, < 들은 사용할 수 없습니다. ");
      return;
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
      onClickSubmit={onClickSubmit}
      onClickSpoiler={onClickSpoiler}
      isSpoiler={isSpoiler}
      titleCount={titleCount}
      contentsCount={contentsCount}
      titleError={titleError}
      contentsError={contentsError}
    />
  );
}
