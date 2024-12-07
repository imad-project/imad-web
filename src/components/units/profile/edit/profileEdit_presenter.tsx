import * as S from "./profileEdit_styles";

export default function ProfileEdit_Ui(props: any) {
  const lengthCheck = (): string => {
    if (props.nickName.length < 2) {
      return "red";
    } else if (props.nickName.length > 10) {
      return "red";
    } else {
      return "green";
    }
  };

  return (
    <>
      <S.Title>회원정보 수정</S.Title>
      <div>
        <S.SubTitle>닉네임</S.SubTitle>
        <S.Input
          type="text"
          onChange={props.onChangeNickName}
          defaultValue={props.nickName}
        />
        {props.isChecked ? (
          props.nickNameCheck ? (
            <S.AlertSpan color="green">
              사용할 수 있는 닉네임입니다!
            </S.AlertSpan>
          ) : (
            <S.AlertSpan color="red">사용할 수 없는 닉네임입니다!</S.AlertSpan>
          )
        ) : (
          ""
        )}
        <S.BtnBox>
          <S.LittleTitle color={lengthCheck()}>
            {props.nickName.length}/10
          </S.LittleTitle>
          <S.SmallBtn onClick={() => props.NICKNAMECHECK()}>
            중복확인
          </S.SmallBtn>
        </S.BtnBox>
      </div>

      <S.Wrapper>
        <S.SubTitle>성별</S.SubTitle>
        <S.BtnBox>
          <S.GenderDiv
            isSelected={props.gender === "MALE"}
            onClick={props.onClickMale}
          >
            남성
          </S.GenderDiv>
          <S.GenderDiv
            isSelected={props.gender === "FEMALE"}
            onClick={props.onClickFemale}
          >
            여성
          </S.GenderDiv>
        </S.BtnBox>
      </S.Wrapper>

      <S.Wrapper>
        <S.SubTitle>출생년도</S.SubTitle>
        <S.StyledSelect
          id="year"
          onChange={props.onChangeAge}
          value={props.userAge}
        >
          {props.years.map((el: number) => (
            <S.StyledOption key={el} value={el}>
              {el}
            </S.StyledOption>
          ))}
        </S.StyledSelect>
      </S.Wrapper>

      <S.Wrapper>
        <S.Title>좋아하는 영화장르</S.Title>
        <S.GenreGrid>
          {props.movie_genres?.map((el: any) => (
            <S.GenreBox
              key={el.id}
              isSelected={props.MovieCheckedList.includes(el.id)}
              onClick={() => props.handleMovieGenreClick(el.id)}
            >
              {el.name}
            </S.GenreBox>
          ))}
        </S.GenreGrid>
      </S.Wrapper>

      <S.Wrapper>
        <S.Title>좋아하는 시리즈장르</S.Title>
        <S.GenreGrid>
          {props.tv_genres?.map((el: any) => (
            <S.GenreBox
              key={el.id}
              isSelected={props.TVCheckedList.includes(el.id)}
              onClick={() => props.handleTVGenreClick(el.id)}
            >
              {el.name}
            </S.GenreBox>
          ))}
        </S.GenreGrid>
      </S.Wrapper>
      <S.Wrapper>
        <S.BtnWrapper>
          <S.SmallBtn onClick={props.onSubmit}>입력완료</S.SmallBtn>
        </S.BtnWrapper>
      </S.Wrapper>
    </>
  );
}
