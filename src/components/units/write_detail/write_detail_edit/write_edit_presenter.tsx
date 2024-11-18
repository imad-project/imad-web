import { useState } from "react";
import * as S from "./write_edit_styles";
import { IBoardWriteProps } from "./write_edit_types";

export default function BoardWriteEditUI(props: IBoardWriteProps) {
  const OPTIONS = [
    { value: 0, name: "전체" },
    { value: 1, name: "자유글" },
    { value: 2, name: "질문글" },
    { value: 3, name: "토론글" },
  ];

  return (
    <S.Wrapper>
      <S.Title>게시글 수정</S.Title>

      <S.InputWrapper>
        <S.Label>글분류</S.Label>
        <S.SelectBox
          onChange={props.onChangeCategory}
          defaultValue={props.category}
          key={props.category}
        >
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
          defaultValue={props.title ? props.title : ""}
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
          defaultValue={props.content ? props.content : ""}
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
        <S.SubmitButton onClick={props.onClickCancel}>취소</S.SubmitButton>
        <S.SubmitButton onClick={props.onClickSubmit}>수정하기</S.SubmitButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
