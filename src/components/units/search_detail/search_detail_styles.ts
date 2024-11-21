import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  /* height: 1847px; */
  border: 1px solid black;

  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const TopMarginLittleBox = styled.div`
  margin-top: 5px;
`;

export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TransRowBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const subtitle = styled.div`
  font-size: 15px;
  margin-bottom: 2px;
  margin-left: 5px;
`;

export const RateBox = styled.div`
  width: 100px;
  height: 100px;

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const RateBox2 = styled.div`
  width: 100px;
  height: 100px;

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
  }
`;

export const MainTitle = styled.div`
  font-size: 30px;
  color: white;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const MainSubTitle = styled.div`
  font-size: 20px;
  color: white;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const FilterSubtitle = styled.div`
  font-size: 15px;
  filter: brightness(0.7);
`;

export const title = styled.div`
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const subWrapper = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
`;

export const subtitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
`;

export const LeftMarginBox = styled.div`
  margin-left: 100px;
`;

export const TopMarginBox = styled.div`
  margin-top: 50px;
`;

export const titleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 15%;
  height: 100%;
  width: 30%;

  color: white;
  z-index: 2;

  @media (max-width: 480px) {
    margin-top: 35%;
  }
`;

export const mediaType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  border-radius: 5px;
  border: 2px solid white;
  font-size: 15px;
  margin-bottom: 5px;
`;

export const posterWrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  padding-bottom: 20px;
  padding-top: 20px;
  padding-left: 100px;
  padding-right: 100px;

  position: relative;

  @media (max-width: 480px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const BackdropWrapper = styled.div<{ backgroundUrl: string | null }>`
  width: 100%;
  height: 400px;
  z-index: 1;
  background-color: ${(props) =>
    props.backgroundUrl ? "transparent" : "#d3d3d3"};
  background-image: ${(props) =>
    props.backgroundUrl ? `url(${props.backgroundUrl})` : "none"};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  filter: brightness(0.5);
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const SeasonDataBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  min-width: 100%;
  min-height: 200px;
  margin-bottom: 20px;

  overflow-x: auto; /* 가로 스크롤 강제 적용 */
  overflow-y: hidden; /* 세로 스크롤은 숨김 */
  scrollbar-width: thin; /* Firefox에서 얇은 스크롤바 */

  &::-webkit-scrollbar {
    height: 8px; /* 가로 스크롤바 높이 */
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5); /* 스크롤바 색상 */
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1); /* 스크롤바 트랙 색상 */
  }
`;

export const SeasonDataItem = styled.div<{ isVisible: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 40px;
  flex: 0 0 auto;

  min-width: ${(props) => (props.isVisible ? "250px" : "100px")};
  max-width: 300px;
  justify-content: flex-start;
  box-shadow: 0px 0px 10px gray;
  border-radius: 10px;

  backdrop-filter: brightness(0.1) blur(15px);
  z-index: 1;
`;

export const SeasonDataPosterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 180px;
  max-width: 100px;
  width: auto;
  background-color: white;
  border-radius: 10px;
`;

export const SeasonDataPoster = styled.img`
  max-width: 100px;
  width: auto;
  height: 150px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const SeasonDataWriteBox = styled.div`
  display: flex;
  flex-direction: column;

  height: 180px;
  min-width: 120px;
  padding-top: 15px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const SubGrayTitle = styled.div`
  font-size: 12px;
  margin-bottom: 8px;
  color: white;
  filter: brightness(0.5);
  z-index: 2;
  margin-left: 5px;
`;

export const SubWhiteTitle = styled.div`
  font-size: 15px;
  margin-bottom: 2px;
  color: white;
  z-index: 2;
`;

export const ImgWrapper = styled.div`
  z-index: 2;
`;

export const ImgBox = styled.img`
  height: 300px;
  width: 200px;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0px 0px 10px black;
  z-index: 2;

  @media (max-width: 480px) {
    width: 150px;
    height: auto;
  }
`;

export const CreditWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const CreditOpenDetailBtn = styled.span`
  margin-left: 30px;
  font-size: 14px;
  color: gray;
  cursor: pointer;
  :hover {
    color: black;
  }
`;

export const PersonWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const PersonIcon = styled.img`
  width: 40px;
  height: 40px;
`;

export const PersonIconFull = styled.img`
  width: 100px;
  height: auto;
  border-radius: 50px;
`;

export const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Line = styled.div`
  border-top: 1px solid #bdbdbd;
  width: 100%;
  margin-bottom: 10px;
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

export const Icon_img = styled.img`
  width: 20px;
  height: auto;
  position: absolute;
  z-index: 2;
  left: 80%;
  bottom: 15%;

  @media (max-width: 480px) {
    width: 10;
    bottom: 10%;
  }
`;

export const ReviewMapWrapper = styled.div`
  width: 80%;
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

  @media (max-width: 480px) {
    width: 95%;
    margin-left: 2.5%;
    margin-right: 2.5%;
    padding-right: 10px;
    padding-left: 10px;
  }
`;

export const ReviewWriteWrapper = styled.div`
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;

  @media (max-width: 480px) {
    width: 95%;
    margin-left: 2.5%;
    margin-right: 2.5%;
  }
`;

export const avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 15px;
`;

export const reviewBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
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

export const Date_span = styled.div`
  color: gray;
  font-size: 15px;
  width: 100px;
  height: auto;
  margin-left: 50px;
`;

export const likeCntBox = styled.div`
  font-size: 15px;
  margin-right: 10px;
`;

export const reviewContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 10%;

  width: 100%;

  @media (max-width: 480px) {
    margin-left: 10px;
  }
`;

export const ReviewClickBox = styled.div`
  cursor: pointer;
  :hover {
    color: #00aaff;
  }
`;

export const likeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  margin-bottom: 10px;
`;

export const likeButton = styled.div<{ isLiked: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 50px;
  cursor: pointer;

  font-size: 20px;
  color: ${(props) => (props.isLiked ? "#00aaff" : "gray")};
`;

export const DisLikeButton = styled.div<{ isLiked: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 50px;
  cursor: pointer;

  font-size: 20px;
  color: ${(props) => (props.isLiked ? "#f34336" : "gray")};
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

export const reviewSubmitButton = styled.div`
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

export const buttonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export const broadImg = styled.img`
  height: 15px;
  width: auto;
`;

export const WriteSubmitButton = styled.div`
  height: 50px;
  width: 170px;
  border-radius: 15px;
  white-space: nowrap;
  box-shadow: 0px 0px 10px gray;
  cursor: pointer;
  margin-right: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const buttonBox2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
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
