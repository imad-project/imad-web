// presenter.tsx
import React from "react";
import { CalendarPresenterProps, Shape } from "./calendar.types";
import { CalendarWrapper, DateButton, ShapeButton } from "./calendar.styles";

const CalendarPresenter = ({
  selectedDate,
  shapesForDate,
  onDateClick,
  onShapeClick,
}: CalendarPresenterProps) => {
  const dates = ["2024-10-01", "2024-10-02", "2024-10-03"]; // 예시 날짜들
  const shapes: Shape[] = ["circle", "square", "triangle", "star"]; // 도형 리스트

  return (
    <CalendarWrapper>
      <div>
        {/* 날짜 선택 */}
        {dates.map((date) => (
          <DateButton
            key={date}
            onClick={() => onDateClick(date)}
            isSelected={selectedDate === date}
          >
            {date}
          </DateButton>
        ))}
      </div>

      <div>
        {/* 도형 선택 */}
        {shapes.map((shape) => (
          <ShapeButton
            key={shape}
            onClick={() => onShapeClick(shape)}
            isSelected={shapesForDate.includes(shape)}
          >
            {shape}
          </ShapeButton>
        ))}
      </div>
    </CalendarWrapper>
  );
};

export default CalendarPresenter;
