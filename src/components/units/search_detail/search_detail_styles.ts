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

export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const subtitle = styled.div`
  font-size: 15px;
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

  width: 125px;
`;

export const LeftMarginBox = styled.div`
  margin-left: 100px;
`;

export const titleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 20%;

  color: white;
  z-index: 2;
`;

export const mediaType = styled.div`
  padding: 2px;
  border-radius: 5px;
  border: 2px solid white;
  font-size: 15px;
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
`;
export const Line = styled.div`
  border-top: 1px solid #bdbdbd;
  width: 100%;
  margin-bottom: 10px;
`;

export const reviewWrapper = styled.div`
  width: 1000px;
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
  width: 30px;
  height: 30px;
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

export const reviewContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 80px;

  width: 100%;
`;

export const likeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  margin-bottom: 10px;
`;

export const likeButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 50px;
  cursor: pointer;

  font-size: 20px;
  color: gray;
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
`;

export const broadImg = styled.img`
  height: 15px;
  width: auto;
`;
