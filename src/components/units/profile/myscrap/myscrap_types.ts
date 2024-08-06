interface IScrapData {
  details_list: [
    {
      posting_id: number;
      contents_id: number;
      contents_title: string;
      contents_poster_path: string;
      user_id: number;
      user_nickname: string;
      user_profile_image: string;
      posting_title: string;
      category: number;

      created_date: string;

      scrap_id: number | null;
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

export interface IMyScrapProps {
  onClickScrap: (id: number) => void;
  scrapData: IScrapData | null;
}
