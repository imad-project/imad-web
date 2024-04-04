import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  /* height: 1847px; */
  border: 1px solid black;
  margin: 100px;
  padding-top: 0px;
  padding-bottom: 100px;
  padding-left: 0px;
  padding-right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const subtitle = styled.div`
  font-size: 15px;
`;

export const title = styled.div`
  font-size: 20px;
  margin-top: 10px;
`;

export const subWrapper = styled.div`
  margin-left: 100px;
  margin-right: 100px;
  margin-bottom: 20px;
`;

export const subtitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 125px;
`;

export const titleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 20%;

  color: white;
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

  background-color: #646364;
  padding-bottom: 20px;
  padding-top: 20px;
  padding-left: 100px;
  padding-right: 100px;
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ImgBox = styled.img`
  height: 300px;
  width: 200px;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0px 0px 10px black;
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
  display: flex;
  flex-direction: column;

  border: none;
  box-shadow: 0px 0px 10px gray;
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
