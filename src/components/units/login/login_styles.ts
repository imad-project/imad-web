import styled from "@emotion/styled";

export const SocialLoginBtn = styled.img`
  width: 200px;
  height: 40px;
  cursor: pointer;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px gray;
`;

export const SocialLoginBtn2 = styled.div<{ backgroundColor: string }>`
  width: 200px;
  height: 40px;
  cursor: pointer;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px gray;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const SocialIcon = styled.img`
  width: 20px;
  height: auto;
  margin-left: 10px;
`;
export const SocialNaverIcon = styled.img`
  width: 35px;
  height: auto;
  margin-left: 5px;
`;

export const SocialBlackTitle = styled.div`
  white-space: nowrap;
  font-size: 12px;
  font-weight: 500;
  margin-left: 20px;
  color: black;
`;

export const SocialWhiteTitle = styled.div`
  white-space: nowrap;
  font-size: 12px;
  font-weight: 500;
  margin-left: 20px;
  color: white;
`;

export const SocialNaverTitle = styled.div`
  white-space: nowrap;
  font-size: 12px;
  font-weight: 500;
  margin-left: 10px;
  color: white;
`;

export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10%;
  margin-right: 10%;
  @media (max-width: 1080px) {
    width: 100%;
    margin: 0;
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #0b0537;
  margin-bottom: 20px;
  margin-top: 50px;
`;

export const SubTitle = styled.div`
  font-size: 16px;
  color: #0b0537;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 200px;
  height: 20px;
  border: none;
  border-bottom: 2px solid #0b0537;
  margin-bottom: 15px;
  background-color: #f5f5f5;
  cursor: pointer;

  :focus {
    outline: 2px solid #0b0537;

    border-bottom: none;
  }
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

export const SignUpBtn = styled.div`
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
  background-color: #3c4b66;
`;

export const SocailLoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MiddleLine = styled.div`
  width: 200px;
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: #0b0357;
  font-size: 14px;
  margin: 30px 0px;

  &::before,
  &::after {
    content: "";
    flex-grow: 1;
    background: #0b0357;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 5px;
  }
`;
