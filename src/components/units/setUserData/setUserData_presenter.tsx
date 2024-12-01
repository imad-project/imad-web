import * as S from "./setUserData_styles";

export default function SetUserData_UI(props: any) {
  return (
    <>
      <h1>회원정보 수정</h1>
      <div>
        <span>닉네임:</span>
        <input type="text" onChange={props.onChangeNickName} />
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
        <h1>좋아하는 영화장르</h1>
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
        <h1>좋아하는 시리즈장르</h1>
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
