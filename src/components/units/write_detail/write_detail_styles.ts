import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  width: 70%;
  max-width: 1000px;
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

export const Gray_span_btn = styled.div`
  color: gray;
  font-size: 15px;
  margin-left: 10px;
  cursor: pointer;
`;

export const Child_span = styled.div`
  color: gray;
  font-size: 15px;
  margin-right: 20px;
  height: auto;
  cursor: pointer;
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

export const CommentsInput = styled.input`
  border: 0px;
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
`;

export const Contents_span = styled.div`
  width: 100%;
  font-size: 18px;
  color: #0b0537;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 20%;
  width: 200%;
`;

export const LikeBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const LikeButton = styled.div<{ isLiked: boolean }>`
  width: 125px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.isLiked ? "#0b0537" : "#3c4b66")};
  margin-right: 20px;

  border-radius: 10px;
`;
export const LikeSpan = styled.div`
  font-size: 18px;
  color: white;
`;

export const UserNickName = styled.h1`
  margin-bottom: 5px;
  margin-right: 10px;
`;

export const LittleIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const SubTitle = styled.div`
  font-size: 18px;
  color: black;
  font-weight: bold;
`;

export const CommentsWrapper = styled.div`
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
  margin-top: 10px;
`;

export const CommentsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 10px;
`;

export const CommentsBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
  min-width: 100%;
`;

export const likeDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 10px;
`;

export const PosterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CommentsSubmitBtn = styled.div`
  height: 50px;
  width: 100px;
  border-radius: 15px;

  box-shadow: 0px 0px 10px gray;
  cursor: pointer;
  margin-right: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const DropdownMenu = styled.div`
  top: 40px;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 3;
`;

export const MenuItem = styled.div<{ color: string }>`
  padding: 8px 12px;
  color: ${(props) => props.color};
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
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
  top: 10%;
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

export const Gray_span = styled.div`
  color: gray;
  font-size: 12px;
`;
