import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #0b0537;
  margin-bottom: 20px;
  margin-top: 50px;
`;

export const Input = styled.input`
  width: 200px;
  height: 20px;
  border: none;
  border-bottom: 2px solid #0b0537;
  margin-bottom: 30px;
  background-color: #f5f5f5;
  cursor: pointer;

  :focus {
    outline: 2px solid #0b0537;

    border-bottom: none;
  }
`;

export const ImgBox = styled.img`
  height: auto;
  width: 250px;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 그림자 */
  cursor: pointer;

  @media (max-width: 1080px) {
    width: 100px;
  }
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

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap; /* 줄 바꿈 허용 */
  justify-content: space-between; /* 아이템 간격 균등 배치 */
  gap: 20px; /* 아이템 간 간격 */
`;

export const Item = styled.div`
  flex: 1 1 calc(33.333% - 20px); /* 한 줄에 3개씩 배치 (간격 고려) */
  box-sizing: border-box; /* 패딩과 보더 포함 */
  text-align: center; /* 텍스트 가운데 정렬 */
`;
