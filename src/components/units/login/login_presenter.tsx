import * as S from "./login_styles";

export default function LoginPageUI(props: any): JSX.Element {
  return (
    <>
      <div>일반로그인</div>
      <div>이메일</div>
      <input type="text" onChange={props.onChangeEmail} />
      <div>비밀번호</div>
      <input type="password" onChange={props.onChangePassWord} />
      <button onClick={props.onClickLogin}>로그인</button>
      <button onClick={props.onClickSignUp}>회원가입</button>
      <S.SocialLoginBtn
        onClick={props.onClickLoginKakao}
        src="/img/icon/kakao.png"
      />
      <S.SocialLoginBtn
        onClick={props.onClickLoginNaver}
        src="/img/icon/naver.png"
      />

      <S.SocialLoginBtn
        onClick={props.onClickLoginGoogle}
        src="/img/icon/google2.png"
      />

      <S.SocialLoginBtn
        onClick={props.onClickLoginApple}
        src="/img/icon/apple.png"
      />

      <div>==========================</div>
    </>
  );
}
