import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 64px;
  background-color: #d9d9d9;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  color: #0b0537;
`;

export const Logo = styled.img`
  margin-left: 20px;
  height: 48px;
  width: 150px;
  cursor: pointer;
`;

export const ItemBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const MenuItem = styled.div`
  margin: 0px 30px;
  cursor: pointer;
  color: #0b0537;
  :hover {
    color: white;
  }
`;
