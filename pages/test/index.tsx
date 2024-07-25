import styled from "@emotion/styled";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const VALUE = 30;
const PATH_COLOR = "#5F81FF"; // 차트에 표시될 선
const TRAIL_COLOR = "#DFE8FF"; // 차트의 배경선

export default function CircularProgressChart() {
  const ProgressbarContainer = styled.div`
    width: 100px;
    height: 100px;
  `;

  return (
    <ProgressbarContainer>
      <CircularProgressbar
        value={30}
        text={`${VALUE}%`}
        className="progressbar"
        strokeWidth={10}
        styles={buildStyles({
          pathColor: PATH_COLOR,
          trailColor: TRAIL_COLOR,
          textColor: "#2B2D36",
        })}
      />
    </ProgressbarContainer>
  );
}
