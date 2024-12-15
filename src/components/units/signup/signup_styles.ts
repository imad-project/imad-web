import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10%;
  margin-right: 10%;
  @media (max-width: 1080px) {
    width: 100%;
    margin: 0;
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #0b0537;
  margin-bottom: 20px;
  margin-top: 50px;
`;

export const SubTitle = styled.div`
  font-size: 16px;
  color: #0b0537;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 200px;
  height: 20px;
  border: none;
  border-bottom: 2px solid #0b0537;
  margin-bottom: 15px;
  background-color: #f5f5f5;

  :focus {
    outline: 2px solid #0b0537;

    border-bottom: none;
  }
`;

export const LoginBtn = styled.div`
  cursor: pointer;
  margin-top: 10px;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  font-size: 16px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0b0537;
`;

export const SmallBtn = styled.div`
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 60px;
  height: 35px;
  border-radius: 8px;
  font-size: 14px;
  color: white;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0b0537;
`;

export const AlertSpan = styled.div<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 12px;
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 200px;
`;
