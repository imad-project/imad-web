import { IMyScrapProps } from "./myscrap_types";
import * as S from "./myscrap_styles";
import { elapsedTime } from "@/src/commons/date/date";

export default function MyScrap_UI(props: IMyScrapProps) {
  return (
    <S.MainWrapper>
      <S.title_span>내 스크랩</S.title_span>
      {props.scrapData?.details_list.map((el) => (
        <div key={el.scrap_id}>
          <S.writeWrapper>
            <S.RowWrapper>
              <S.PosterBox>
                <S.Poster_img
                  id={el.contents_id.toString()}
                  src={`https://image.tmdb.org/t/p/original/${el.contents_poster_path}`}
                />
              </S.PosterBox>
              <S.ColumnBox>
                <S.RowWrapper>
                  <S.avatar
                    src={`https://imad-image-s3.s3.ap-northeast-2.amazonaws.com/profile/${el.user_profile_image}`}
                  />
                  <h1>{el.user_nickname}</h1>
                </S.RowWrapper>
                <S.WriteBox>
                  <S.reviewContentsWrapper>
                    <S.Poster_title>{el.contents_title}</S.Poster_title>
                    <S.Write_title>{el.posting_title}</S.Write_title>
                    <S.DividedLine />
                    <S.RowWrapper>
                      <S.Date_span>{elapsedTime(el.created_date)}</S.Date_span>
                    </S.RowWrapper>
                  </S.reviewContentsWrapper>
                </S.WriteBox>
              </S.ColumnBox>
            </S.RowWrapper>
          </S.writeWrapper>
        </div>
      ))}
    </S.MainWrapper>
  );
}
