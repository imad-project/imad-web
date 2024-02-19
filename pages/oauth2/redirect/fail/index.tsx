import { useRouter } from "next/router";

export default function RedirectFailPage(): JSX.Element {
  const router = useRouter();

  const onClickReturn = () => {
    router.push("/login");
  };

  return (
    <>
      <h1>!!소셜로그인 실패!!</h1>
      <h1>로그인을 다시 시도해주세요</h1>
      <button onClick={onClickReturn}>로그인 화면으로 돌아가기</button>
    </>
  );
}
