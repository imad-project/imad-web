import { getCookie } from "../../../commons/cookies/cookie";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import Profile_UI from "./other_profile_presenter";
import { IProfileProps } from "./other_profile_types";
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

export default function OtherProfileContainer() {
  const [userData, setUserData] = useState<IData | null>(null);

  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [originPassword, setOriginPassword] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openModal2 = () => setIsModalOpen2(true);
  const closeModal2 = () => setIsModalOpen2(false);

  const FETCH_PROFILE = async () => {
    try {
      const response = await apiClient.get(
        `/api/profile/other/${router.query.id}`
      );
      if (response.status === 200) {
        setUserData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onClickReport = async () => {
    if (
      confirm(
        "회원 신고 시 해당 회원이 작성한 모든 활동은 블러 처리됩니다. 신고하시겠습니까?"
      ) == true
    ) {
      try {
        const ReportRES = await apiClient.post(`/api/report/user`, {
          reported_id: router.query.id,
          report_type_string: "SPAM",
          report_desc: "",
        });
        if (ReportRES.status === 200) {
          console.log(ReportRES.statusText);
          alert("정상적으로 신고가 접수되었습니다.");
          router.back();
        }
      } catch (error: any) {
        alert(error?.response?.data?.message);
      }
    } else {
      return;
    }
  };

  const onClickPoster = (id: number) => {
    router.push(`/search/contents/${id}`);
  };

  const onClickBack = () => {
    void router.back();
  };

  useEffect(() => {
    FETCH_PROFILE();
  }, []);

  return (
    <Profile_UI
      data={userData}
      isModalOpen={isModalOpen}
      openModal={openModal}
      closeModal={closeModal}
      openModal2={openModal2}
      closeModal2={closeModal2}
      isModalOpen2={isModalOpen2}
      onClickReport={onClickReport}
      onClickBack={onClickBack}
      onClickPoster={onClickPoster}
    />
  );
}
