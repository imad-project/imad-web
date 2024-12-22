import { IWriteDetailProps } from "./write_detail_types";
import * as S from "./write_detail_styles";
import { elapsedTime } from "@/src/commons/date/date";
import { TextConvert } from "@/src/commons/text_br/text_br";

import { ChangeEvent, useState } from "react";
import { getCookie } from "@/src/commons/cookies/cookie";
import axios from "axios";
import { useRouter } from "next/router";
import apiClient from "@/api/apiClient";

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
  setContentsLike,
  contentsLike,
  onClickUser,
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
  setContentsLike: (contentsLike: boolean) => void;
  contentsLike: boolean;
  onClickUser: (id: number, author: boolean) => void;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [Others, setOthers] = useState(false);
  const [reportMenuOpen, setReportMenuOpen] = useState(false);
  const [reportDesc, setReportDesc] = useState("");
  const [editComments, setEditComments] = useState(comment.content);
  const [isEdit, setIsEdit] = useState(false);
  const [editCommentsInputCount, setEditCommentsInputCount] = useState<number>(
    new TextEncoder().encode(comment.content).length
  );
  const [showEditCommentsWarning, setShowEditCommentsWarning] =
    useState<boolean>(false); // 리뷰 본문 경고 표시 여부 상태 추가
  const MAX_COMMENTS_BYTES = 1000; // 리뷰 본문 최대 바이트 수

  // 토큰 확인부
  const token =
    getCookie("Authorization") !== undefined
      ? `Bearer ${getCookie("Authorization")}`
      : "GUEST"; // token 변수를 함수 외부에서 선언

  const onInputEditHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // 입력된 문자열을 UTF-8로 인코딩하여 바이트 수 계산
    const byteLength = new TextEncoder().encode(e.target.value).length;
    setEditCommentsInputCount(byteLength); // 리뷰 제목의 바이트 수를 표시
    setEditComments(e.target.value);

    // 최대 바이트 수를 초과할 경우 경고 표시
    if (byteLength > MAX_COMMENTS_BYTES) {
      setShowEditCommentsWarning(true);
    } else {
      setShowEditCommentsWarning(false);
    }
  };

  const onChangeOtherInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReportDesc(e.target.value);
  };

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
            댓글 수정
          </S.MenuItem>
          <S.MenuItem onClick={onDelete} color="#f34336">
            댓글 삭제
          </S.MenuItem>
        </>
      ) : (
        <S.MenuItem onClick={onReport} color="#f34336">
          댓글 신고
        </S.MenuItem>
      )}
    </S.DropdownMenu>
  );

  const handleEdit = () => {
    if (comment.removed) {
      alert("삭제된 댓글은 수정이 불가능 합니다.");
      return;
    } else {
      setIsEdit(true);
      setIsMenuOpen(false);
    }
  };

  const onClickDelBtn = async () => {
    if (confirm("댓글을 삭제하시겠습니까?") == true) {
      try {
        const DelRES = await apiClient.delete(
          `/api/posting/comment/${comment.comment_id}`
        );
        if (DelRES.status === 200) {
          setContentsLike(!contentsLike);
          console.log(DelRES.statusText);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      return;
    }

    setIsMenuOpen(false);
  };

  const onClickReport = () => {
    if (!getCookie("Authorization")) {
      alert("신고기능은 회원만 가능합니다.");
      return;
    } else {
      setReportMenuOpen(true);
      setIsMenuOpen(false);
    }
  };

  const onClickOthers = () => {
    setOthers((prev) => !prev);
  };

  const onClickReportCancel = () => {
    setReportMenuOpen(false);
  };

  const onClickEditCancel = () => {
    setIsEdit(false);
  };

  const onClickReportOption = async (type: string) => {
    if (confirm("댓글을 신고하시겠습니까?") == true) {
      try {
        const ReportRES = await apiClient.post(`/api/report/comment`, {
          reported_id: comment.comment_id,
          report_type_string: type,
          report_desc: type === "OTHER" ? reportDesc : "",
        });
        if (ReportRES.status === 200) {
          console.log(ReportRES.statusText);
          setContentsLike(!contentsLike);
          setReportMenuOpen(false);
        }
      } catch (error: any) {
        alert(error?.response?.data?.message);
      }
    } else {
      return;
    }
  };

  const onClickEditSubmit = async () => {
    if (confirm("댓글을 수정하시겠습니까?") == true) {
      const expText = /[%=*><]/;
      if (expText.test(editComments) == true) {
        alert("특수문자 %, =, *, >, < 들은 사용할 수 없습니다. ");
        return;
      }

      try {
        const EditRES = await apiClient.patch(
          `/api/posting/comment/${comment.comment_id}`,
          {
            content: editComments,
          }
        );
        if (EditRES.status === 200) {
          console.log(EditRES.statusText);
          setContentsLike(!contentsLike);
          setIsMenuOpen(false);
          setIsEdit(false);
        }
      } catch (error: any) {
        alert(error?.response?.data?.message);
      }
    } else {
      return;
    }
  };

  const onClickCommentLike = async () => {
    if (!getCookie("Authorization")) {
      alert("댓글 좋아요/싫어요 는 회원만 가능합니다.");
      return;
    } else {
      try {
        const EditRES = await apiClient.patch(
          `/api/posting/comment/like/${comment.comment_id}`,
          {
            like_status: 1,
          }
        );
        if (EditRES.status === 200) {
          console.log(EditRES.statusText);
          setContentsLike(!contentsLike);
        }
      } catch (error: any) {
        alert(error?.response?.data?.message);
      }
    }
  };

  const onClickCommentDisLike = async () => {
    if (!getCookie("Authorization")) {
      alert("댓글 좋아요/싫어요 는 회원만 가능합니다.");
      return;
    } else {
      try {
        const EditRES = await apiClient.patch(
          `/api/posting/comment/like/${comment.comment_id}`,
          {
            like_status: -1,
          }
        );
        if (EditRES.status === 200) {
          console.log(EditRES.statusText);
          setContentsLike(!contentsLike);
        }
      } catch (error: any) {
        alert(error?.response?.data?.message);
      }
    }
  };

  const onClickCommentCancelLike = async () => {
    try {
      const EditRES = await apiClient.patch(
        `/api/posting/comment/like/${comment.comment_id}`,
        {
          like_status: 0,
        }
      );
      if (EditRES.status === 200) {
        console.log(EditRES.statusText);
        setContentsLike(!contentsLike);
      }
    } catch (error: any) {
      alert(error?.response?.data?.message);
    }
  };

  const handleIconClick = () => {
    setIsMenuOpen((prev) => !prev); // 메뉴 열림/닫힘 토글
  };
  return isEdit ? (
    // 댓글 작성 UI
    <S.CommentsWrapper>
      <h1>댓글 수정</h1>
      <S.CommentsInput
        onChange={onInputEditHandler}
        defaultValue={editComments}
      />
      <S.RowWrapper>
        <div>
          <p>
            <span>{editCommentsInputCount} / 1000 bytes</span>
          </p>
          {showEditCommentsWarning && (
            <p style={{ color: "red" }}>
              댓글은 최대 1000바이트를 초과할 수 없습니다.
            </p>
          )}
        </div>
        <S.CommentsSubmitBtn onClick={() => onClickEditCancel()}>
          수정 취소
        </S.CommentsSubmitBtn>
        <S.CommentsSubmitBtn onClick={() => onClickEditSubmit()}>
          수정 완료
        </S.CommentsSubmitBtn>
      </S.RowWrapper>
    </S.CommentsWrapper>
  ) : (
    // 기존 답글 작성 UI 및 댓글 내용
    <S.RowWrapper2>
      <S.ColumnWrapper>
        <S.RowWrapper2>
          <S.avatar
            src={`https://imad-image-s3.s3.ap-northeast-2.amazonaws.com/profile/${comment.user_profile_image}`}
          />
          <S.UserNickName
            onClick={() => onClickUser(comment.user_id, comment.author)}
          >
            {comment.user_nickname}
          </S.UserNickName>
          <S.Date_span>{elapsedTime(comment.created_at)}</S.Date_span>
          <S.IconBox onClick={handleIconClick}>
            <S.Icon src="/img/icon/icons/ellipsis.png" />
            {isMenuOpen && (
              <DropdownMenu
                onEdit={handleEdit}
                onDelete={onClickDelBtn}
                onReport={onClickReport}
                isAuthor={comment?.author ?? false}
              />
            )}
          </S.IconBox>
        </S.RowWrapper2>
        <S.CommentsBox>
          <S.CommentsBoxWrapper>
            <S.Contents_span>
              {comment.reported
                ? "신고된 댓글입니다."
                : comment.removed
                ? "삭제된 댓글입니다."
                : comment.content}
            </S.Contents_span>
            <S.Gray_span>
              {comment.removed
                ? ""
                : comment.created_at === comment.modified_at
                ? ""
                : "수정됨"}
            </S.Gray_span>
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
                {commentWriteOpen[comment.comment_id]
                  ? "작성 취소"
                  : "답글 작성"}
              </S.Child_span>
              <S.RowWrapper2>
                {reportMenuOpen && (
                  <S.ReportWrapper>
                    <S.ReportBtn
                      onClick={() => onClickReportOption("WRONG_INFO")}
                    >
                      잘못된 정보
                    </S.ReportBtn>
                    <S.ReportBtn onClick={() => onClickReportOption("SPAM")}>
                      스팸, 상업적 광고
                    </S.ReportBtn>
                    <S.ReportBtn onClick={() => onClickReportOption("ABUSIVE")}>
                      폭력적이거나 공격적인 내용
                    </S.ReportBtn>
                    <S.ReportBtn
                      onClick={() => onClickReportOption("INAPPROPRIATE")}
                    >
                      부적절한 내용(상업적컨텐츠, 혐오발언 등)
                    </S.ReportBtn>
                    <S.ReportBtn
                      onClick={() => onClickReportOption("COPYRIGHT_VIOLATION")}
                    >
                      저작권 침해
                    </S.ReportBtn>
                    <S.ReportBtn onClick={onClickOthers}>기타</S.ReportBtn>
                    {Others && (
                      <S.OtherWrapper>
                        <S.ReportDescWrite
                          onChange={onChangeOtherInput}
                          placeholder="신고 사유를 작성해주세요."
                        />
                        <S.OtherReportBtn
                          onClick={() => onClickReportOption("OTHER")}
                        >
                          기타 신고
                        </S.OtherReportBtn>
                      </S.OtherWrapper>
                    )}
                    <S.ReportCancelBtn onClick={onClickReportCancel}>
                      신고 취소
                    </S.ReportCancelBtn>
                  </S.ReportWrapper>
                )}
                <S.likeDiv>
                  <S.LittleIcon
                    src={
                      comment.like_status === 1
                        ? "/img/icon/icons/arrowshape.up.fill.png"
                        : "/img/icon/icons/arrowshape.up.png"
                    }
                    onClick={() =>
                      comment.like_status === 1
                        ? onClickCommentCancelLike()
                        : onClickCommentLike()
                    }
                  />
                  {comment.like_cnt}
                </S.likeDiv>
                <S.likeDiv>
                  <S.LittleIcon
                    src={
                      comment.like_status === -1
                        ? "/img/icon/icons/arrowshape.down.fill.png"
                        : "/img/icon/icons/arrowshape.down.png"
                    }
                    onClick={() =>
                      comment.like_status === -1
                        ? onClickCommentCancelLike()
                        : onClickCommentDisLike()
                    }
                  />
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
                      <span>{commentsInputCount} / 1000 bytes</span>
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
                  setContentsLike={setContentsLike}
                  contentsLike={contentsLike}
                  onClickUser={onClickUser}
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [Others, setOthers] = useState(false);
  const [reportMenuOpen, setReportMenuOpen] = useState(false);
  const [reportDesc, setReportDesc] = useState("");
  const router = useRouter();

  // 토큰 확인부
  const token =
    getCookie("Authorization") !== undefined
      ? `Bearer ${getCookie("Authorization")}`
      : "GUEST"; // token 변수를 함수 외부에서 선언

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
    const expText = /[%=*><]/;

    if (!getCookie("Authorization")) {
      alert("댓글등록은 회원만 가능합니다.");
      return;
    }

    if (expText.test(comments) == true) {
      alert("특수문자 %, =, *, >, < 들은 사용할 수 없습니다. ");
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
        const PostComments = await apiClient.post(
          `https://api.iimad.com/api/posting/comment`,
          {
            posting_id: props?.detail?.posting_id,
            parent_id: parent_id,
            content: comments,
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
            게시물 수정
          </S.MenuItem>
          <S.MenuItem onClick={onDelete} color="#f34336">
            게시물 삭제
          </S.MenuItem>
        </>
      ) : (
        <S.MenuItem onClick={onReport} color="#f34336">
          게시물 신고
        </S.MenuItem>
      )}
    </S.DropdownMenu>
  );

  const handleIconClick = () => {
    setIsMenuOpen((prev) => !prev); // 메뉴 열림/닫힘 토글
  };

  const onClickDelBtn = async () => {
    if (confirm("게시물을 삭제하시겠습니까?") == true) {
      try {
        const DelRES = await apiClient.delete(
          `/api/posting/${props.detail?.posting_id}`
        );
        if (DelRES.status === 200) {
          props.setContentsLike(!props.contentsLike);
          console.log(DelRES.statusText);
          router.back();
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      return;
    }

    setIsMenuOpen(false);
  };

  const handleEdit = () => {
    router.push(`/write/${props.detail?.posting_id}/edit`);
    setIsMenuOpen(false);
  };

  const onClickReport = () => {
    if (!getCookie("Authorization")) {
      alert("신고기능은 회원만 가능합니다.");
      return;
    } else {
      setReportMenuOpen(true);
      setIsMenuOpen(false);
    }
  };

  const onClickOthers = () => {
    setOthers((prev) => !prev);
  };

  const onClickReportCancel = () => {
    setReportMenuOpen(false);
  };

  const onChangeOtherInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReportDesc(e.target.value);
  };

  const onClickReportOption = async (type: string) => {
    if (confirm("게시물을 신고하시겠습니까?") == true) {
      try {
        const ReportRES = await apiClient.post(`/api/report/posting`, {
          reported_id: props.detail?.posting_id,
          report_type_string: type,
          report_desc: type === "OTHER" ? reportDesc : "",
        });
        if (ReportRES.status === 200) {
          console.log(ReportRES.statusText);
          props.setContentsLike(!props.contentsLike);
          setReportMenuOpen(false);
          router.back();
        }
      } catch (error: any) {
        alert(error?.response?.data?.message);
      }
    } else {
      return;
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
                  <S.UserNickName
                    onClick={() =>
                      props.onClickUser(
                        props.detail?.user_id || 0,
                        props.detail?.author || false
                      )
                    }
                  >
                    {props.detail?.user_nickname}
                  </S.UserNickName>
                  <S.RowWrapper2>
                    <S.Date_span>
                      {elapsedTime(props.detail?.created_at)}
                    </S.Date_span>
                    <S.View_cnt_span>
                      조회수 {props.detail?.view_cnt}회
                    </S.View_cnt_span>
                    <S.IconBox onClick={handleIconClick}>
                      <S.Icon src="/img/icon/icons/ellipsis.png" />
                      {isMenuOpen && (
                        <DropdownMenu
                          onEdit={handleEdit}
                          onDelete={onClickDelBtn}
                          onReport={onClickReport}
                          isAuthor={props.detail.author ?? false}
                        />
                      )}
                    </S.IconBox>
                    {reportMenuOpen && (
                      <S.ReportWrapper>
                        <S.ReportBtn
                          onClick={() => onClickReportOption("WRONG_INFO")}
                        >
                          잘못된 정보
                        </S.ReportBtn>
                        <S.ReportBtn
                          onClick={() => onClickReportOption("SPAM")}
                        >
                          스팸, 상업적 광고
                        </S.ReportBtn>
                        <S.ReportBtn
                          onClick={() => onClickReportOption("ABUSIVE")}
                        >
                          폭력적이거나 공격적인 내용
                        </S.ReportBtn>
                        <S.ReportBtn
                          onClick={() => onClickReportOption("INAPPROPRIATE")}
                        >
                          부적절한 내용(상업적컨텐츠, 혐오발언 등)
                        </S.ReportBtn>
                        <S.ReportBtn
                          onClick={() =>
                            onClickReportOption("COPYRIGHT_VIOLATION")
                          }
                        >
                          저작권 침해
                        </S.ReportBtn>
                        <S.ReportBtn onClick={onClickOthers}>기타</S.ReportBtn>
                        {Others && (
                          <S.OtherWrapper>
                            <S.ReportDescWrite
                              onChange={onChangeOtherInput}
                              placeholder="신고 사유를 작성해주세요."
                            />
                            <S.OtherReportBtn
                              onClick={() => onClickReportOption("OTHER")}
                            >
                              기타 신고
                            </S.OtherReportBtn>
                          </S.OtherWrapper>
                        )}
                        <S.ReportCancelBtn onClick={onClickReportCancel}>
                          신고 취소
                        </S.ReportCancelBtn>
                      </S.ReportWrapper>
                    )}
                    <S.Icon_img
                      src={
                        props.detail.scrap_status
                          ? "/img/icon/icons/bookmark.fill.png"
                          : "/img/icon/icons/bookmark.png"
                      }
                      onClick={() =>
                        props.detail?.scrap_status
                          ? props.onClickDelScrap()
                          : props.onClickScrap()
                      }
                    />
                  </S.RowWrapper2>
                </S.ColumnWrapper>
              </S.RowWrapper2>
              <S.DividedLine />
              <S.ContentsBox>
                <S.ColumnWrapper2>
                  <S.title_span>{props.detail?.title}</S.title_span>
                  <S.Contents_span>
                    {TextConvert(props.detail?.content)}
                  </S.Contents_span>
                </S.ColumnWrapper2>

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
                  <S.Poster_title>
                    {props.detail?.contents_title}
                  </S.Poster_title>
                </S.PosterBox>
              </S.ContentsBox>
            </S.ColumnWrapper>
          </S.RowWrapper>
          <S.DividedLine />
          <S.LikeBox>
            <S.RowWrapper3>
              <S.SubTitle>댓글[{props.detail?.comment_cnt}]</S.SubTitle>
            </S.RowWrapper3>

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

        {props.detail?.comment_list_response.details_list.map((el, index) => (
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
              setContentsLike={props.setContentsLike}
              contentsLike={props.contentsLike}
              onClickUser={props.onClickUser}
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
