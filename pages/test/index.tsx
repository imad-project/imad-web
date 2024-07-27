import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const VALUE = 30;
const PATH_COLOR = "#5F81FF"; // 차트에 표시될 선
const TRAIL_COLOR = "#DFE8FF"; // 차트의 배경선

export default function CircularProgressChart() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    const animateProgress = () => {
      setProgress((prev) => {
        if (prev < VALUE) {
          return prev + 1;
        } else {
          cancelAnimationFrame(animationFrame);
          return prev;
        }
      });
      animationFrame = requestAnimationFrame(animateProgress);
    };

    animateProgress();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const ProgressbarContainer = styled.div`
    width: 100px;
    height: 100px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const Star = styled.img`
    width: 20px;
    height: 20px;
    position: absolute;
    left: 40px;
    top: 30px;
  `;
  const Value = styled.div`
    position: absolute;
    top: 55px;
  `;

  return (
    <ProgressbarContainer>
      <Star src="/img/icon/icons/star.fill.png" />
      <Value>{`${progress}`}</Value>
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
