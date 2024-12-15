import { css } from "@emotion/react";
import styled from "@emotion/styled";

import ReactModal from "react-modal";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 100vw;

  @media (max-width: 480px) {
    overflow-x: hidden;
  }
`;

export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const RowBox2 = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RowBox3 = styled.div`
  width: 50%;
  margin-top: 50px;

  margin-left: 10%;
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;

  @media (max-width: 480px) {
    margin-left: 5%;
    margin-top: 10%;
  }
`;

export const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  width: 200px;
`;

export const RowBox4 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const RowBox5 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
  }
`;

export const RowBox6 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LeftMarginBox = styled.div`
  margin-left: 35px;

  @media (max-width: 480px) {
    margin-left: 10px;
  }
`;

export const TopRatedWrite = styled.div<{ backgroundUrl: string }>`
  position: absolute;
  width: 100%;
  height: 200px;
  background-image: url(${(props) => props.backgroundUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  z-index: 1;

  filter: brightness(0.3) blur(20px);
  /* 블러 처리 */

  transition: filter 0.35s ease; /* filter에 대한 transition 추가 */
  :hover {
    filter: brightness(1) blur(0px);
  }
`;

export const WriteBox = styled.div`
  position: relative;
  margin-top: 50px;
  width: 35%;
  height: 200px;

  border-radius: 15px;
  overflow: hidden;
  z-index: 2;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 45%;
    height: 140px;
  }
`;

export const GridBox = styled.div`
  margin-top: 20px;
  margin-left: 5%;
  width: 90%;

  min-height: 380px;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3개의 열로 구성 */
  grid-template-rows: repeat(3, 1fr); /* 3개의 열로 구성 */
  gap: 30px; /* 아이템 간의 간격 */
  grid-auto-flow: column;

  @media (max-width: 1080px) {
    overflow-x: auto; /* 가로 스크롤 활성화 */

    gap: 10px; /* 아이템 간격 줄이기 */
    padding: 10px 0; /* 수직 여백 조정 */
  }
`;

export const RankingBox = styled.div`
  width: 100%;
  min-width: 300px;
  scroll-snap-align: start;
  height: 100px;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  box-shadow: 1px 1px 10px gray;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const RankingBox2 = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  box-shadow: 1px 1px 10px gray;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const RankingPoster = styled.img`
  position: relative;
  width: auto;
  height: 100px;
  border-radius: 10px;
`;

export const RateBox = styled.div`
  margin-right: 10px;
  width: 80px;
  height: 80px;
`;
export const RankingNumbers = styled.div`
  font-size: 20px;
  color: #0b0537;
  font-weight: bolder;
  margin-right: 10px;

  @media (max-width: 480px) {
    font-size: 18px;
    margin-left: 5px;
  }
`;

export const RankingTitle = styled.div<{ isTitleLong: boolean }>`
  white-space: pre-wrap;
  font-size: ${(props) => (props.isTitleLong ? "16px" : "20px")};
  color: #0b0537;
  font-weight: normal;

  @media (max-width: 480px) {
    font-size: ${(props) => (props.isTitleLong ? "12px" : "16px")};
  }
`;

export const MergedChartWrapper = styled.div`
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5%;
  overflow-x: auto;

  @media (max-width: 480px) {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const title = styled.div`
  font-size: 30px;
  color: #0b0537;
  margin-left: 35px;
  margin-top: 30px;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const title2 = styled.div`
  font-size: 30px;
  color: #0b0537;
  margin-left: 35px;
  margin-top: 30px;

  @media (max-width: 480px) {
    font-size: 20px;
    margin-left: 10px;
  }
`;

export const subtitle = styled.div`
  font-size: 20px;
  color: #0b0537;
  margin-left: 35px;
  margin-top: 30px;

  @media (max-width: 480px) {
    font-size: 16px;
    margin-left: 0;
    margin-right: 15px;
  }
`;

export const subtitle2 = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  cursor: pointer;
  font-size: 20px;
  color: ${(props) => (props.active ? "#0b0537" : "#3C4B66")};
  margin-left: 35px;
  margin-top: 30px;
  transition: color 0.3s ease;

  @media (max-width: 480px) {
    font-size: 16px;
    margin-left: 0;
    width: 50px;
    margin-right: 15px;
  }
`;

export const SubBtn = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30px;
  font-size: 18px;
  min-width: 80px;
  padding-left: 20px;
  padding-right: 20px;
  margin-right: 10px;
  margin-top: 10px;
  cursor: pointer;
  border: 2px solid #0b0537;
  border-radius: 15px;
  color: ${(props) => (props.active ? "white" : "#0b0537")};
  background-color: ${(props) => (props.active ? "#0b0537" : "white")};

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 0;
    min-width: 50px;
  }
`;

export const subtitle3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100px;
  cursor: pointer;
  font-size: 20px;
  color: "#0b0537";
  margin-left: 35px;
  margin-top: 30px;
  transition: color 0.3s ease;
  margin-right: 5%;

  @media (max-width: 480px) {
    font-size: 16px;
    margin-left: 15px;
    width: 80px;
    font-weight: bold;
  }
`;

export const MainBannerTitle = styled.div<{ isTitleLong: boolean }>`
  font-size: ${(props) => (props.isTitleLong ? "20px" : "30px")};
  margin-top: 10px;
  margin-bottom: 10px;
  color: white;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: ${(props) => (props.isTitleLong ? "16px" : "20px")};
  }
`;

export const MainBannerSubTitle = styled.span`
  font-size: 20px;
  color: white;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const SubItemsTitle = styled.div`
  margin-left: 10%;
  position: relative;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: white;
  font-weight: bold;
  z-index: 3;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const SubItemsSubTitle = styled.span`
  margin-left: 10%;
  position: relative;
  font-size: 20px;
  color: white;

  z-index: 3;

  @media (max-width: 480px) {
    font-size: 12px;
    width: 50px;
  }
`;

export const SubItemsSubTitle2 = styled.span`
  margin-left: 10%;
  position: relative;
  font-size: 20px;
  color: white;

  z-index: 3;

  @media (max-width: 480px) {
    font-size: 9px;

    margin-left: 0;
  }
`;

export const SubItemsGrayTitle = styled.span`
  margin-left: 5%;
  position: relative;
  font-size: 18px;
  color: gray;

  z-index: 3;
  /* filter: brightness(0.6); */

  @media (max-width: 480px) {
    font-size: 9px;
    margin-left: 0px;
    width: 50px;
  }
`;

export const SubItemsGrayTitle2 = styled.span`
  margin-left: 5%;
  position: relative;
  font-size: 18px;
  color: gray;

  z-index: 3;
  /* filter: brightness(0.6); */

  @media (max-width: 480px) {
    font-size: 12px;
    margin-left: 0;
    padding-left: 5px;
    width: 80px;
  }
`;

export const TinyPoster = styled.img`
  position: relative;
  width: auto;
  height: 70px;
  border-radius: 5px;

  @media (max-width: 480px) {
    height: 50px;
  }
`;

export const Profile_image = styled.img`
  position: relative;
  z-index: 3;
  width: 50px;
  height: 50px;
  border-radius: 50px;

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
  }
`;

export const Recommend_Box = styled.div`
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 100%;

  @media (max-width: 480px) {
    overflow-x: auto;
    min-height: 500px;
    width: 100%;
  }
`;

export const Recommend_Detail_Box = styled.div`
  margin-top: 20px;
`;

export const Gradation_Box1 = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  border-radius: 15px;
  background-image: linear-gradient(135deg, pink, yellow);
  width: 30%;
  height: 500px;

  @media (max-width: 480px) {
    width: 100%;
    margin-right: 5%;
  }
`;

export const Gradation_Box2 = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  border-radius: 15px;
  background-image: linear-gradient(135deg, #042e53, #e21a51);
  width: 30%;
  height: 500px;

  @media (max-width: 480px) {
    width: 100%;
    margin-right: 5%;
  }
`;

export const Gradation_Box3 = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  border-radius: 15px;
  background-image: linear-gradient(135deg, #006acc, #5bff3d);
  width: 30%;
  height: 500px;

  @media (max-width: 480px) {
    width: 100%;
    margin-right: 5%;
  }
`;

export const Recommend_Title = styled.div<{ isTitleLong: boolean }>`
  position: relative;
  font-size: ${(props) => (props.isTitleLong ? "16px" : "18px")};
  margin-top: 10px;
  margin-bottom: 10px;
  color: white;
  font-weight: bold;
  z-index: 3;

  @media (max-width: 480px) {
    font-size: ${(props) => (props.isTitleLong ? "14px" : "16px")};
  }
`;

export const Recommend_SubTitle = styled.div`
  position: relative;
  font-size: 16px;
  color: white;

  z-index: 3;
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Recommend_MainTitle = styled.div`
  position: relative;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: white;
  font-weight: bold;
  z-index: 3;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Recommend_SubTitleBtn = styled.span`
  cursor: pointer;
  margin-left: 10%;
  position: relative;
  font-size: 20px;
  color: white;

  z-index: 3;
  :hover {
    color: gray;
    transition: 0.3s ease-in-out;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Recommend_Item = styled.div`
  cursor: pointer;
  border-top: 1px solid gray;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  :hover {
    background-color: gray;
    transition: 0.3s ease-in-out;
  }
`;

export const DetailBox = styled.div`
  /* border: 1px solid gray; */

  position: relative;
  z-index: 2;
  width: 100%;
  height: 200px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Recommend_Detail_Item = styled.div<{ backgroundUrl: string }>`
  cursor: pointer;
  position: absolute;
  z-index: 1;
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-image: url(${(props) => props.backgroundUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: gray;
  filter: brightness(0.5) blur(20px);
  :hover {
    filter: brightness(0.1) blur(0px);
    transition: 0.2s ease-in-out;
  }
`;

export const Middle_Poster = styled.img`
  position: relative;
  width: auto;
  height: 150px;
  border-radius: 10px;
  z-index: 3;
  margin-left: 10%;
  margin-right: 10%;
`;

export const SubBannerWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  padding-left: 10%;
  padding-right: 10%;
  position: relative;
  margin-bottom: 20px;
`;

export const MainBannerWrapper = styled.div`
  background-color: #666;
  width: 100%;
  min-width: 100vw;

  height: 600px;

  @media (max-width: 480px) {
    max-height: 300px;
  }
`;

export const ImgBox = styled.div<{ url: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

export const SubSliderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px; /* 이미지와 제목 사이 간격 */

  padding: 16px;
`;

export const ImgBox2 = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const SubSliderItem = styled.img`
  height: 300px;
  width: auto;
  border-radius: 10px;
  box-shadow: 1px 1px 10px gray;

  @media (max-width: 480px) {
    height: 150px;
  }
`;

export const SubSliderTextBox = styled.div`
  height: 50px;
  width: 100%;
  margin-top: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MainSliderItem = styled.img`
  height: 450px;
  width: auto;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 480px) {
    height: 200px;
  }
`;

export const testItem = styled.div`
  margin: auto;

  font-size: 30px;
`;

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const ModalImg = styled.img`
  height: 400px;
  width: 250px;
  margin: auto;
  border-radius: 10px;
`;

export const ModalCancel = styled.img`
  height: 30px;
  width: 30px;
  cursor: pointer;
  position: absolute;
  left: 90%;
  top: 5%;

  @media (max-width: 480px) {
    height: 20px;
    width: 20px;
    left: 85%;
    top: 6%;
  }
`;

const contentStyles = css`
  width: 80%;
  height: 80%;
  z-index: 150;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  background-color: white;
  justify-content: center;
  overflow: auto;

  @media (max-width: 480px) {
    width: 95%;
    height: 80%;
    padding: 0;
  }
`;

export const customModalStyles: ReactModal.Styles = {
  overlay: {
    backgroundColor: "rgba(52,52,52,0.3)",
    width: "100%",
    height: "100vh",
    zIndex: "10",
    position: "fixed",
    top: "0",
    left: "0",
  },
  content: {
    ...(contentStyles as any),
  },
};

export const BackgroundImageWrapper = styled.div<{ backgroundUrl: string }>`
  position: absolute;
  width: 5%;
  height: 600px;
  background-image: url(${(props) => props.backgroundUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  filter: blur(30px); /* 블러 처리 */

  z-index: 1; /* 다른 요소보다 뒤에 배치 */

  @media (max-width: 480px) {
    max-height: 300px;
  }
`;

export const MainBannerBox = styled.div`
  height: 590px;

  @media (max-width: 480px) {
    height: 290px;
  }
`;

export const BannerContent = styled.div`
  position: relative;

  z-index: 2; /* 이미지가 배경보다 위에 배치되도록 설정 */
`;

export const BannerContent1 = styled.div`
  position: relative;

  z-index: 2; /* 이미지가 배경보다 위에 배치되도록 설정 */
  margin-bottom: 50px;

  @media (max-width: 480px) {
    margin-bottom: 0;
  }
`;

export const BannerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Arrow = styled.img`
  width: 30px;
  height: 30px;

  position: absolute;
  top: 50%;
`;

export const Pre = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 100%;
  position: absolute;
  left: 0px;
  z-index: 3;
`;

export const NextTo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 100%;
  position: absolute;
  right: 0px;
  z-index: 3;
`;

export const Pre1 = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: -10%;
  z-index: 3;
`;

export const NextTo1 = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: -10%;
  z-index: 3;
`;
