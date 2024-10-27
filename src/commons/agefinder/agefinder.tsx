import React from "react";
import styled from "@emotion/styled";

// 데이터 배열
const age = [
  { id: "NONE", color: "black", name: "미상" },
  { id: "12", color: "yellow", name: "12" },
  { id: "15", color: "blue", name: "15" },
  { id: "19", color: "red", name: "19" },
];

// 스타일드 컴포넌트
const AgeBox = styled.div<{ bgColor: string }>`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgColor};
  color: white;
  font-size: 15px;
  border-radius: 5px;
  margin-left: 5px;
`;

// 컴포넌트 정의
interface AgeComponentProps {
  id: string | number;
}

export function AgeComponent({ id }: AgeComponentProps) {
  // 주어진 id에 해당하는 데이터를 찾음
  const selectedAge = age.find((item) => item.id === id);

  if (!selectedAge) return <div>존재하지 않는 ID입니다.</div>;

  return <AgeBox bgColor={selectedAge.color}>{selectedAge.name}</AgeBox>;
}
