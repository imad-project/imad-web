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

export const writeWrapper = styled.div`
  width: 100%;
  height: auto;
  /* height: 1847px; */
  border: 1px solid black;
  border-radius: 10px;
  padding-left: 20px;
  padding-top: 10px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;

  border: none;
  box-shadow: 0px 0px 10px gray;
  margin-bottom: 10px;
`;

export const avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0px 0px 5px gray;
  margin-right: 10px;
`;

export const WriteBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 10px;
`;

export const likeCntBox = styled.div`
  font-size: 15px;
  margin-right: 10px;
`;

export const likeDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 10px;
`;

export const LittleIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const reviewContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  width: 500px;
`;

export const likeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  margin-bottom: 10px;
`;
export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const PosterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
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
  margin-left: 10px;
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
  margin-left: 5%;
  color: #0b0537;
`;

export const Write_title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: black;
  cursor: pointer;
  :hover {
    color: #1e90ff;
  }
`;

export const Write_contents = styled.div`
  font-size: 20px;

  color: black;
`;
