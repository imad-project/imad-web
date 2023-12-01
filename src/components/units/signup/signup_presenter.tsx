export default function SignupUI(props: any): JSX.Element {
  return (
    <>
      <div>일반회원가입</div>
      <div>이메일</div>
      <input type="text" onChange={props.onChangeEmail} />
      <div>비밀번호</div>
      <input type="password" onChange={props.onChangePassWord} />
      <button onClick={props.onClickSignUp}>회원가입</button>
    </>
  );
}
