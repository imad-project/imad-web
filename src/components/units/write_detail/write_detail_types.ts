interface Comment {
  comment_id: number;
  posting_id: number;
  user_id: number;
  user_nickname: string;
  user_profile_image: string;
  parent_id: number | null;
  child_cnt: number;
  content: string;
  like_status: number;
  like_cnt: number;
  dislike_cnt: number;
  created_at: string;
  modified_at: string;
  removed: boolean;
  author: boolean;
  reported: boolean;
}

interface CommentListResponse {
  details_list: Comment[];
  total_elements: number;
  total_pages: number;
  page_number: number;
  number_of_elements: number;
  size_of_page: number;
  sort_direction: number;
  sort_property: string;
}

interface Data {
  posting_id: number;
  contents_id: number;
  contents_title: string;
  contents_poster_path: string;
  contents_backdrop_path: string;
  user_id: number;
  user_nickname: string;
  user_profile_image: string;
  title: string;
  content: string;
  category: number;
  view_cnt: number;
  like_cnt: number;
  dislike_cnt: number;
  like_status: number;
  created_at: string;
  modified_at: string;
  comment_cnt: number;
  comment_list_response: CommentListResponse;
  scrap_id: number | null;
  scrap_status: boolean;
  author: boolean;
  reported: boolean;
  spoiler: boolean;
}

export interface IWriteDetailProps {
  detail: Data | null;
  commentsDetail: Record<number, CommentListResponse>; // 자식 댓글 목록
  onClickMoreComments: (posting_id: number, parent_id: number) => void;
  onClickContentsLike: (id: number) => void;
  onClickContentsDisLike: (id: number) => void;
  onClickContentsCancelLike: (id: number) => void;
  onClickPoster: (id: number) => void;
}
