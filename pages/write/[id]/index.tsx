import { getCookie } from "@/src/commons/cookies/cookie";
import Write_Detail_UI from "../../../src/components/units/write_detail/write_detail_presenter";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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

export default function WriteDetail_Page(): JSX.Element {
  const router = useRouter();
  const [detail, setDetail] = useState<Data | null>(null);
  const [comments, setComments] = useState(null);

  const WRITE_DETAIL = async () => {
    try {
      const detailRES = await axios.get(
        `https://api.iimad.com/api/posting/${router.query.id}`,
        {
          headers: {
            Authorization: `Bearer ${getCookie("Authorization")}`,
          },
        }
      );

      if (detailRES.status === 200) {
        setDetail(detailRES.data.data);
        console.log(detail);
        const WRITE_COMMENTS = async () => {
          try {
            const commentsRES = await axios.get(
              `https://api.iimad.com/api/posting/comment/${router.query.id}`,
              {
                headers: {
                  Authorization: `Bearer ${getCookie("Authorization")}`,
                },
              }
            );
            if (commentsRES.status === 200) {
              setComments(commentsRES.data.data);
              console.log(comments);
            }
          } catch (error) {
            console.error("Error occurred while review searching:", error);
          }
        };
        WRITE_COMMENTS();
      }
    } catch (error) {
      console.error("Error occurred while searching:", error);
    }
  };

  useEffect(() => {
    WRITE_DETAIL();
  }, []);

  if (!detail) {
    return <div>Loading...</div>;
  }

  return <Write_Detail_UI detail={detail} />;
}
