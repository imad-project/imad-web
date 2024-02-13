export default function LoginPageUI(props: any): JSX.Element {
  return (
    <>
      <div>일반로그인</div>
      <div>이메일</div>
      <input type="text" onChange={props.onChangeEmail} />
      <div>비밀번호</div>
      <input type="password" onChange={props.onChangePassWord} />
      <button onClick={props.onClickLogin}>로그인</button>
      <button onClick={props.onClickLoginKakao}>카카오 로그인</button>
      <button onClick={props.onClickLoginGoogle}>구글 로그인</button>
      <button onClick={props.onClickLoginNaver}>네이버 로그인</button>
      <button onClick={props.onClickLoginApple}>애플 로그인</button>
      <button onClick={props.onClickLoginAWS}>AWS 카카오 로그인</button>
      <div>==========================</div>
    </>
  );
}
