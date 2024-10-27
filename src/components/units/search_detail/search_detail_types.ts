interface seasonData {
  air_date: string;
  id: number;
  name: string;
  episode_count: number;
  overview: string;
  poster_path: string | null;
  season_number: number;
}

interface networksData {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface personData {
  gender: string;
  id: number;
  credit_id: string;
  name: string;
  profile_path: string | null;
  character: string | null;
  known_for_department: string | null;
  department: string | null;
  job: string | null;
  importance_order: number;
  credit_type: "CAST" | "CREW";
}

export interface IDetailUIProps {
  onClickLike: (id: number) => void;
  onClickDisLike: (id: number) => void;
  setLike: (liked: boolean) => void;
  onClickWrite: () => void;

  like: boolean;
  data?: {
    genres: number[];
    production_countries: string[];
    contents_id: number | null;
    seasons: seasonData[] | null;
    networks: networksData[] | null;
    credits: {
      cast: personData[] | null;
      crew: personData[] | null;
    };
    title: string;
    name: string;
    tmdb_type: "TV" | "MOVIE";
    overview: string;
    poster_path: string;
    backdrop_path: string | null;
    contents_type: string;
    imad_score: number;
    original_title: string | null;
    original_name: string | null;
    release_date: string | null;
    certification: string;
    runtime: number | null;
    number_of_episodes: number;
    number_of_seasons: number;
    first_air_date: string | null;
  } | null;

  review?: {
    details_list: [
      {
        review_id: number;
        contents_id: number;
        contents_title: string;
        contents_poster_path: string;
        user_id: number;
        user_nickname: string;
        user_profile_image: number;
        title: string;
        content: string;
        score: number;
        like_cnt: number;
        dislike_cnt: number;
        created_at: string;
        modified_at: string;
        like_status: number;
      }
    ];
  };
}
