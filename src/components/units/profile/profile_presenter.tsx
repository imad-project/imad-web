import { IProfileProps } from "./profile_types";
import * as S from "./profile_styles";

export default function Profile_UI(props: IProfileProps) {
  return (
    <>
      <S.Wrapper>
        <S.RowWrapper>
          <S.Profile_image
            src={`https://imad-image-s3.s3.ap-northeast-2.amazonaws.com/profile/${props?.data?.user_profile_image}`}
          />
          <S.Title>{props?.data?.user_nickname}</S.Title>
        </S.RowWrapper>
        <S.Box_wrapper>
          <S.Box>
            <S.Span_box>리뷰글</S.Span_box>
            <S.Span_box>{props?.data?.my_review_cnt}</S.Span_box>
          </S.Box>
          <S.Box>
            <S.Span_box>게시글</S.Span_box>
            <S.Span_box>{props?.data?.my_posting_cnt}</S.Span_box>
          </S.Box>
          <S.Box>
            <S.Span_box>스크랩</S.Span_box>
            <S.Span_box>{props?.data?.my_scrap_cnt}</S.Span_box>
          </S.Box>
        </S.Box_wrapper>
      </S.Wrapper>
    </>
  );
}
