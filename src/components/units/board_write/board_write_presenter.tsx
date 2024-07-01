import * as S from "./board_write_styles";
import { IBoardWriteProps } from "./board_write_types";

export default function BoardWriteUI(props: IBoardWriteProps) {
  const OPTIONS = [
    { value: 0, name: "전체" },
    { value: 1, name: "자유글" },
    { value: 2, name: "질문글" },
    { value: 3, name: "토론글" },
  ];

  return (
    <S.Wrapper>
      <S.Title>게시글 등록</S.Title>

      <S.InputWrapper>
        <S.Label>글분류</S.Label>
        <S.SelectBox onChange={props.onChangeCategory}>
          {OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </S.SelectBox>
        <S.Label>제목</S.Label>
        <S.Subject
          onChange={props.handleTitleChange}
          type="text"
          placeholder="제목을 작성해주세요."
        />
        <p>
          <S.BytesSpan>{props.titleCount} /50 bytes</S.BytesSpan>
        </p>
        <S.ErrorLog>{props.titleError}</S.ErrorLog>
      </S.InputWrapper>

      <S.InputWrapper>
        <S.Label>내용</S.Label>
        <S.Contents
          onChange={props.handleContentsChange}
          placeholder="내용을 작성해주세요."
        />
        <p>
          <S.BytesSpan>{props.contentsCount} /5000 bytes</S.BytesSpan>
        </p>
        <S.ErrorLog>{props.contentsError}</S.ErrorLog>
        <S.Label>작성글에 스포일러가 포함되어 있나요?</S.Label>
        <S.RadioBox>
          <S.RadioBtn>
            <S.RadioCheck
              type="radio"
              value={1}
              checked={props.x === 1}
              onChange={props.handleSpoiler}
            />
            <S.Label2>네!</S.Label2>
          </S.RadioBtn>
          <S.RadioBtn>
            <S.RadioCheck
              type="radio"
              value={2}
              checked={props.x === 2}
              onChange={props.handleSpoiler}
            />
            <S.Label2>아니요!</S.Label2>
          </S.RadioBtn>
        </S.RadioBox>
      </S.InputWrapper>
      <S.ButtonWrapper>
        <S.SubmitButton onClick={props.onClickSubmit}>등록하기</S.SubmitButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
