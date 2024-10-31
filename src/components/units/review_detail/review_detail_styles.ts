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

export const BetweenRowBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const IconBox = styled.div`
  width: auto;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const Icon = styled.img`
  width: auto;
  height: 7px;
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

export const NickNameTitle = styled.div`
  font-size: 20px;
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

  width: 300px;
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
  width: 150px;
`;

export const Poster_img = styled.img`
  width: 100px;
  height: 150px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const Poster_title = styled.div`
  font-size: 20px;
  color: #0b0537;
  text-align: center;
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
  margin-left: 50px;
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
`;

export const DropdownMenu = styled.div`
  position: absolute;

  top: 40px;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 10;
`;

export const MenuItem = styled.div<{ color: string }>`
  padding: 8px 12px;
  color: ${(props) => props.color};
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;
