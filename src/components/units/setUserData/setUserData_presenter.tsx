import * as S from "./setUserData_styles";

export default function SetUserData_UI(props: any) {
  return (
    <>
      <S.Title>회원정보 수정</S.Title>
      <div>
        <S.SubTitle>닉네임</S.SubTitle>
        <S.Input type="text" onChange={props.onChangeNickName} />
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
          <S.LittleTitle>{props.nickName.length}/10</S.LittleTitle>
          <S.SmallBtn onClick={() => props.NICKNAMECHECK()}>
            중복확인
          </S.SmallBtn>
        </S.BtnBox>
      </div>

      <div>
        <span>성별</span>
        <button onClick={props.onClickMale}>남성</button>
        <button onClick={props.onClickFemale}>여성</button>
      </div>

      <div>
        <span>출생년도:</span>
        <select id="year" onChange={props.onChangeAge}>
          {props.years.map((el: number) => (
            <option key={el}>{el}</option>
          ))}
        </select>
      </div>

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
      <button onClick={props.onSubmit}>submit</button>
    </>
  );
}
