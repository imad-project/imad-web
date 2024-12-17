import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 10px gray;

  @media (max-width: 1080px) {
    width: 100%;
  }
`;

export const reviewWrapper = styled.div`
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
  position: relative;
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

  @media (max-width: 1080px) {
    width: 30px;
    height: 30px;
  }
`;

export const NickNameTitle = styled.div`
  font-size: 20px;
`;

export const reviewBox = styled.div`
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

  @media (max-width: 480px) {
    width: 15px;
    height: 15px;
  }
`;

export const reviewContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  width: 100%;
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
  width: 100px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;

  @media (max-width: 1080px) {
    width: 50px;
  }
`;

export const Poster_title = styled.div`
  font-size: 15px;
  color: #0b0537;
  text-align: center;
  width: 100px;

  @media (max-width: 1080px) {
    width: 50px;
    font-size: 12px;
  }
`;

export const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;

  @media (max-width: 1080px) {
    margin-left: 10px;
  }
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
  margin-left: 50px;

  @media (max-width: 480px) {
    margin-left: 5px;
  }
`;

export const ReviewClickBox = styled.div`
  cursor: pointer;
  :hover {
    color: #00aaff;
  }
  width: 300px;
  @media (max-width: 1080px) {
    width: 150px;
  }
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

export const Review_title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: black;
`;

export const Review_contents = styled.div`
  font-size: 20px;

  color: black;
`;

export const RateBox = styled.div`
  margin-left: 15%;
  width: 100px;
  height: 100px;
  min-width: 100px;
  min-height: 100px;

  @media (max-width: 480px) {
    min-width: 25px;
    min-height: 25px;
    width: 75px;
    height: 75px;
    margin-left: 0;
    position: absolute;
    right: 10%;
    bottom: 30%;
  }
`;
