import React, { useState } from "react";
import * as S from "./ladder_game_styles";
import { motion } from "framer-motion";

// 플레이어 이름 배열을 상수로 정의
const players = ["윤원", "천영", "승우", "영웅"];

// 할당 결과를 저장할 타입 정의
interface Assignments {
  [key: string]: string;
}

// Fisher-Yates 알고리즘을 사용하여 배열을 무작위로 섞는 함수
const shuffleArray = (array: string[]): string[] => {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

// 무작위로 할당된 이름들을 반환하는 함수
const getRandomizedAssignments = (players: string[]): Assignments => {
  let shuffledNames = shuffleArray(players);
  const assignments: Assignments = {};

  // 자기 자신에게 당첨되지 않도록 재할당
  for (let i = 0; i < players.length; i++) {
    if (players[i] === shuffledNames[i]) {
      return getRandomizedAssignments(players); // 다시 할당 시도
    }
    assignments[players[i]] = shuffledNames[i];
  }

  return assignments;
};

const LadderGame: React.FC = () => {
  const [assignments, setAssignments] = useState<Assignments>({});
  const [isAssigned, setIsAssigned] = useState<boolean>(false);

  // 게임 시작 버튼 클릭 시 호출되는 함수
  const handleAssign = () => {
    const newAssignments = getRandomizedAssignments(players);
    setAssignments(newAssignments);
    setIsAssigned(true);
  };

  // 초기화 버튼 클릭 시 호출되는 함수
  const handleReset = () => {
    setAssignments({});
    setIsAssigned(false);
  };

  return (
    <S.Wrapper>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          y: { duration: 1 },
        }}
      >
        <S.title>막고라 자판기</S.title>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.5,
          ease: "easeInOut",
          duration: 2,
          y: { duration: 1.5 },
        }}
      >
        <S.RowWrapper>
          <S.NameBox>윤원</S.NameBox>
          <S.NameBox>천영</S.NameBox>
          <S.NameBox>영웅</S.NameBox>
          <S.NameBox>승우</S.NameBox>
        </S.RowWrapper>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1,
          ease: "easeInOut",
          duration: 2,
          y: { duration: 2 },
        }}
      >
        <S.RowWrapper>
          <S.ArrowBox>↓</S.ArrowBox>
          <S.ArrowBox>↓</S.ArrowBox>
          <S.ArrowBox>↓</S.ArrowBox>
          <S.ArrowBox>↓</S.ArrowBox>
        </S.RowWrapper>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.5,
          ease: "easeInOut",
          duration: 2,
          y: { duration: 2.5 },
        }}
      >
        <S.RowWrapper>
          {players.map((player) => (
            <S.NameBox key={player}>
              {isAssigned ? assignments[player] : player}
            </S.NameBox>
          ))}
        </S.RowWrapper>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 2,
          ease: "easeInOut",
          duration: 2,
          y: { duration: 3 },
        }}
      >
        <S.RowWrapper>
          <S.Button onClick={handleAssign} disabled={isAssigned}>
            상대 고르기
          </S.Button>
          <S.Button onClick={handleReset}>맘에 안듬!</S.Button>
        </S.RowWrapper>
      </motion.div>
    </S.Wrapper>
  );
};

export default LadderGame;
