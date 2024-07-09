interface IData {
  user_id: number;
  user_nickname: string;
  user_profile_image: string;
  my_review_cnt: number;
  my_posting_cnt: number;
  my_scrap_cnt: number;
  bookmark_list_response: {
    details_list: [];
    total_elements: number;
    total_pages: number;
    page_number: number;
    number_of_elements: number;
    size_of_page: number;
    sort_direction: number;
    sort_property: number;
  };
}

export interface IProfileProps {
  data: IData | null;
}
