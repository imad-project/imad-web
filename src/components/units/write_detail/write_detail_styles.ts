import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 10px gray;
`;

export const avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0px 0px 5px gray;
  margin-right: 10px;
`;

export const RowWrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Poster_img = styled.img`
  width: 150px;
  height: 225px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const Poster_title = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #0b0537;
  margin-top: 10px;
`;

export const DividedLine = styled.div`
  width: 100%;
  border-bottom: 1px solid gray;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Date_span = styled.div`
  color: gray;
  font-size: 15px;
  width: 100px;
  height: auto;
`;

export const View_cnt_span = styled.div`
  color: gray;
  font-size: 15px;
  width: 100px;
  height: auto;
  overflow: visible;
`;

export const title_span = styled.div`
  width: 100%;
  margin-bottom: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: baseline;
  align-items: baseline;
  font-size: 20px;
  font-weight: bold;

  color: #0b0537;
`;

export const Contents_span = styled.div`
  width: 100%;
  font-size: 18px;
  color: #0b0537;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 20%;
`;
