import styled from "@emotion/styled";

export const ImgBox = styled.img`
  height: 400px;
  width: 250px;
  margin: auto;
  border-radius: 10px;
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
