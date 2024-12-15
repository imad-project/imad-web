import { useRouter } from "next/router";
import { ChangeEvent } from "react";
interface IData {
  user_id: number;
  user_nickname: string;
  user_profile_image: string;
  my_review_cnt: number;
  my_posting_cnt: number;
  my_scrap_cnt: number;
  bookmark_list_response: {
    details_list:
      | [
          {
            bookmark_id: number;
            user_id: number;
            contents_id: number;
            contents_title: string;
            contents_poster_path: string;
            created_date: string;
          }
        ]
      | null;
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

export interface IProfileProps {
  data: IData | null;
  data2: IData2 | null;
  onClickMyReview: () => void;
  onClickMyWrite: () => void;
  onClickMyScrap: () => void;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  openModal2: () => void;
  closeModal2: () => void;
  isModalOpen2: boolean;
  onChangeOriginPassWord: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassWord: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassWord2: (event: ChangeEvent<HTMLInputElement>) => void;
  CHANGE_PASSWORD: () => void;
}
