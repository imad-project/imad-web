import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: "dot";
  font-size: 50px;
  width: 100%;
  height: 300px;
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 50px;
`;

export const NameBox = styled.div`
  width: 200px;
  height: 100px;
  border-radius: 15px;

  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "dot";
  box-shadow: 0px 0px 10px gray;
`;

export const ArrowBox = styled.div`
  width: 200px;
  height: 100px;
  border-radius: 15px;

  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "dot";
`;

export const Button = styled.button`
  width: 200px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "dot";
  font-size: 30px;
  cursor: pointer;
  border: 0px;
  background-color: white;
  :hover {
    color: red;
  }
  :disabled {
    :hover {
      color: lightgray;
    }
  }
`;
