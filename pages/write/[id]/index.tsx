import { getCookie } from "@/src/commons/cookies/cookie";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function WriteDetail_Page(): JSX.Element {
  const router = useRouter();
  const [detail, setDetail] = useState(null);
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
  return <></>;
}
