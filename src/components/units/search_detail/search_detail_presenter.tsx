import { IDetailUIProps } from "./search_detail_types";
import * as S from "./search_detail_styles";
export default function SearchDetailUI(props: IDetailUIProps): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.RowWrapper>
          <div>
            <h1>{props?.data?.name || props?.data?.title}</h1>
            <h2>{props?.data?.contents_type}</h2>
          </div>
          <S.ImgBox
            src={`https://image.tmdb.org/t/p/original/${props?.data?.poster_path}`}
            alt="Poster"
          />
        </S.RowWrapper>

        <span>----------------------------------------------</span>
        <h3>{props?.data?.overview}</h3>
      </S.Wrapper>
    </>
  );
}
