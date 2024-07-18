interface IReviewData {
  details_list: [
    {
      review_id: number;
      contents_id: number;
      contents_title: string;
      contents_poster_path: string;
      contents_backdrop_path: string;
      user_id: number;
      user_nickname: string;
      user_profile_image: string;
      title: string;
      content: string;
      score: number;
      like_cnt: number;
      dislike_cnt: number;
      created_at: string;
      modified_at: string;
      like_status: number;
      author: boolean;
      spoiler: boolean;
    }
  ];
  total_elements: number;
  total_pages: number;
  page_number: number;
  number_of_elements: number;
  size_of_page: number;
  sort_direction: number;
  sort_property: string;
}

export interface IMyReviewProps {
  reviewData: IReviewData | null;
}
