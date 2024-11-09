import { IWriteDetailProps } from "./write_detail_types";
import * as S from "./write_detail_styles";
import { elapsedTime } from "@/src/commons/date/date";
import { TextConvert } from "@/src/commons/text_br/text_br";

import { ChangeEvent, useState } from "react";
import { getCookie } from "@/src/commons/cookies/cookie";
import axios from "axios";

const CommentItem = ({
  comment,
  commentsDetail,
  onClickMoreComments,
  index,
  handleToggle,
  commentWriteOpen,
  onInputHandler,
  comments,
  commentsInputCount,
  showCommentsWarning,
  onClickCommentsSubmit,
}: {
  comment: any;
  commentsDetail: any;
  onClickMoreComments: (posting_id: number, parent_id: number) => void;
  index: number;
  handleToggle: (index: number) => void;
  commentWriteOpen: any;
  onInputHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  comments: string;
  commentsInputCount: number;
  showCommentsWarning: boolean;
  onClickCommentsSubmit: (parent_id: number | null) => void;
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
              <S.Child_span onClick={() => handleToggle(comment.comment_id)}>
                {commentWriteOpen === index ? "작성 취소" : "답글 작성"}
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
            {commentWriteOpen[comment.comment_id] && (
              <S.CommentsWrapper>
                <h1>답글 작성</h1>
                <S.CommentsInput
                  onChange={onInputHandler}
                  placeholder="댓글을 작성해주세요."
                  value={comments}
                />
                <S.RowWrapper>
                  <div>
                    <p>
                      <span>{commentsInputCount} /1000 bytes</span>
                    </p>
                    {showCommentsWarning && (
                      <p style={{ color: "red" }}>
                        답글은 최대 1000바이트를 초과할 수 없습니다.
                      </p>
                    )}
                  </div>

                  <S.CommentsSubmitBtn
                    onClick={() => onClickCommentsSubmit(comment.comment_id)}
                  >
                    답글 등록
                  </S.CommentsSubmitBtn>
                </S.RowWrapper>
              </S.CommentsWrapper>
            )}
            {commentsDetail[comment.comment_id]?.details_list.map(
              (childComment: any) => (
                <CommentItem
                  key={childComment.comment_id}
                  comment={childComment}
                  commentsDetail={commentsDetail}
                  onClickMoreComments={onClickMoreComments}
                  index={index}
                  handleToggle={handleToggle}
                  commentWriteOpen={commentWriteOpen}
                  onInputHandler={onInputHandler}
                  comments={comments}
                  commentsInputCount={commentsInputCount}
                  showCommentsWarning={showCommentsWarning}
                  onClickCommentsSubmit={onClickCommentsSubmit}
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
  const [showCommentsWarning, setShowCommentsWarning] =
    useState<boolean>(false); // 리뷰 제목 경고 표시 여부 상태 추가
  const MAX_COMMENTS_BYTES = 1000; // 리뷰 제목 최대 바이트 수
  const [commentsInputCount, setCommentsInputCount] = useState<number>(0);
  const [comments, setComments] = useState("");
  const [commentWriteOpen, setCommentWriteOpen] = useState<
    Record<number, boolean>
  >({});

  const handleCommentsOpen = () => {
    setCommentsOpen(!commentsOpen);
  };

  const handleToggle = (commentId: number) => {
    setCommentWriteOpen((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
  };

  const onInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // 입력된 문자열을 UTF-8로 인코딩하여 바이트 수 계산
    const byteLength = new TextEncoder().encode(e.target.value).length;
    setCommentsInputCount(byteLength); // 리뷰 제목의 바이트 수를 표시
    setComments(e.target.value);

    // 최대 바이트 수를 초과할 경우 경고 표시
    if (byteLength > MAX_COMMENTS_BYTES) {
      setShowCommentsWarning(true);
    } else {
      setShowCommentsWarning(false);
    }
  };

  const onClickCommentsSubmit = async (parent_id: number | null) => {
    if (!getCookie("Authorization")) {
      alert("댓글등록은 회원만 가능합니다.");
      return;
    }
    if (!comments) {
      alert("댓글은 비어있을수 없습니다.");
      return;
    }
    if (showCommentsWarning) {
      // 제목이나 본문의 글자 수 제한을 초과한 경우
      alert("댓글의 최대 글자 수를 초과할 수 없습니다.");
      return; // 통신을 수행하지 않고 함수 종료
    }

    if (
      comments &&
      !showCommentsWarning &&
      getCookie("Authorization") !== undefined
    ) {
      try {
        const PostComments = await axios.post(
          `https://api.iimad.com/api/posting/comment`,
          {
            posting_id: props?.detail?.posting_id,
            parent_id: parent_id,
            content: comments,
          },
          {
            headers: {
              Authorization: `Bearer ${getCookie("Authorization")}`,
            },
          }
        );
        if (PostComments.data.status === 409) {
          alert(PostComments.data.message);
        }
        if (PostComments.status === 200) {
          props.setContentsLike(!props.contentsLike);
          setComments("");
          setCommentsInputCount(0);
        }
      } catch (error: any) {
        alert(error?.response?.data?.message);
        console.error("Error occurred posting review:", error);
      }
    }
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
          props.detail?.comment_list_response.details_list.map((el, index) => (
            <S.CommentsWrapper key={el.comment_id}>
              <CommentItem
                key={el.comment_id}
                comment={el}
                commentsDetail={props.commentsDetail}
                onClickMoreComments={props.onClickMoreComments}
                index={index}
                handleToggle={handleToggle}
                commentWriteOpen={commentWriteOpen}
                onInputHandler={onInputHandler}
                comments={comments}
                commentsInputCount={commentsInputCount}
                showCommentsWarning={showCommentsWarning}
                onClickCommentsSubmit={onClickCommentsSubmit}
              />
            </S.CommentsWrapper>
          ))}

        <S.CommentsWrapper>
          <h1>댓글 작성</h1>
          <S.CommentsInput
            onChange={onInputHandler}
            placeholder="댓글을 작성해주세요."
            value={comments}
          />
          <S.RowWrapper>
            <div>
              <p>
                <span>{commentsInputCount} /1000 bytes</span>
              </p>
              {showCommentsWarning && (
                <p style={{ color: "red" }}>
                  댓글은 최대 1000바이트를 초과할 수 없습니다.
                </p>
              )}
            </div>

            <S.CommentsSubmitBtn onClick={() => onClickCommentsSubmit(null)}>
              댓글 등록
            </S.CommentsSubmitBtn>
          </S.RowWrapper>
        </S.CommentsWrapper>
      </S.MainWrapper>
    </>
  );
}
