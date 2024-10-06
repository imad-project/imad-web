// container.tsx
import React, { useState, useEffect } from "react";
import CalendarPresenter from "./calendar.presenter";
import {
  getShapesForDate,
  addShape,
  removeShape,
} from "./calendar.firebaseFunctions"; // Firestore 함수들
import { Shape } from "./calendar.types";

const CalendarContainer = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [shapesForDate, setShapesForDate] = useState<Shape[]>([]); // 선택한 날짜의 도형 리스트

  useEffect(() => {
    const fetchShapes = async () => {
      if (selectedDate) {
        const shapes = await getShapesForDate(selectedDate);
        setShapesForDate(shapes);
      }
    };
    fetchShapes();
  }, [selectedDate]);

  const handleDateClick = (date: string) => {
    setSelectedDate(date);
  };

  const handleShapeClick = async (shape: Shape) => {
    if (!selectedDate) return;

    if (shapesForDate.includes(shape)) {
      await removeShape(selectedDate, shape);
      setShapesForDate((prev) => prev.filter((s) => s !== shape));
    } else {
      await addShape(selectedDate, shape);
      setShapesForDate((prev) => [...prev, shape]);
    }
  };

  return (
    <CalendarPresenter
      selectedDate={selectedDate}
      shapesForDate={shapesForDate}
      onDateClick={handleDateClick}
      onShapeClick={handleShapeClick}
    />
  );
};

export default CalendarContainer;
