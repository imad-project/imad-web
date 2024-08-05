import { IWriteDetailProps } from "./write_detail_types";
import * as S from "./write_detail_styles";
import { elapsedTime } from "@/src/commons/date/date";
import { TextConvert } from "@/src/commons/text_br/text_br";

export default function Write_Detail_UI(props: IWriteDetailProps) {
  return (
    <>
      <S.MainWrapper>
        <S.ColumnWrapper>
          <S.RowWrapper>
            <S.RowWrapper>
              <S.avatar
                src={`https://imad-image-s3.s3.ap-northeast-2.amazonaws.com/profile/${props.detail?.user_profile_image}`}
              />
              <S.ColumnWrapper>
                <h1>{props.detail?.user_nickname}</h1>
                <S.RowWrapper2>
                  <S.Date_span>
                    {elapsedTime(props.detail?.created_at)}
                  </S.Date_span>
                  <S.View_cnt_span>
                    조회수 {props.detail?.view_cnt}회
                  </S.View_cnt_span>
                </S.RowWrapper2>
              </S.ColumnWrapper>
            </S.RowWrapper>
            <S.ColumnWrapper>
              <S.Poster_img
                src={`https://image.tmdb.org/t/p/original/${props.detail?.contents_poster_path}`}
              />
              <S.Poster_title>{props.detail?.contents_title}</S.Poster_title>
            </S.ColumnWrapper>
          </S.RowWrapper>
          <S.DividedLine />
          <S.ContentsBox>
            <S.title_span>{props.detail?.title}</S.title_span>
            <S.Contents_span>
              {TextConvert(props.detail?.content)}
            </S.Contents_span>
          </S.ContentsBox>
        </S.ColumnWrapper>
      </S.MainWrapper>
    </>
  );
}
