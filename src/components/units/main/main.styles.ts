import styled from "@emotion/styled";
import ReactModal from "react-modal";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const title = styled.div`
  font-size: 30px;
  color: #0b0537;
  margin-left: 35px;
  margin-top: 30px;
`;

export const MainBannerTitle = styled.div`
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: white;
`;
export const MainBannerSubTitle = styled.div`
  font-size: 20px;
  color: white;
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
