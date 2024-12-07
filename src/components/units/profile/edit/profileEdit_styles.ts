import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 20px;
`;

export const GenreGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
`;

export const GenreBox = styled.div<{ isSelected: boolean }>`
  flex: 0 0 calc(20% - 10px); /* 한 줄에 5개씩 */

  padding: 10px;
  text-align: center;
  border-radius: 8px;
  border: 2px solid ${({ isSelected }) => (isSelected ? "#0b0537" : "#ccc")};
  background-color: ${({ isSelected }) => (isSelected ? "#0b0537" : "#f5f5f5")};
  color: ${({ isSelected }) => (isSelected ? "white" : "black")};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ isSelected }) =>
      isSelected ? "#3c4b66" : "#e0e0e0"};
  }

  @media (max-width: 1080px) {
    flex: 0 0 calc(30% - 10px); /* 한 줄에 5개씩 */
  }
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #0b0537;
  margin-bottom: 20px;
  margin-top: 50px;
`;
export const Input = styled.input`
  width: 200px;
  height: 20px;
  border: none;
  border-bottom: 2px solid #0b0537;
  margin-bottom: 15px;
  background-color: #f5f5f5;

  :focus {
    outline: 2px solid #0b0537;

    border-bottom: none;
  }
`;

export const AlertSpan = styled.div<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 12px;
`;

export const SubTitle = styled.div`
  font-size: 16px;
  color: #0b0537;
  margin-bottom: 5px;
`;

export const LittleTitle = styled.div<{ color: string }>`
  font-size: 12px;
  color: ${(props) => props.color};
  margin-bottom: 5px;
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 200px;
`;

export const SmallBtn = styled.div`
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 60px;
  height: 35px;
  border-radius: 8px;
  font-size: 14px;
  color: white;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0b0537;
`;

export const Label = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const GenderDiv = styled.div<{ isSelected: boolean }>`
  padding: 10px 20px;
  font-size: 16px;
  border: 2px solid ${({ isSelected }) => (isSelected ? "#0b0537" : "#ccc")};
  background-color: ${({ isSelected }) => (isSelected ? "#0b0537" : "#f5f5f5")};
  color: ${({ isSelected }) => (isSelected ? "white" : "#333")};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    background-color: ${({ isSelected }) =>
      isSelected ? "#0b0537" : "#e0e0e0"};
  }
`;

export const StyledSelect = styled.select`
  width: 200px;
  padding: 10px;
  font-size: 14px;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  color: #333;
  cursor: pointer;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: #0b0537;
  }

  &:focus {
    border-color: #0b0537;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
  }
`;

export const StyledOption = styled.option`
  background-color: white;
  color: #333;
  font-size: 14px;
`;

export const BtnWrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SubmitBtn = styled.div`
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
  min-width: 150px;
  min-height: 50px;
  border-radius: 8px;
  font-size: 14px;
  color: white;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0b0537;
`;
