import { css } from "@emotion/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const globalStyles = css`
  /* 초기화 및 글로벌 스타일 설정 */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* 폰트 설정 */
  @font-face {
    font-family: "myfont";
    src: url("/fonts/GmarketSansTTFMedium.ttf");
  }
  @font-face {
    font-family: "dot";
    src: url("/fonts/Galmuri9.ttf");
  }

  /* HTML과 BODY 설정 */
  html {
    overflow-x: hidden;
    width: 100%;
    height: 100%;
    min-width: 100vw;
    min-height: 100vh;
  }

  body {
    width: 100%;
    height: 100%;

    font-family: "myfont", sans-serif;
    color: #333;
    background-color: #f5f5f5;
  }

  /* 폰트 크기: 반응형 조정 */
  html {
    font-size: 16px;
  }

  @media (max-width: 1024px) {
    html {
      font-size: 15px;
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    html {
      font-size: 12px;
    }
  }
`;
