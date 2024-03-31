export interface IDetailUIProps {
  data?: {
    title: string;
    name: string;
    tmdb_type: string;
    overview: string;
    poster_path: string;
    contents_type: string;
    imad_score: number;
    original_title: string;
    release_date: string;
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
