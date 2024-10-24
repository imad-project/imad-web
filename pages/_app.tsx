import { Global } from "@emotion/react";
import Layout from "../src/commons/layout";
import type { AppProps } from "next/app";
import { BrowserRouter, Routes } from "react-router-dom";
import { globalStyles } from "../src/commons/styles/globalStyles";
import LayoutBanner from "../src/components/commons/layout/banner/LayoutBanner.container";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />

      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
    </>
  );
}
