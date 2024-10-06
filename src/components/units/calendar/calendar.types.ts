// calendar.types.ts
export type Shape = "천영" | "윤원" | "승우" | "영웅"; // 인물 이름으로 수정

export interface CalendarPresenterProps {
  shapesForDate: Record<string, Shape[]>; // 날짜별로 인물 이름 배열을 저장
  onDateClick: (date: string) => void;
  onShapeClick: (shape: Shape) => void;
}
