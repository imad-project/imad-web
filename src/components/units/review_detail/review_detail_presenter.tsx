import { IMyReviewProps } from "./review_detail_types";
import * as S from "./review_detail_styles";
import { elapsedTime } from "../../../commons/date/date";
import CircularProgressChart from "@/src/commons/rate_view/rate_view";

export default function MyReview_UI(props: IMyReviewProps) {
  return (
    <S.MainWrapper>
      <S.title_span>리뷰 단일 보기</S.title_span>
      {props.reviewData ? (
        <>
          <div key={props.reviewData?.review_id}>
            <S.reviewWrapper>
              <S.RowWrapper>
                <S.PosterBox>
                  <S.Poster_img
                    src={`https://image.tmdb.org/t/p/original/${props.reviewData?.contents_poster_path}`}
                    onClick={props.onClickPoster}
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
                    <h1>{props.reviewData?.user_nickname}</h1>
                  </S.RowWrapper>
                  <S.reviewBox>
                    <S.reviewContentsWrapper>
                      <S.Review_title>{props.reviewData?.title}</S.Review_title>
                      <S.DividedLine />
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
