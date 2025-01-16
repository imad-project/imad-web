import { IMyWriteProps } from "./mywrite_types";
import * as S from "./mywrite_styles";
import { elapsedTime } from "@/src/commons/date/date";
import { profile_url } from "@/src/commons/constants/constants";
export default function MyWritePage_UI(props: IMyWriteProps) {
  return (
    <S.MainWrapper>
      <S.title_span>내 게시물</S.title_span>
      {props.writeData?.details_list.map((el) => (
        <div key={el.posting_id}>
          <S.writeWrapper>
            <S.RowWrapper>
              <S.PosterBox onClick={() => props.onClickPoster(el.contents_id)}>
                <S.Poster_img
                  id={el.contents_id.toString()}
                  src={`https://image.tmdb.org/t/p/original/${el.contents_poster_path}`}
                />
              </S.PosterBox>
              <S.ColumnBox>
                <S.RowWrapper>
                  <S.avatar src={`${profile_url}${el.user_profile_image}`} />
                  <S.UserName>{el.user_nickname}</S.UserName>
                </S.RowWrapper>
                <S.WriteBox>
                  <S.reviewContentsWrapper>
                    <S.Poster_title>{el.contents_title}</S.Poster_title>
                    <S.Write_title
                      onClick={() => props.onClickWrite(el.posting_id)}
                    >
                      {el.title} [{el.comment_cnt}]
                    </S.Write_title>
                    <S.DividedLine />
                    <S.RowWrapper>
                      <S.View_cnt_span>조회수 {el.view_cnt}회</S.View_cnt_span>
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
                </S.WriteBox>
              </S.ColumnBox>
            </S.RowWrapper>
          </S.writeWrapper>
        </div>
      ))}
    </S.MainWrapper>
  );
}
