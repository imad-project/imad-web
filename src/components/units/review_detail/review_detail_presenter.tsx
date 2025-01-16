import { IMyReviewProps } from "./review_detail_types";
import * as S from "./review_detail_styles";
import { elapsedTime } from "../../../commons/date/date";
import CircularProgressChart from "@/src/commons/rate_view/rate_view";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { getCookie } from "../../../../src/commons/cookies/cookie";
import apiClient from "@/api/apiClient";
import { profile_url } from "@/src/commons/constants/constants";

export default function MyReview_UI(props: IMyReviewProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [reportMenuOpen, setReportMenuOpen] = useState(false);
  const [reportDesc, setReportDesc] = useState("");
  const [Others, setOthers] = useState(false);
  const router = useRouter();

  // 토큰 확인부
  const token =
    getCookie("Authorization") !== undefined
      ? `Bearer ${getCookie("Authorization")}`
      : "GUEST"; // token 변수를 함수 외부에서 선언

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
    router.push(`/review/${props.reviewData?.review_id}/edit`);
    setIsMenuOpen(false);
  };

  const onClickDelBtn = async () => {
    if (confirm("리뷰를 삭제하시겠습니까?") == true) {
      try {
        const DelRES = await apiClient.delete(
          `/api/review/${props.reviewData?.review_id}`
        );
        if (DelRES.status === 200) {
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

  const onClickReportOption = async (type: string) => {
    if (confirm("리뷰를 신고하시겠습니까?") == true) {
      try {
        const ReportRES = await apiClient.post(`/api/report/review`, {
          reported_id: props.reviewData?.review_id,
          report_type_string: type,
          report_desc: type === "OTHER" ? reportDesc : "",
        });
        if (ReportRES.status === 200) {
          console.log(ReportRES.statusText);
          router.back();
        }
      } catch (error: any) {
        alert(error?.response?.data?.message);
      }
    } else {
      return;
    }
  };

  const onClickUser = (id: number, author: boolean) => {
    if (token == "GUEST") {
      alert("다른 사용자의 프로필은 회원만 열람할 수 있습니다.");
      return;
    }

    if (author) {
      void router.push("/profile");
      return;
    } else {
      void router.push(`/otheruser/${id}`);
      return;
    }
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
            onDelete={onClickDelBtn}
            onReport={onClickReport}
            isAuthor={props.reviewData?.author ?? false}
          />
        )}
      </S.BetweenRowBox>
      {reportMenuOpen && (
        <S.ReportWrapper>
          <S.ReportBtn onClick={() => onClickReportOption("WRONG_INFO")}>
            잘못된 정보
          </S.ReportBtn>
          <S.ReportBtn onClick={() => onClickReportOption("SPAM")}>
            스팸, 상업적 광고
          </S.ReportBtn>
          <S.ReportBtn onClick={() => onClickReportOption("ABUSIVE")}>
            폭력적이거나 공격적인 내용
          </S.ReportBtn>
          <S.ReportBtn onClick={() => onClickReportOption("INAPPROPRIATE")}>
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
              <S.OtherReportBtn onClick={() => onClickReportOption("OTHER")}>
                기타 신고
              </S.OtherReportBtn>
            </S.OtherWrapper>
          )}
          <S.ReportCancelBtn onClick={onClickReportCancel}>
            신고 취소
          </S.ReportCancelBtn>
        </S.ReportWrapper>
      )}

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
                      src={`${profile_url}${props.reviewData?.user_profile_image}`}
                    />
                    <S.NickNameTitle
                      onClick={() =>
                        onClickUser(
                          props.reviewData?.user_id || 0,
                          props.reviewData?.author || false
                        )
                      }
                    >
                      {props.reviewData?.user_nickname}
                    </S.NickNameTitle>
                  </S.RowWrapper>
                  <S.reviewBox>
                    <S.reviewContentsWrapper>
                      <S.ReviewClickBox>
                        <S.Review_title>
                          {props.reviewData?.title}
                        </S.Review_title>

                        <S.Review_contents>
                          {props.reviewData?.content}
                        </S.Review_contents>
                      </S.ReviewClickBox>

                      <S.DividedLine />
                      <S.RowWrapper>
                        <S.likeDiv>
                          <S.LittleIcon
                            src={
                              props.reviewData?.like_status === 1
                                ? "/img/icon/icons/arrowshape.up.fill.png"
                                : "/img/icon/icons/arrowshape.up.png"
                            }
                            onClick={() =>
                              props.reviewData?.like_status === 1
                                ? props.onClickCancelLike(
                                    props.reviewData?.review_id
                                  )
                                : props.onClickLike(
                                    props.reviewData?.review_id || 0
                                  )
                            }
                          />
                          {props.reviewData?.like_cnt}
                        </S.likeDiv>
                        <S.likeDiv>
                          <S.LittleIcon
                            src={
                              props.reviewData?.like_status === -1
                                ? "/img/icon/icons/arrowshape.down.fill.png"
                                : "/img/icon/icons/arrowshape.down.png"
                            }
                            onClick={() =>
                              props.reviewData?.like_status === -1
                                ? props.onClickCancelLike(
                                    props.reviewData?.review_id
                                  )
                                : props.onClickDisLike(
                                    props.reviewData?.review_id || 0
                                  )
                            }
                          />
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
