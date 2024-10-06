// styles.ts
import styled from "@emotion/styled";

export const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const DateButton = styled.button<{ isSelected: boolean }>`
  background-color: ${(props) => (props.isSelected ? "#7f8c8d" : "#ecf0f1")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;

  &:hover {
    background-color: #95a5a6;
  }
`;

export const ShapeButton = styled.button<{ isSelected: boolean }>`
  background-color: ${(props) => (props.isSelected ? "#3498db" : "#bdc3c7")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  padding: 10px;
  border: none;
  border-radius: 50%;
  margin: 5px;
  width: 50px;
  height: 50px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;
