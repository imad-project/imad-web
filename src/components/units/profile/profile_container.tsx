import { getCookie } from "../../../commons/cookies/cookie";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import Profile_UI from "./profile_presenter";
import { IProfileProps } from "./profile_types";
import { useRouter } from "next/router";
import { SHA256 } from "crypto-js";
import apiClient from "@/api/apiClient";

interface IData {
  user_id: number;
  user_nickname: string;
  user_profile_image: string;
  my_review_cnt: number;
  my_posting_cnt: number;
  my_scrap_cnt: number;
  bookmark_list_response: {
    details_list: [
      {
        bookmark_id: number;
        user_id: number;
        contents_id: number;
        contents_title: string;
        contents_poster_path: string;
        created_date: string;
      }
    ];
    total_elements: number;
    total_pages: number;
    page_number: number;
    number_of_elements: number;
    size_of_page: number;
    sort_direction: number;
    sort_property: number;
  };
}

interface IData2 {
  email: string;
  nickname: string;
  auth_provider: string;
  gender: string;
  birth_year: number;
  age_range: number;
  profile_image: string;
  role: string;
  preferred_tv_genres: [number];
  preferred_movie_genres: [number];
}

export default function ProfileContainer() {
  const [userData, setUserData] = useState<IData | null>(null);
  const [userData2, setUserData2] = useState<IData2 | null>(null);
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [originPassword, setOriginPassword] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [passwordIsChecked, setpasswordIsChecked] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openModal2 = () => setIsModalOpen2(true);
  const closeModal2 = () => setIsModalOpen2(false);

  const FETCH_PROFILE = async () => {
    try {
      const response = await apiClient.get("/api/profile");
      if (response.status === 200) {
        setUserData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const FETCH_USER = async () => {
    try {
      const response2 = await apiClient.get("/api/user");
      if (response2.status === 200) {
        setUserData2(response2.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //비밀번호 변경 로직

  let passwordReg = /^(?=.*[a-zA-Z])(?=.*[0-9])\S{8,20}$/;

  const passwordCheck = (password: string) => {
    return passwordReg.test(password);
  };

  const onChangeOriginPassWord = (event: ChangeEvent<HTMLInputElement>) => {
    setOriginPassword(event.target.value);
  };

  const onChangePassWord = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setpasswordIsChecked(passwordCheck(event.target.value));
  };

  const onChangePassWord2 = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword2(event.target.value);
  };

  const CHANGE_PASSWORD = async () => {
    if (originPassword === "" || password === "" || password2 === "") {
      alert("빈칸을 전부 작성후 시도해주세요!");
      return;
    }

    if (passwordIsChecked === false) {
      alert("비밀번호 형식이 맞지 않습니다.");
      return;
    }

    if (/\s/.test(password)) {
      alert("비밀번호에 공백을 포함할 수 없습니다.");
      return;
    }

    if (originPassword == password) {
      alert("기존 비밀번호와 같은 비밀번호를 지정할 수 없습니다.");
      return;
    }

    if (password !== password2) {
      alert("새 비밀번호의 확인이 같지 않습니다.");
      return;
    }

    try {
      const response = await apiClient.patch("/api/user/password", {
        old_password: SHA256(originPassword).toString(),
        new_password: SHA256(password).toString(),
      });
      if (response.status === 200) {
        alert("비밀번호 변경완료!");
        closeModal2();
      }
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  const onClickMyReview = () => {
    router.push("/profile/myreview");
  };
  const onClickMyWrite = () => {
    router.push("/profile/mywrite");
  };
  const onClickMyScrap = () => {
    router.push("/profile/myscrap");
  };

  useEffect(() => {
    FETCH_PROFILE();
    FETCH_USER();
  }, []);

  useEffect(() => {
    FETCH_PROFILE();
    FETCH_USER();
  }, [isModalOpen]);

  return (
    <Profile_UI
      data={userData}
      data2={userData2}
      onClickMyReview={onClickMyReview}
      onClickMyWrite={onClickMyWrite}
      onClickMyScrap={onClickMyScrap}
      isModalOpen={isModalOpen}
      openModal={openModal}
      closeModal={closeModal}
      openModal2={openModal2}
      closeModal2={closeModal2}
      isModalOpen2={isModalOpen2}
      onChangeOriginPassWord={onChangeOriginPassWord}
      onChangePassWord={onChangePassWord}
      onChangePassWord2={onChangePassWord2}
      CHANGE_PASSWORD={CHANGE_PASSWORD}
      passwordIsChecked={passwordIsChecked}
    />
  );
}
