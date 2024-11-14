import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 80%;
  /* height: 1847px; */
  border: 1px solid black;
  margin: 10px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
  border-radius: 15px;

  @media (max-width: 1080px) {
    width: 100%;
    padding: 20px;
    height: 100%;
  }
`;

export const Title = styled.div`
  font-size: 34px;
  font-weight: bold;
`;

export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
`;

export const Writer = styled.input`
  width: 90%;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Label = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`;

export const InputWrapper = styled.div`
  width: 100%;
  padding-top: 40px;
`;

export const Subject = styled.input`
  min-width: 90%;
  width: 90%;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;

  @media (max-width: 1080px) {
    min-width: 100%;
    width: 100%;
  }
`;

export const Contents = styled.textarea`
  width: 90%;
  height: 480px;
  padding-left: 16px;
  padding: 14px;
  border: 1px solid #bdbdbd;

  @media (max-width: 1080px) {
    min-width: 100%;
    width: 100%;
    height: 200px;
  }
`;

export const SearchButton = styled.button`
  width: 124px;
  height: 52px;
  margin-left: 16px;
  background-color: black;
  cursor: pointer;
  color: white;
`;

export const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const OptionWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const CancelButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: #bdbdbd;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
  color: white;
  background-color: #0b0537;
  border-radius: 15px;
`;

export const ErrorLog = styled.div`
  color: red;
  font-size: 12px;
`;

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const SelectBox = styled.select`
  margin-bottom: 10px;
`;

export const RadioBox = styled.div`
  display: flex;
  flex-direction: row;
`;
export const RadioBtn = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const RadioCheck = styled.input``;

export const Label2 = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const BytesSpan = styled.span`
  color: gray;
  font-size: 16px;
`;

export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;

export const SpoilerIcon = styled.img`
  width: 20px;
  height: auto;
  margin-right: 5px;
`;
export const SpoilerSpan = styled.div<{ isCheck: boolean }>`
  font-size: 14px;
  white-space: nowrap;
  margin-top: 2px;
  color: ${(props) => (props.isCheck ? "#0b0537" : "gray")};
`;
