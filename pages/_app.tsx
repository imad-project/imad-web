import type { AppProps } from "next/app";
import { BrowserRouter, Routes } from "react-router-dom";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps}></Component>
    </>
  );
}
