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
  @media (max-width: 1080px) {
    width: 30px;
    height: 30px;
  }
`;

export const UserName = styled.div`
  font-size: 20px;
  font-weight: bold;
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
  justify-content: center;
  align-items: center;
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
  cursor: pointer;
`;

export const Poster_img = styled.img`
  width: 150px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;

  @media (max-width: 1080px) {
    width: 80px;
  }
`;

export const Poster_title = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #0b0537;
  margin-top: 10px;
`;

export const ColumnBox = styled.div`
  width: 100%;
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
  margin-left: 10px;

  @media (max-width: 1080px) {
    font-size: 12px;
  }
`;

export const View_cnt_span = styled.div`
  color: gray;
  font-size: 15px;
  width: 100%;
  height: auto;
  overflow: visible;

  @media (max-width: 1080px) {
    font-size: 12px;
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

export const SelectBox = styled.div`
  position: relative;
  width: 200px;
  min-width: 90px;
  padding: 8px;
  margin-bottom: 50px;
  margin-right: 10px;
  border-radius: 12px;
  background-color: #ffffff;
  align-self: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &::before {
    content: "⌵";
    position: absolute;
    top: 1px;
    right: 8px;
    color: #49c181;
    font-size: 20px;
  }
`;
export const Label = styled.label`
  font-size: 14px;
  margin-left: 4px;
  text-align: center;
  white-space: nowrap;
`;
export const SelectOptions = styled.ul`
  position: absolute;
  list-style: none;
  top: 18px;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: auto;

  padding: 0;
  border-radius: 8px;
  background-color: #222222;
  color: #fefefe;
`;
export const Option = styled.li`
  font-size: 14px;
  padding: 6px 8px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #595959;
  }
`;

export const SearchInput = styled.input`
  margin-bottom: 50px;
  max-width: 60%;
`;

export const SearchButton = styled.div`
  margin-bottom: 50px;
  font-size: 18px;
  margin-left: 10px;
  width: 70px;
  height: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0px 0px 10px gray;
  border-radius: 10px;
  color: #0b0537;
  cursor: pointer;
  :hover {
    border-radius: 1px solid #1e90ff;
    color: #1e90ff;
  }
`;

export const RowBox1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  max-width: 50%;
`;

export const RowBox2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const SplitRowBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
