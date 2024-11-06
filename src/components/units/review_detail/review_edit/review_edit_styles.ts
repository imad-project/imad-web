import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 10px gray;
  position: relative;
  @media (max-width: 1080px) {
    width: 100%;
  }
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

export const ReportWrapper = styled.div`
  width: 80%;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  background-color: white;
  z-index: 4;
  left: 10%;
`;

export const ReportBtn = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #f34336;
  :hover {
    background-color: gray;
    transition: 0.3s;
  }
`;

export const ReportCancelBtn = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #00aaff;
  :hover {
    background-color: gray;
    transition: 0.3s;
  }
`;

export const OtherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
`;

export const OtherReportBtn = styled.div`
  margin-top: 20px;
  width: 80px;
  height: 30px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f34336;
  white-space: nowrap;
  color: white;
  font-size: 12px;
  :hover {
    background-color: gray;
    transition: 0.3s;
  }
`;

export const ReportDescWrite = styled.textarea`
  width: 50%;
  resize: none;
`;

export const reviewInput = styled.input`
  border: 0px;
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
`;

export const reviewTextArea = styled.textarea`
  height: 100px;
  resize: none;
  border: 0;
`;

export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SpoilerIcon = styled.img`
  width: 20px;
  height: auto;
  margin-right: 5px;
  margin-left: 15%;
`;

export const SpoilerSpan = styled.div<{ isCheck: boolean }>`
  font-size: 14px;
  white-space: nowrap;
  margin-top: 2px;
  color: ${(props) => (props.isCheck ? "#0b0537" : "gray")};
`;

export const ReviewEditBtn = styled.div`
  font-size: 16px;
  color: white;
  width: 70px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  white-space: nowrap;
  position: absolute;
  z-index: 4;
  background-color: #0b0537;
  right: 30%;
  bottom: 10%;
`;
