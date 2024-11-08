import { IWriteDetailProps } from "./write_detail_types";
import * as S from "./write_detail_styles";
import { elapsedTime } from "@/src/commons/date/date";
import { TextConvert } from "@/src/commons/text_br/text_br";

import { useState } from "react";

const CommentItem = ({
  comment,
  commentsDetail,
  onClickMoreComments,
}: {
  comment: any;
  commentsDetail: any;
  onClickMoreComments: (posting_id: number, parent_id: number) => void;
}) => {
  return (
    <S.RowWrapper2>
      <S.ColumnWrapper>
        <S.RowWrapper2>
          <S.avatar
            src={`https://imad-image-s3.s3.ap-northeast-2.amazonaws.com/profile/${comment.user_profile_image}`}
          />
          <S.UserNickName>{comment.user_nickname}</S.UserNickName>
          <S.Date_span>{elapsedTime(comment.created_at)}</S.Date_span>
        </S.RowWrapper2>
        <S.CommentsBox>
          <S.CommentsBoxWrapper>
            <S.Contents_span>{comment.content}</S.Contents_span>
            <S.DividedLine />
            <S.RowWrapper>
              <S.Child_span
                onClick={() =>
                  onClickMoreComments(comment.posting_id, comment.comment_id)
                }
              >
                댓글 {comment.child_cnt}개 더보기
              </S.Child_span>
              <S.RowWrapper2>
                <S.likeDiv>
                  <S.LittleIcon src="/img/icon/icons/arrowshape.up.png" />
                  {comment.like_cnt}
                </S.likeDiv>
                <S.likeDiv>
                  <S.LittleIcon src="/img/icon/icons/arrowshape.down.png" />
                  {comment.dislike_cnt}
                </S.likeDiv>
              </S.RowWrapper2>
            </S.RowWrapper>
            {commentsDetail[comment.comment_id]?.details_list.map(
              (childComment: any) => (
                <CommentItem
                  key={childComment.comment_id}
                  comment={childComment}
                  commentsDetail={commentsDetail}
                  onClickMoreComments={onClickMoreComments}
                />
              )
            )}
          </S.CommentsBoxWrapper>
        </S.CommentsBox>
      </S.ColumnWrapper>
    </S.RowWrapper2>
  );
};

export default function Write_Detail_UI(props: IWriteDetailProps) {
  const [commentsOpen, setCommentsOpen] = useState(false);

  const handleCommentsOpen = () => {
    setCommentsOpen(!commentsOpen);
  };

  if (!props.detail) {
    return <div>Loading...</div>; // 데이터가 로드되지 않은 상태 처리
  }
  return (
    <>
      <S.MainWrapper>
        <S.ColumnWrapper>
          <S.RowWrapper>
            <S.ColumnWrapper>
              <S.RowWrapper2>
                <S.avatar
                  src={`https://imad-image-s3.s3.ap-northeast-2.amazonaws.com/profile/${props.detail?.user_profile_image}`}
                />
                <S.ColumnWrapper>
                  <S.UserNickName>{props.detail?.user_nickname}</S.UserNickName>
                  <S.RowWrapper2>
                    <S.Date_span>
                      {elapsedTime(props.detail?.created_at)}
                    </S.Date_span>
                    <S.View_cnt_span>
                      조회수 {props.detail?.view_cnt}회
                    </S.View_cnt_span>
                  </S.RowWrapper2>
                </S.ColumnWrapper>
              </S.RowWrapper2>
              <S.DividedLine />
              <S.ContentsBox>
                <S.title_span>{props.detail?.title}</S.title_span>
                <S.Contents_span>
                  {TextConvert(props.detail?.content)}
                </S.Contents_span>
              </S.ContentsBox>
            </S.ColumnWrapper>

            <S.PosterBox
              onClick={() => {
                if (props.detail?.contents_id !== undefined) {
                  props.onClickPoster(props.detail.contents_id);
                }
              }}
            >
              <S.Poster_img
                src={`https://image.tmdb.org/t/p/original/${props.detail?.contents_poster_path}`}
              />
              <S.Poster_title>{props.detail?.contents_title}</S.Poster_title>
            </S.PosterBox>
          </S.RowWrapper>
          <S.DividedLine />
          <S.LikeBox>
            <S.RowWrapper2>
              <S.SubTitle>댓글[{props.detail?.comment_cnt}]</S.SubTitle>
              <S.Gray_span_btn onClick={handleCommentsOpen}>
                {commentsOpen ? "닫기" : "열기"}
              </S.Gray_span_btn>
            </S.RowWrapper2>

            <S.RowWrapper2>
              <S.LikeButton
                onClick={() => {
                  props.detail?.posting_id
                    ? props.detail.like_status === 1
                      ? props.onClickContentsCancelLike(props.detail.posting_id)
                      : props.onClickContentsLike(props.detail?.posting_id)
                    : "";
                }}
                isLiked={props.detail?.like_status === 1}
              >
                <S.LittleIcon src="/img/icon/icons/arrowshape.white.up.fill.png" />
                <S.LikeSpan>개추 {props.detail?.like_cnt}</S.LikeSpan>
              </S.LikeButton>
              <S.LikeButton
                onClick={() => {
                  props.detail?.posting_id
                    ? props.detail.like_status === -1
                      ? props.onClickContentsCancelLike(props.detail.posting_id)
                      : props.onClickContentsDisLike(props.detail?.posting_id)
                    : "";
                }}
                isLiked={props.detail?.like_status === -1}
              >
                <S.LittleIcon src="/img/icon/icons/arrowshape.white.down.fill.png" />
                <S.LikeSpan>비추 {props.detail?.dislike_cnt}</S.LikeSpan>
              </S.LikeButton>
            </S.RowWrapper2>
          </S.LikeBox>
        </S.ColumnWrapper>

        {commentsOpen &&
          props.detail?.comment_list_response.details_list.map((el) => (
            <S.CommentsWrapper key={el.comment_id}>
              <CommentItem
                key={el.comment_id}
                comment={el}
                commentsDetail={props.commentsDetail}
                onClickMoreComments={props.onClickMoreComments}
              />
            </S.CommentsWrapper>
          ))}

        <S.CommentsWrapper></S.CommentsWrapper>
      </S.MainWrapper>
    </>
  );
}
