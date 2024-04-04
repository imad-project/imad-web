import { IDetailUIProps } from "./search_detail_types";
import * as S from "./search_detail_styles";
export default function SearchDetailUI(props: IDetailUIProps): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.posterWrapper>
          <S.titleWrapper>
            <S.subtitleBox>
              <h1>{props?.data?.name || props?.data?.title}</h1>
              <h1>{props?.data?.original_title}</h1>
            </S.subtitleBox>
            <S.subtitleBox>
              <S.subtitle>최초공개일</S.subtitle>
              <S.subtitle>{props?.data?.release_date}</S.subtitle>
            </S.subtitleBox>
            <S.mediaType>{props?.data?.contents_type}</S.mediaType>
            <div>
              {props?.data?.imad_score !== null
                ? props?.data?.imad_score.toFixed(2)
                : "평점 없음"}
            </div>
          </S.titleWrapper>

          <div>
            <S.ImgBox
              src={`https://image.tmdb.org/t/p/original/${props?.data?.poster_path}`}
              alt="Poster"
            />
          </div>
        </S.posterWrapper>

        <S.Line />
        <S.subWrapper>
          <S.title>개요</S.title>
          <S.title>{props?.data?.overview}</S.title>
        </S.subWrapper>

        <S.Line />
        {props.review?.details_list.map((el) => (
          <div key={el.review_id}>
            <S.reviewWrapper>
              <S.RowWrapper>
                <S.avatar src="/img/icon/avatar.png" />
                <h1>{el.user_nickname}</h1>
              </S.RowWrapper>
              <S.reviewBox>
                <S.reviewContentsWrapper>
                  <h2>{el.title}</h2>

                  <h2>{el.content}</h2>
                </S.reviewContentsWrapper>
                <S.likeCntBox>
                  좋아요:{el.like_cnt}/싫어요:{el.dislike_cnt}
                </S.likeCntBox>
              </S.reviewBox>

              <S.Line />
              <S.likeWrapper>
                <S.likeButton onClick={() => props.onClickLike(el.review_id)}>
                  좋아요
                </S.likeButton>
                <S.likeButton
                  onClick={() => props.onClickDisLike(el.review_id)}
                >
                  싫어요
                </S.likeButton>
              </S.likeWrapper>
            </S.reviewWrapper>
          </div>
        ))}
      </S.Wrapper>
    </>
  );
}
