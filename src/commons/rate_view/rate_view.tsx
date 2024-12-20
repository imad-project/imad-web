import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const PATH_COLOR = "#0b0537"; // 차트에 표시될 선
const TRAIL_COLOR = "#DFE8FF"; // 차트의 배경선

interface CircularProgressChartProps {
  value: number | null | undefined;
}

const ProgressbarContainer = styled.div`
  width: 100%;
  height: 100%;
  min-width: 50px;
  min-height: 50px;

  margin-right: 10%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Star = styled.img`
  width: 20%;
  height: 20%;
  position: absolute;
  left: 40%;
  top: 30%;
`;

const Value = styled.div`
  position: absolute;
  top: 55%;
`;

export default function CircularProgressChart({
  value,
}: CircularProgressChartProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0); // 초기화

    // 소수점 자르기 (한 번에 처리)
    const targetValue =
      value !== null && value !== undefined ? Math.floor(value * 10) : 0;
    const increment = targetValue / 100; // 각 프레임마다 증가할 값

    let currentProgress = 0;

    const animateProgress = () => {
      setProgress((prev) => {
        currentProgress = prev + increment;
        if (currentProgress >= targetValue) {
          return targetValue;
        } else {
          requestAnimationFrame(animateProgress);
          return currentProgress;
        }
      });
    };

    requestAnimationFrame(animateProgress);
  }, [value]);

  return (
    <ProgressbarContainer>
      <Star src="/img/icon/icons/star.fill.png" />
      <Value>
        {value !== null && value !== undefined ? value.toFixed(1) : "0.0"}
      </Value>
      <CircularProgressbar
        value={progress}
        className="progressbar"
        strokeWidth={5}
        styles={buildStyles({
          pathColor: PATH_COLOR,
          trailColor: TRAIL_COLOR,
          textColor: "#2B2D36",
        })}
      />
    </ProgressbarContainer>
  );
}
