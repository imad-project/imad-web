// styles.ts
import styled from "@emotion/styled";

// 캘린더와 도형들을 감싸는 컨테이너
export const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  height: auto;
`;

// 도형을 감싸는 컨테이너 (각 날짜에 도형을 렌더링)
export const ShapeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 20px;
    height: 20px;
    margin: 0 5px;
  }
`;

// 도형 버튼 스타일
export const ShapeButton = styled.button<{ isSelected: boolean }>`
  background-color: ${(props) => (props.isSelected ? "lightblue" : "white")};
  border: 1px solid #ccc;
  margin: 5px;
  padding: 10px;
  cursor: pointer;
`;

// 선택된 날짜 버튼 스타일 (옵션 추가 가능)
export const DateButton = styled.button<{ isSelected: boolean }>`
  background-color: ${(props) => (props.isSelected ? "lightgray" : "white")};
  border: 1px solid #ccc;
  margin: 5px;
  padding: 10px;
  cursor: pointer;
`;
