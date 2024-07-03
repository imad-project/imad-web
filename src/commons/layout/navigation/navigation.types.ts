import type { MouseEvent } from "react";

export interface INavigationUIProps {
  onClickMenu: (event: MouseEvent<HTMLDivElement>) => void;
  onClickLogout: (event: MouseEvent<HTMLDivElement>) => void;
  userData: {
    gender: string;
    age_range: number;
    profile_image: number;
    nickname: string;
    preferred_tv_genres: [];
    preferred_movie_genres: [];
    auth_provider: string;
    role: string;
    email: string;
    birth_year: number;
  };
}
