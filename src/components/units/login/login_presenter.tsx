import * as S from "./login_styles";

export default function LoginPageUI(props: any): JSX.Element {
  return (
    <S.Wrapper>
      <S.Title>아이매드 로그인</S.Title>
      <S.InputBox>
        <S.SubTitle>이메일</S.SubTitle>
        <S.Input type="text" onChange={props.onChangeEmail} />
        <S.SubTitle>비밀번호</S.SubTitle>
        <S.Input type="password" onChange={props.onChangePassWord} />
        <S.LoginBtn onClick={props.onClickLogin}>로그인</S.LoginBtn>
        <S.SignUpBtn onClick={props.onClickSignUp}>회원가입</S.SignUpBtn>
      </S.InputBox>

      <S.MiddleLine>소셜로그인</S.MiddleLine>

      <S.SocailLoginBox>
        <S.SocialLoginBtn2
          backgroundColor="#FEE500"
          onClick={props.onClickLoginKakao}
        >
          <S.SocialIcon src="/img/login/Kakao.png" />
          <S.SocialBlackTitle>카카오로 계속하기</S.SocialBlackTitle>
        </S.SocialLoginBtn2>

        <S.SocialLoginBtn2
          backgroundColor="#03C75A"
          onClick={props.onClickLoginNaver}
        >
          <S.SocialNaverIcon src="/img/login/naver.png" />
          <S.SocialNaverTitle>네이버로 계속하기</S.SocialNaverTitle>
        </S.SocialLoginBtn2>

        <S.SocialLoginBtn2
          backgroundColor="white"
          onClick={props.onClickLoginGoogle}
        >
          <S.SocialIcon src="/img/login/Google.png" />
          <S.SocialBlackTitle>Google로 계속하기</S.SocialBlackTitle>
        </S.SocialLoginBtn2>

        <S.SocialLoginBtn2
          backgroundColor="black"
          onClick={props.onClickLoginApple}
        >
          <S.SocialIcon src="/img/login/Apple.png" />
          <S.SocialWhiteTitle>Apple로 계속하기</S.SocialWhiteTitle>
        </S.SocialLoginBtn2>
      </S.SocailLoginBox>
    </S.Wrapper>
  );
}
