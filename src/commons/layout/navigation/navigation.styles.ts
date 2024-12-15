import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 64px;
  width: 100%;
  max-width: 100vw;
  background-color: #d9d9d9;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: static;
  color: #0b0537;

  @media (max-width: 768px) {
    position: fixed;
    z-index: 4;
  }
`;

export const Logo = styled.img`
  margin-left: 20px;
  height: 48px;
  width: auto;
  cursor: pointer;

  @media (max-width: 480px) {
    margin: 0; /* 모바일에서는 여백 제거 */
    width: auto; /* 크기 조정 */
    height: 48px;
  }
`;

export const ItemBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  font-size: 18px;
  margin: 0px 20px;
  cursor: pointer;
  color: #0b0537;

  :hover {
    color: white;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    font-weight: bold;
    margin: 0 5px;
    height: 30px;
  }
`;

export const Nickname = styled.div<{ isLong: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  font-size: 18px;
  margin: 0px 20px;
  cursor: pointer;
  color: #0b0537;

  :hover {
    color: white;
  }

  @media (max-width: 480px) {
    font-size: ${(props) => (props.isLong ? "10px" : "13px")};
    font-weight: bold;
    margin: 0 5px;
    height: 30px;
  }
`;
