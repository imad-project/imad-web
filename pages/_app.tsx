import { Global } from "@emotion/react";
import Layout from "../src/commons/layout";
import type { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0); // 스크롤을 최상단으로 이동
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange); // 이벤트 해제
    };
  }, [router.events]);

  return (
    <>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
