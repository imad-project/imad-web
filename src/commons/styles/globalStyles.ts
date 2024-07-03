import { css } from "@emotion/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-size: 20px;
    font-family: "myfont";
  }

  @font-face {
    font-family: "myfont";
    src: url("/fonts/GmarketSansTTFMedium.ttf");
  }
  @font-face {
    font-family: "dot";
    src: url("/fonts/Galmuri9.ttf");
  }
`;
