import styled from "@emotion/styled";
import ReactModal from "react-modal";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
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

export const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
`;

export const RowBox3 = styled.div`
  width: 50%;
  margin-top: 10%;
  margin-left: 10%;
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
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
`;

export const GridBox = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3개의 열로 구성 */
  gap: 30px; /* 아이템 간의 간격 */
`;

export const RankingBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  box-shadow: 1px 1px 10px gray;
  justify-content: space-between;
  align-items: center;
`;

export const RankingPoster = styled.img`
  position: relative;
  width: auto;
  height: 100px;
  border-radius: 10px;
`;

export const RateBox = styled.div`
  margin-right: 0px;
  width: 80px;
  height: 80px;
`;
export const RankingNumbers = styled.div`
  font-size: 20px;
  color: #0b0537;
  font-weight: bolder;
  margin-right: 10px;
`;

export const RankingTitle = styled.div`
  font-size: 20px;
  color: #0b0537;
  font-weight: normal;
`;

export const title = styled.div`
  font-size: 30px;
  color: #0b0537;
  margin-left: 35px;
  margin-top: 30px;
`;

export const subtitle = styled.div`
  font-size: 20px;
  color: #0b0537;
  margin-left: 35px;
  margin-top: 30px;
`;
export const subtitle2 = styled.div<{ active: boolean }>`
  cursor: pointer;
  font-size: 20px;
  color: ${(props) => (props.active ? "#0b0537" : "#3C4B66")};
  margin-left: 35px;
  margin-top: 30px;
  transition: color 0.3s ease;
`;

export const MainBannerTitle = styled.div`
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: white;
  font-weight: bold;
`;

export const MainBannerSubTitle = styled.span`
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
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
`;

export const SubItemsSubTitle = styled.span`
  margin-left: 10%;
  position: relative;
  font-size: 20px;
  color: white;

  z-index: 3;
`;

export const SubItemsGrayTitle = styled.span`
  margin-left: 5%;
  position: relative;
  font-size: 18px;
  color: white;

  z-index: 3;
  filter: brightness(0.6);
`;

export const TinyPoster = styled.img`
  position: relative;
  width: auto;
  height: 70px;
  border-radius: 5px;
`;

export const Profile_image = styled.img`
  position: relative;
  z-index: 3;
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const SubBannerWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export const SubSliderItem = styled.img`
  height: 400px;
  width: 250px;
  margin: auto;
  border-radius: 10px;
  box-shadow: 1px 1px 10px gray;
`;

export const MainBannerWrapper = styled.div`
  background-color: #666;
  width: 100%;
  height: 600px;
`;

export const ImgBox = styled.div<{ url: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

export const ImgBox2 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

export const MainSliderItem = styled.img`
  height: 450px;
  width: auto;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const testItem = styled.div`
  margin: auto;
  background-color: red;
  font-size: 30px;
`;

export const ModalWrapper = styled.div`
  width: 800px;
  height: 1000px;
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
    width: "800px",
    height: "1000px",
    zIndex: "150",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor: "white",
    justifyContent: "center",
    overflow: "auto",
  },
};
