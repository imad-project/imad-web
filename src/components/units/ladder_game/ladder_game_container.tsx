import React, { useState } from "react";
import * as S from "./ladder_game_styles";
import { motion } from "framer-motion";

export default function LadderGameContainer() {
  // 플레이어 이름 배열을 상수로 정의
  const players = ["윤원", "천영", "승우", "영웅"];
  const all = [
    ["천영", "영웅", "승우", "윤원"],
    ["천영", "승우", "윤원", "영웅"],
    ["영웅", "윤원", "승우", "천영"],
    ["영웅", "승우", "천영", "윤원"],
    ["승우", "윤원", "천영", "영웅"],
    ["승우", "영웅", "윤원", "천영"],
  ];
  const [isAct, setIsAct] = useState(false);
  const [randomTable, setRandomTable] = useState<string[]>([]);

  let randomArr: number[] = [];

  const getRandom = () => {
    let randomIndex = Math.floor(Math.random() * 6);
    return randomIndex;
  };

  // 게임 시작 버튼 클릭 시 호출되는 함수
  const handleAssign = () => {
    const newRandom = getRandom();
    setRandomTable(all[newRandom]);
    setIsAct(true);
  };

  // 초기화 버튼 클릭 시 호출되는 함수
  const handleReset = () => {
    setRandomTable([]);
    setIsAct(false);
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
          <S.NameBox>{isAct ? randomTable[0] : "윤원"}</S.NameBox>
          <S.NameBox>{isAct ? randomTable[1] : "천영"}</S.NameBox>
          <S.NameBox>{isAct ? randomTable[2] : "영웅"}</S.NameBox>
          <S.NameBox>{isAct ? randomTable[3] : "승우"}</S.NameBox>
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
          <S.Button onClick={handleAssign} disabled={isAct}>
            상대 고르기
          </S.Button>
          <S.Button onClick={handleReset}>맘에 안듬!</S.Button>
        </S.RowWrapper>
      </motion.div>
    </S.Wrapper>
  );
}
