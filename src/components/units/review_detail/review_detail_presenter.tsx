import { IMyReviewProps } from "./review_detail_types";
import * as S from "./review_detail_styles";
import { elapsedTime } from "../../../commons/date/date";
import CircularProgressChart from "@/src/commons/rate_view/rate_view";
import { useState } from "react";

export default function MyReview_UI(props: IMyReviewProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const DropdownMenu = ({
    onEdit,
    onDelete,
    onReport,
    isAuthor,
  }: {
    onEdit?: () => void;
    onDelete?: () => void;
    onReport?: () => void;
    isAuthor: boolean;
  }) => (
    <S.DropdownMenu>
      {isAuthor ? (
        <>
          <S.MenuItem onClick={onEdit} color="#00aaff">
            리뷰 수정
          </S.MenuItem>
          <S.MenuItem onClick={onDelete} color="#f34336">
            리뷰 삭제
          </S.MenuItem>
        </>
      ) : (
        <S.MenuItem onClick={onReport} color="#f34336">
          리뷰 신고
        </S.MenuItem>
      )}
    </S.DropdownMenu>
  );

  const handleIconClick = () => {
    setIsMenuOpen((prev) => !prev); // 메뉴 열림/닫힘 토글
  };

  const handleEdit = () => {
    console.log("수정 클릭"); // 여기에 수정 로직 추가
    setIsMenuOpen(false);
  };

  const handleDelete = () => {
    console.log("삭제 클릭"); // 여기에 삭제 로직 추가
    setIsMenuOpen(false);
  };

  const handleReport = () => {
    console.log("신고 클릭"); // 여기에 신고 로직 추가
    setIsMenuOpen(false);
  };

  return (
    <S.MainWrapper>
      <S.BetweenRowBox>
        <S.title_span>리뷰 단일 보기</S.title_span>
        <S.IconBox onClick={handleIconClick}>
          <S.Icon src="/img/icon/icons/ellipsis.png" />
        </S.IconBox>
        {isMenuOpen && (
          <DropdownMenu
            onEdit={handleEdit}
            onDelete={handleDelete}
            onReport={handleReport}
            isAuthor={props.reviewData?.author ?? false}
          />
        )}
      </S.BetweenRowBox>

      {props.reviewData ? (
        <>
          <div key={props.reviewData?.review_id}>
            <S.reviewWrapper>
              <S.RowWrapper>
                <S.PosterBox>
                  <S.Poster_img
                    src={`https://image.tmdb.org/t/p/original/${props.reviewData?.contents_poster_path}`}
                    onClick={() =>
                      props.reviewData?.contents_id
                        ? props.onClickPoster(props.reviewData?.contents_id)
                        : ""
                    }
                  />
                  <S.Poster_title>
                    {props.reviewData?.contents_title}
                  </S.Poster_title>
                </S.PosterBox>
                <S.ColumnBox>
                  <S.RowWrapper>
                    <S.avatar
                      src={`https://imad-image-s3.s3.ap-northeast-2.amazonaws.com/profile/${props.reviewData?.user_profile_image}`}
                    />
                    <S.NickNameTitle>
                      {props.reviewData?.user_nickname}
                    </S.NickNameTitle>
                  </S.RowWrapper>
                  <S.reviewBox>
                    <S.reviewContentsWrapper>
                      <S.Review_title>{props.reviewData?.title}</S.Review_title>

                      <S.Review_contents>
                        {props.reviewData?.content}
                      </S.Review_contents>
                      <S.DividedLine />
                      <S.RowWrapper>
                        <S.likeDiv>
                          <S.LittleIcon src="/img/icon/icons/arrowshape.up.png" />
                          {props.reviewData?.like_cnt}
                        </S.likeDiv>
                        <S.likeDiv>
                          <S.LittleIcon src="/img/icon/icons/arrowshape.down.png" />
                          {props.reviewData?.dislike_cnt}
                        </S.likeDiv>
                        <S.Date_span>
                          {elapsedTime(props.reviewData?.created_at)}
                        </S.Date_span>
                      </S.RowWrapper>
                    </S.reviewContentsWrapper>
                  </S.reviewBox>
                </S.ColumnBox>
                <S.RateBox>
                  <CircularProgressChart value={props.reviewData?.score} />
                </S.RateBox>
              </S.RowWrapper>
            </S.reviewWrapper>
          </div>
        </>
      ) : (
        <></>
      )}
    </S.MainWrapper>
  );
}
