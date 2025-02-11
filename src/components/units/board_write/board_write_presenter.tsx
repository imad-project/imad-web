import { useState } from "react";
import * as S from "./board_write_styles";
import { IBoardWriteProps } from "./board_write_types";

export default function BoardWriteUI(props: IBoardWriteProps) {
  const OPTIONS = [
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
            <S.Option key={option.value} value={option.value}>
              {option.name}
            </S.Option>
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
      </S.InputWrapper>
      <S.RowBox onClick={props.onClickSpoiler}>
        <S.SpoilerIcon
          src={
            props.isSpoiler
              ? "/img/icon/icons/checkmark.circle.png"
              : "/img/icon/icons/checkmark.circle.gray.png"
          }
        />
        <S.SpoilerSpan isCheck={props.isSpoiler}>스포일러</S.SpoilerSpan>
      </S.RowBox>
      <S.ButtonWrapper>
        <S.SubmitButton onClick={props.onClickSubmit}>등록하기</S.SubmitButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
