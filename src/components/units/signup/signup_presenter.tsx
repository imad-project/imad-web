import * as S from "./signup_styles";

export default function SignupUI(props: any): JSX.Element {
  return (
    <>
      <S.Title>아이매드 회원가입</S.Title>
      <S.InputBox>
        <S.SubTitle>이메일</S.SubTitle>
        <S.Input type="text" onChange={props.onChangeEmail} />
        {props.isChecked ? (
          props.emailChecked ? (
            <S.AlertSpan color="green">
              사용할 수 있는 이메일입니다!
            </S.AlertSpan>
          ) : (
            <S.AlertSpan color="red">사용할 수 없는 이메일입니다!</S.AlertSpan>
          )
        ) : (
          ""
        )}
        <S.BtnBox>
          <S.SmallBtn onClick={() => props.EMAILCHECK()}>중복확인</S.SmallBtn>
        </S.BtnBox>

        <S.SubTitle>비밀번호</S.SubTitle>
        <S.Input type="password" onChange={props.onChangePassWord} />

        <S.SubTitle>비밀번호 확인</S.SubTitle>
        <S.Input type="password" onChange={props.onChangePassWord2} />

        <S.LoginBtn onClick={props.onClickSignUp}>회원가입</S.LoginBtn>
      </S.InputBox>
    </>
  );
}
