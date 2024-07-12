import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  /* height: 1847px; */
  border: 1px solid black;
  margin: 100px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const Title = styled.div`
  color: #0b0537;
  font-size: 20px;
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Profile_image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 25px;
`;

export const Box_wrapper = styled.div`
  width: 500px;
  height: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  border-radius: 40px;
`;

export const Box = styled.div`
  width: 30%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  box-shadow: 0px 0px 10px gray;
`;

export const Span_box = styled.div`
  font-size: 18px;
  color: #0b0537;
`;
