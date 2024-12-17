import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 80%;
  /* height: 1847px; */
  border: 1px solid black;
  margin-top: 20px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
  position: relative;

  @media (max-width: 1080px) {
    width: 100%;
    margin-top: 0;
    padding: 0;
    padding-top: 20px;
  }
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
  width: 80%;
  box-shadow: 0px 0px 10px gray;
  border-radius: 10px;
  margin-bottom: 20px;
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

  @media (max-width: 1080px) {
    font-size: 18px;
  }
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

export const Icon_box = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: middle;
`;

export const BigIcon = styled.img`
  position: absolute;
  width: 35px;
  height: 35px;
  text-align: middle;
  left: 100%;
  bottom: 3px;
`;

export const Box_wrapper = styled.div`
  width: 80%;
  height: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  border-radius: 40px;
  @media (max-width: 1080px) {
    width: 100%;
  }
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
  cursor: pointer;
`;

export const Span_box = styled.div`
  font-size: 18px;
  color: #0b0537;
  margin-top: 5px;
`;

export const BookMark_box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  box-shadow: 0px 0px 10px gray;
  border-radius: 10px;
  padding: 20px;
`;

export const BookMark_title = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  color: #0b0537;
  margin-bottom: 10px;
  margin-left: 60px;
`;

export const Movie_box = styled.div`
  flex: 1 1 calc(33% - 10px);
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Movie_poster = styled.img`
  width: 200px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;

  @media (max-width: 1080px) {
    width: 100px;
  }
`;

export const Movie_title = styled.div`
  font-size: 20px;
  color: #0b0537;
  text-align: center;
  @media (max-width: 1080px) {
    font-size: 13px;
  }
`;
export const NoBookmarks = styled.div`
  width: 100%;
  font-size: 20px;
  color: gray;
  text-align: center;
  margin-top: 20px;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  width: 150px;
  top: 25px;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 5;

  @media (max-width: 1080px) {
    top: 30px;
  }
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
  position: absolute;
  right: 200px;
  top: 150px;

  cursor: pointer;

  @media (max-width: 1080px) {
    right: 20px;
    top: 70px;
  }
`;

export const Icon = styled.img`
  width: auto;
  height: 25px;
`;

export const Input = styled.input`
  width: 200px;
  height: 20px;
  border: none;
  border-bottom: 2px solid #0b0537;
  margin-bottom: 25px;
  background-color: #f5f5f5;

  :focus {
    outline: 2px solid #0b0537;

    border-bottom: none;
  }
`;

export const Input2 = styled.input`
  width: 200px;
  height: 20px;
  border: none;
  border-bottom: 2px solid #0b0537;
  margin-bottom: 10px;
  background-color: #f5f5f5;

  :focus {
    outline: 2px solid #0b0537;

    border-bottom: none;
  }
`;

export const ModalSubTitle = styled.div`
  font-size: 16px;
  color: #0b0537;
  margin-bottom: 5px;
`;

export const LoginBtn = styled.div`
  cursor: pointer;
  margin-top: 10px;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  font-size: 16px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0b0537;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const AlertSpan2 = styled.div<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 12px;
  margin-bottom: 20px;
`;
