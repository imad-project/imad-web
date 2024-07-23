import { IMyReviewProps } from "./myreview_types";
import * as S from "./myreview_styles";
import ReactStars from "react-stars";
import { elapsedTime } from "../../../../commons/date/date";

export default function MyReview_UI(props: IMyReviewProps) {
  return (
    <S.MainWrapper>
      <S.title_span>내리뷰</S.title_span>
      {props.reviewData?.details_list.map((el) => (
        <div key={el.review_id}>
          <S.reviewWrapper>
            <S.RowWrapper>
              <S.PosterBox>
                <S.Poster_img
                  src={`https://image.tmdb.org/t/p/original/${el.contents_poster_path}`}
                />
                <S.Poster_title>{el.contents_title}</S.Poster_title>
              </S.PosterBox>
              <S.ColumnBox>
                <S.RowWrapper>
                  <S.avatar
                    src={`https://imad-image-s3.s3.ap-northeast-2.amazonaws.com/profile/${el.user_profile_image}`}
                  />
                  <h1>{el.user_nickname}</h1>
                </S.RowWrapper>
                <S.reviewBox>
                  <S.reviewContentsWrapper>
                    <S.Review_title>{el.title}</S.Review_title>
                    <S.DividedLine />
                    <S.Review_contents>{el.content}</S.Review_contents>
                    <S.DividedLine />
                    <h3>평점: {Math.floor(el.score * 10) / 10}</h3>
                    <ReactStars
                      count={5}
                      value={el.score / 2}
                      size={24}
                      edit={false}
                      half={true}
                    />
                  </S.reviewContentsWrapper>
                  <S.likeCntBox>
                    <S.RowWrapper>
                      <S.likeDiv>
                        <S.LittleIcon src="/img/icon/icons/arrowshape.up.png" />
                        {el.like_cnt}
                      </S.likeDiv>
                      <S.likeDiv>
                        <S.LittleIcon src="/img/icon/icons/arrowshape.down.png" />
                        {el.dislike_cnt}
                      </S.likeDiv>
                    </S.RowWrapper>
                  </S.likeCntBox>
                  <S.Date_span>{elapsedTime(el.created_at)}</S.Date_span>
                </S.reviewBox>
              </S.ColumnBox>
            </S.RowWrapper>
          </S.reviewWrapper>
        </div>
      ))}
    </S.MainWrapper>
  );
}
