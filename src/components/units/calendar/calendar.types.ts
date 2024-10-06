// types.ts
export type Shape = "circle" | "square" | "triangle" | "star";

export interface CalendarPresenterProps {
  selectedDate: string | null;
  shapesForDate: Shape[];
  onDateClick: (date: string) => void;
  onShapeClick: (shape: Shape) => void;
}
