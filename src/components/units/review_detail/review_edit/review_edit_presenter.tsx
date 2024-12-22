import { IMyReviewProps } from "./review_edit_types";
import * as S from "./review_edit_styles";
import { elapsedTime } from "../../../../commons/date/date";
import CircularProgressChart from "@/src/commons/rate_view/rate_view";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { getCookie } from "../../../../commons/cookies/cookie";
import ReactStars from "react-stars";
import apiClient from "@/api/apiClient";

export default function Review_EDIT(props: IMyReviewProps) {
  const [title, setTitle] = useState(props.reviewData?.title);
  const [contents, setContents] = useState(props.reviewData?.content);
  const MAX_TITLE_BYTES = 50; // 리뷰 제목 최대 바이트 수
  const MAX_CONTENT_BYTES = 1000; // 리뷰 본문 최대 바이트 수

  const [titleInputCount, setTitleInputCount] = useState<number>(
    new TextEncoder().encode(props.reviewData?.title).length
  );
  const [contentInputCount, setContentInputCount] = useState<number>(
    new TextEncoder().encode(props.reviewData?.content).length
  );
  const [showTitleWarning, setShowTitleWarning] = useState<boolean>(false); // 리뷰 제목 경고 표시 여부 상태 추가
  const [showContentWarning, setShowContentWarning] = useState<boolean>(false); // 리뷰 본문 경고 표시 여부 상태 추가
  const [isSpoiler, setIsSpoiler] = useState(props.reviewData?.spoiler);
  const [selectedRating, setSelectdRating] = useState<number>(
    props.reviewData?.score ? props.reviewData.score / 2 : 0
  );
  const [rating, setRating] = useState<number>(
    props.reviewData?.score ? props.reviewData.score : 0
  );
  const router = useRouter();

  // 토큰 확인부
  const token =
    getCookie("Authorization") !== undefined
      ? `Bearer ${getCookie("Authorization")}`
      : "GUEST"; // token 변수를 함수 외부에서 선언

  const onInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // 입력된 문자열을 UTF-8로 인코딩하여 바이트 수 계산
    const byteLength = new TextEncoder().encode(e.target.value).length;
    setTitleInputCount(byteLength); // 리뷰 제목의 바이트 수를 표시
    setTitle(e.target.value);

    // 최대 바이트 수를 초과할 경우 경고 표시
    if (byteLength > MAX_TITLE_BYTES) {
      setShowTitleWarning(true);
    } else {
      setShowTitleWarning(false);
    }
  };

  const onTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    // 입력된 문자열을 UTF-8로 인코딩하여 바이트 수 계산
    const byteLength = new TextEncoder().encode(e.target.value).length;
    setContentInputCount(byteLength); // 리뷰 본문의 바이트 수를 표시
    setContents(e.target.value);
    // 최대 바이트 수를 초과할 경우 경고 표시
    if (byteLength > MAX_CONTENT_BYTES) {
      setShowContentWarning(true);
    } else {
      setShowContentWarning(false);
    }
  };

  const ratingChanged = (newRating: number) => {
    console.log(newRating * 2);
    setSelectdRating(newRating);
    setRating(newRating * 2);
    console.log(rating);
  };

  const onClickSpoiler = () => {
    setIsSpoiler((prev) => !prev);
  };

  const onClickReviewSubmit = async () => {
    if (!getCookie("Authorization")) {
      alert("리뷰수정은 회원만 가능합니다.");
      return;
    }
    if (!title && !contents) {
      alert("리뷰 제목과 본문은 비어있을 수 없습니다.");
      return;
    }

    const expText = /[%=*><]/;
    if (expText.test(title ? title : "") == true) {
      alert("특수문자 %, =, *, >, < 들은 사용할 수 없습니다. ");
      return;
    }
    if (expText.test(contents ? contents : "") == true) {
      alert("특수문자 %, =, *, >, < 들은 사용할 수 없습니다. ");
      return;
    }
    if (showTitleWarning || showContentWarning) {
      // 제목이나 본문의 글자 수 제한을 초과한 경우
      alert("리뷰 제목과 본문은 각각 최대 글자 수를 초과할 수 없습니다.");
      return; // 통신을 수행하지 않고 함수 종료
    }

    if (
      title &&
      contents &&
      !showTitleWarning &&
      !showContentWarning &&
      getCookie("Authorization") !== undefined
    ) {
      try {
        const EditReview = await apiClient.patch(
          `/api/review/${props.reviewData?.review_id}`,
          {
            title: title,
            content: contents,
            score: rating,
            is_spoiler: isSpoiler,
          }
        );
        if (EditReview.status === 200) {
          alert("리뷰수정 성공!");
          router.back();
        }
        if (EditReview.data.status === 409) {
          alert(EditReview.data.message);
        }
      } catch (error: any) {
        alert(error?.response?.data?.message);
        console.error("Error occurred posting review:", error);
      }
    }
  };

  const onClickBack = () => {
    router.back();
  };

  return (
    <S.MainWrapper>
      <S.BetweenRowBox>
        <S.title_span>리뷰 수정</S.title_span>
      </S.BetweenRowBox>

      {props.reviewData ? (
        <>
          <div key={props.reviewData?.review_id}>
            <S.reviewWrapper>
              <S.RowWrapper>
                <S.PosterBox>
                  <S.Poster_img
                    src={`https://image.tmdb.org/t/p/original/${props.reviewData?.contents_poster_path}`}
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
                    <S.reviewBox>
                      <S.reviewContentsWrapper>
                        <S.reviewInput
                          onChange={onInputHandler}
                          defaultValue={props.reviewData.title}
                        />
                        <p>
                          <span>{titleInputCount} /50 bytes</span>
                        </p>
                        {showTitleWarning && (
                          <p style={{ color: "red" }}>
                            리뷰 제목은 최대 50바이트를 초과할 수 없습니다.
                          </p>
                        )}

                        <S.reviewTextArea
                          onChange={onTextareaHandler}
                          defaultValue={props.reviewData.content}
                        />
                        <p>
                          <span>{contentInputCount}/1000 bytes</span>
                        </p>
                        {showContentWarning && (
                          <p style={{ color: "red" }}>
                            리뷰 본문은 최대 1000바이트를 초과할 수 없습니다.
                          </p>
                        )}
                        <S.RowBox>
                          <>
                            <span>평점: {rating}/10</span>
                            <ReactStars
                              count={5}
                              value={selectedRating}
                              size={24}
                              onChange={ratingChanged}
                              half={true}
                            />
                          </>
                          <S.ClickRowBox onClick={onClickSpoiler}>
                            <S.SpoilerIcon
                              src={
                                isSpoiler
                                  ? "/img/icon/icons/checkmark.circle.png"
                                  : "/img/icon/icons/checkmark.circle.gray.png"
                              }
                            />
                            <S.SpoilerSpan
                              isCheck={
                                isSpoiler == undefined ? false : isSpoiler
                              }
                            >
                              스포일러
                            </S.SpoilerSpan>
                          </S.ClickRowBox>
                        </S.RowBox>
                      </S.reviewContentsWrapper>
                    </S.reviewBox>
                  </S.reviewBox>
                </S.ColumnBox>
                <S.RateBox>
                  <CircularProgressChart value={rating} />
                </S.RateBox>
              </S.RowWrapper>
            </S.reviewWrapper>
          </div>
        </>
      ) : (
        <></>
      )}
      <S.RowBox>
        <S.ReviewEditBtn2 onClick={onClickBack}>수정 취소</S.ReviewEditBtn2>
        <S.ReviewEditBtn onClick={onClickReviewSubmit}>
          리뷰 수정
        </S.ReviewEditBtn>
      </S.RowBox>
    </S.MainWrapper>
  );
}
