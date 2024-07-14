import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  /* height: 1847px; */
  border: 1px solid black;
  margin: 100px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GenresBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  width: 500px;
  box-shadow: 0px 0px 10px gray;
  border-radius: 10px;
`;

export const GenreTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  font-size: 20px;
  font-weight: bold;
  color: #0b0537;
  margin-top: 3px;
`;

export const GenreItem = styled.div`
  font-size: 18px;
  color: #0b0537;
`;

export const DividedLine = styled.div`
  width: 100%;
  border-bottom: 1px solid gray;
  margin-top: 3px;
  margin-bottom: 3px;
`;

export const Title = styled.div`
  color: #0b0537;
  font-size: 25px;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const SubTitle = styled.div`
  color: #0b0537;
  font-size: 18px;
  margin-bottom: 5px;
`;

export const GrayLabel = styled.div`
  color: gray;
  font-size: 18px;
  margin-bottom: 5px;
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  position: relative;
  overflow: hidden;
  width: 100px;
  height: 100px;
  border-radius: 100px;
  cursor: pointer;

  :hover .profile_span {
    opacity: 1;
    bottom: 20%;
  }

  :hover .profile_img {
    filter: brightness(0.8);
    filter: blur(3px);
    background-color: gray;
  }
  :hover .camera_icon {
    opacity: 1;
    bottom: 45%;
  }
`;

export const ImgSpan = styled.div`
  position: absolute;

  bottom: -70%;
  font-size: 15px;
  opacity: 0;
  color: #fff;
  transition: 0.35s;
  & .profile_span {
  }
`;

export const Profile_image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  border: 1px solid gray;

  filter: brightness(1);
  filter: blur(0);

  transition: 0.35s;
  & .profile_img {
  }
`;

export const Camera_icon = styled.img`
  position: absolute;

  width: 40px;
  height: 30px;
  opacity: 0;
  bottom: -70%;
  transition: 0.35s;
  & .camera_icon {
  }
`;

export const Box_wrapper = styled.div`
  width: 500px;
  height: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  border-radius: 40px;
`;

export const Box = styled.div`
  width: 30%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  box-shadow: 0px 0px 10px gray;
`;

export const Span_box = styled.div`
  font-size: 18px;
  color: #0b0537;
`;
