import { getCookie } from "../../../../commons/cookies/cookie";
import axios from "axios";
import { useRouter } from "next/router";
import { ChangeEvent, useCallback, useState, useEffect } from "react";
import SetUserData_UI from "./profileEdit_presenter";
import apiClient from "@/api/apiClient";

const age = [
  { value: 1, name: "10~19" },
  { value: 2, name: "20~29" },
  { value: 3, name: "30~39" },
  { value: 4, name: "40~49" },
  { value: 5, name: "50~59" },
];

const movie_genres = [
  {
    id: 28,
    name: "액션",
  },
  {
    id: 12,
    name: "모험",
  },
  {
    id: 16,
    name: "애니메이션",
  },
  {
    id: 35,
    name: "코미디",
  },
  {
    id: 80,
    name: "범죄",
  },
  {
    id: 99,
    name: "다큐멘터리",
  },
  {
    id: 18,
    name: "드라마",
  },
  {
    id: 10751,
    name: "가족",
  },
  {
    id: 14,
    name: "판타지",
  },
  {
    id: 36,
    name: "역사",
  },
  {
    id: 27,
    name: "공포",
  },
  {
    id: 10402,
    name: "음악",
  },
  {
    id: 9648,
    name: "미스터리",
  },
  {
    id: 10749,
    name: "로맨스",
  },
  {
    id: 878,
    name: "SF",
  },
  {
    id: 10770,
    name: "TV 영화",
  },
  {
    id: 53,
    name: "스릴러",
  },
  {
    id: 10752,
    name: "전쟁",
  },
  {
    id: 37,
    name: "서부",
  },
];

const tv_genres = [
  {
    id: 10759,
    name: "액션/모험",
  },
  {
    id: 16,
    name: "애니메이션",
  },
  {
    id: 35,
    name: "코미디",
  },
  {
    id: 80,
    name: "범죄",
  },
  {
    id: 99,
    name: "다큐멘터리",
  },
  {
    id: 18,
    name: "드라마",
  },
  {
    id: 10751,
    name: "가족",
  },
  {
    id: 10762,
    name: "아동",
  },
  {
    id: 9648,
    name: "미스터리",
  },
  {
    id: 10763,
    name: "뉴스",
  },
  {
    id: 10764,
    name: "리얼리티",
  },
  {
    id: 10765,
    name: "SF/판타지",
  },
  {
    id: 10766,
    name: "소프 오페라",
  },
  {
    id: 10767,
    name: "토크",
  },
  {
    id: 10768,
    name: "전쟁/정치",
  },
  {
    id: 37,
    name: "서부",
  },
];

export default function ProfileEdit_Container() {
  const [nickName, setNickName] = useState("");
  const [MovieCheckedList, setMovieCheckedList] = useState<number[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [nickNameCheck, setNickNameCheck] = useState(false);
  const [userAge, setUserAge] = useState(Number);
  const router = useRouter();
  const [TVCheckedList, setTVCheckedList] = useState<number[]>([]);
  const [gender, setGender] = useState<"MALE" | "FEMALE">("MALE");
  const [defaultNickname, setDefaultNickname] = useState("");

  const FETCH_USER = async () => {
    try {
      const response2 = await apiClient.get("/api/user");
      if (response2.status === 200) {
        setNickName(response2.data.data.nickname);
        setDefaultNickname(response2.data.data.nickname);
        setGender(response2.data.data.gender);
        setUserAge(response2.data.data.birth_year);
        setMovieCheckedList(response2.data.data.preferred_movie_genres);
        setTVCheckedList(response2.data.data.preferred_tv_genres);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 닉네임 변경부
  const onChangeNickName = (event: ChangeEvent<HTMLInputElement>) => {
    setNickName(event.target.value);
    setIsChecked(false);
  };

  // 닉네임 중복확인

  const NICKNAMECHECK = async () => {
    if (nickName === "") {
      alert("닉네임이 비어있습니다.");
      return;
    }

    if (nickName.length < 2) {
      alert("닉네임은 2글자 이상이여야 합니다.");
      return;
    }

    if (nickName.length > 10) {
      alert("닉네임이 너무 깁니다!");
      return;
    }

    try {
      const response = await apiClient.post("/api/user/validation/nickname", {
        info: nickName,
      });

      if (response.status === 200) {
        setIsChecked(true);
        setNickNameCheck(response.data.data.validation);
      }
    } catch (error) {
      console.error("Error occurred while searching:", error);
    }
  };

  // 나이 변경부ㅇㅇ
  const onChangeAge = (e: any) => {
    setUserAge(e.target.value);
    console.log(e.target.value);
    return;
  };

  // 성별 변경부
  const onClickMale = () => {
    setGender("MALE");
    console.log("male");
  };
  const onClickFemale = () => {
    setGender("FEMALE");
    console.log("female");
  };

  // 영화 장르 선택부
  const handleMovieGenreClick = (id: number) => {
    if (MovieCheckedList.includes(id)) {
      // 이미 선택된 경우 선택 해제
      setMovieCheckedList((prev) => prev.filter((genreId) => genreId !== id));
    } else {
      // 선택되지 않은 경우 추가
      setMovieCheckedList((prev) => [...prev, id]);
    }
  };

  // TV 장르 선택부
  const handleTVGenreClick = (id: number) => {
    if (TVCheckedList.includes(id)) {
      // 이미 선택된 경우 선택 해제
      setTVCheckedList((prev) => prev.filter((genreId) => genreId !== id));
    } else {
      // 선택되지 않은 경우 추가
      setTVCheckedList((prev) => [...prev, id]);
    }
  };

  //연도 범위 설정부
  const years = [];
  const year = new Date().getFullYear();

  for (var y = 1900; y <= year; y++) {
    years.push(y);
  }

  const ChangeUserData = async () => {
    try {
      const PatchUserRes = await apiClient.patch("/api/user", {
        birth_year: userAge,
        gender: gender,
        preferred_movie_genres: MovieCheckedList,
        preferred_tv_genres: TVCheckedList,
        nickname: nickName,
      });
      if (PatchUserRes.status === 200) {
        router.back();
      }
    } catch (error) {
      console.error("Error occurred while searching:", error);
    }
  };

  // 수정요청 API 요청부
  const PATCHUSER = () => {
    const isNickNameChanged = nickName == defaultNickname;
    if (isNickNameChanged) {
      ChangeUserData();
      return;
    }

    if (isChecked === false) {
      alert("닉네임 중복확인을 해주세요!");
      return;
    }

    if (nickNameCheck === false) {
      alert("중복된 닉네임 입니다.");
      return;
    }

    ChangeUserData();
  };
  const SetDefaultImg = async () => {
    const formData = new FormData();
    formData.append("image", `default_profile_image_1.png`);
    try {
      const response = await apiClient.patch(
        `/api/user/profile_image/default`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        console.log("Upload successful:", response.data);
      }
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  useEffect(() => {
    FETCH_USER();
  }, []);

  const onSubmit = () => {
    PATCHUSER();
  };

  return (
    <SetUserData_UI
      onChangeNickName={onChangeNickName}
      onClickMale={onClickMale}
      onClickFemale={onClickFemale}
      onChangeAge={onChangeAge}
      years={years}
      movie_genres={movie_genres}
      tv_genres={tv_genres}
      onSubmit={onSubmit}
      handleMovieGenreClick={handleMovieGenreClick}
      MovieCheckedList={MovieCheckedList}
      handleTVGenreClick={handleTVGenreClick}
      TVCheckedList={TVCheckedList}
      nickName={nickName}
      NICKNAMECHECK={NICKNAMECHECK}
      isChecked={isChecked}
      nickNameCheck={nickNameCheck}
      gender={gender}
      userAge={userAge}
    />
  );
}
