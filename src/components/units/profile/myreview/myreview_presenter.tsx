import { IMyReviewProps } from "./myreview_types";
import * as S from "./myreview_styles";
import { elapsedTime } from "../../../../commons/date/date";
import CircularProgressChart from "@/src/commons/rate_view/rate_view";
import { useRouter } from "next/router";
import { profile_url } from "@/src/commons/constants/constants";

export default function MyReview_UI(props: IMyReviewProps) {
  const router = useRouter();

  const onClickReview = (id: number) => {
    void router.push(`/review/${id}`);
  };

  return (
    <S.MainWrapper>
      <S.title_span>내 리뷰</S.title_span>
      {props.reviewData?.details_list.map((el) => (
        <div key={el.review_id}>
          <S.reviewWrapper>
            <S.RowWrapper>
              <S.PosterBox>
                <S.Poster_img
                  id={el.contents_id.toString()}
                  src={`https://image.tmdb.org/t/p/original/${el.contents_poster_path}`}
                  onClick={props.onClickPoster}
                />
                <S.Poster_title>{el.contents_title}</S.Poster_title>
              </S.PosterBox>
              <S.ColumnBox>
                <S.RowWrapper>
                  <S.avatar src={`${profile_url}${el.user_profile_image}`} />
                  <S.NickNameTitle>{el.user_nickname}</S.NickNameTitle>
                </S.RowWrapper>
                <S.reviewBox>
                  <S.reviewContentsWrapper>
                    <S.ReviewClickBox
                      onClick={() => onClickReview(el.review_id)}
                    >
                      <S.Review_title>{el.title}</S.Review_title>

                      <S.Review_contents>{el.content}</S.Review_contents>
                    </S.ReviewClickBox>

                    <S.DividedLine />
                    <S.RowWrapper>
                      <S.likeDiv>
                        <S.LittleIcon src="/img/icon/icons/arrowshape.up.png" />
                        {el.like_cnt}
                      </S.likeDiv>
                      <S.likeDiv>
                        <S.LittleIcon src="/img/icon/icons/arrowshape.down.png" />
                        {el.dislike_cnt}
                      </S.likeDiv>
                      <S.Date_span>{elapsedTime(el.created_at)}</S.Date_span>
                    </S.RowWrapper>
                  </S.reviewContentsWrapper>
                </S.reviewBox>
              </S.ColumnBox>
              <S.RateBox>
                <CircularProgressChart value={el.score} />
              </S.RateBox>
            </S.RowWrapper>
          </S.reviewWrapper>
        </div>
      ))}
    </S.MainWrapper>
  );
}
