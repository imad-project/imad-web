import { IWriteDetailProps } from "./write_detail_types";
import * as S from "./write_detail_styles";
import { elapsedTime } from "@/src/commons/date/date";
import { TextConvert } from "@/src/commons/text_br/text_br";

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
            <S.SubTitle>댓글[{props.detail?.comment_cnt}]</S.SubTitle>
            <S.RowWrapper2>
              <S.LikeButton
                onClick={() => {
                  if (props.detail?.posting_id !== undefined) {
                    props.onClickContentsLike(props.detail.posting_id);
                  }
                }}
              >
                <S.LittleIcon src="/img/icon/icons/arrowshape.white.up.fill.png" />
                <S.LikeSpan>추천 {props.detail?.like_cnt}</S.LikeSpan>
              </S.LikeButton>
              <S.LikeButton
                onClick={() => {
                  if (props.detail?.posting_id !== undefined) {
                    props.onClickContentsDisLike(props.detail.posting_id);
                  }
                }}
              >
                <S.LittleIcon src="/img/icon/icons/arrowshape.white.down.fill.png" />
                <S.LikeSpan>비추천 {props.detail?.dislike_cnt}</S.LikeSpan>
              </S.LikeButton>
            </S.RowWrapper2>
          </S.LikeBox>
        </S.ColumnWrapper>

        {props.detail?.comment_list_response.details_list.map((el) => (
          <S.CommentsWrapper key={el.comment_id}>
            <CommentItem
              key={el.comment_id}
              comment={el}
              commentsDetail={props.commentsDetail}
              onClickMoreComments={props.onClickMoreComments}
            />
          </S.CommentsWrapper>
        ))}
      </S.MainWrapper>
    </>
  );
}
