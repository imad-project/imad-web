interface IBoardData {
  details_list: [
    {
      posting_id: number;
      contents_id: number;
      contents_title: string;
      contents_poster_path: string;
      user_id: number;
      user_nickname: string;
      user_profile_image: string;
      title: string;
      category: number;
      view_cnt: number;
      comment_cnt: number;
      like_cnt: number;
      dislike_cnt: number;
      like_status: number;
      created_at: string;
      modified_at: string;
      scrap_id: number | null;
      scrap_status: boolean;
      reported: boolean;
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
  search_type: any | null; // 'any'를 사용하여 어떤 형식도 올 수 있음을 표시, 타입이 특정되면 더 정확하게 작성 가능
}

export interface IBoardProps {
  writeData: IBoardData | null;
  onClickWrite: (id: number) => void;
  onClickPoster: (id: number) => void;
}
