import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { db } from "./calendar.firebase"; // firebase 설정 파일 경로
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  deleteDoc,
  doc,
} from "firebase/firestore";
import styled from "@emotion/styled";

// Event 인터페이스 정의
interface Event {
  id: string; // Firestore 문서 ID를 저장하기 위한 추가
  title: string;
  start: string;
  allDay: boolean;
  color: string;
}

// 스타일 설정
const CalendarContainer = styled.div`
  width: 80%;
  height: 100vh; /* 전체 화면 높이 */
  margin-left: 10%;
  margin-right: 10%;
`;

const StyledButton = styled.button<{ color: string }>`
  background-color: ${(props) => props.color}; /* 버튼 배경색 */
  color: white; /* 버튼 텍스트 색상 */
  border: none; /* 테두리 제거 */
  border-radius: 5px; /* 둥근 모서리 */
  padding: 10px 15px; /* 패딩 */
  margin: 5px; /* 버튼 간격 */
  cursor: pointer; /* 커서 변경 */

  &:hover {
    background-color: #0056b3; /* 호버 시 배경색 변경 */
  }
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 30px;
`;

export default function CalendarPresenter() {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [highlightedDate, setHighlightedDate] = useState<string | null>(null); // 강조할 날짜 상태

  useEffect(() => {
    // Firestore에서 일정을 불러오는 함수
    const fetchEvents = async () => {
      const q = query(collection(db, "events"), orderBy("start"));
      const querySnapshot = await getDocs(q);
      const fetchedEvents: Event[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        fetchedEvents.push({
          id: doc.id, // Firestore 문서 ID 추가
          title: data.title,
          start: data.start,
          allDay: data.allDay,
          color: data.color,
        });
      });
      setEvents(fetchedEvents);
    };

    fetchEvents(); // 컴포넌트가 마운트될 때 호출
  }, []);

  // 날짜 클릭 시 호출되는 함수
  const handleDateClick = (arg: { dateStr: string }) => {
    const clickedDate = new Date(arg.dateStr);
    setSelectedDate(arg.dateStr);
    // 클릭한 날짜의 전날 계산
    clickedDate.setDate(clickedDate.getDate() - 1);
    setHighlightedDate(clickedDate.toISOString().split("T")[0]); // 전날 저장
  };

  // 버튼 클릭 시 호출되는 함수
  const addEvent = async (title: string, color: string) => {
    if (selectedDate) {
      const newEvent: Event = {
        title,
        start: selectedDate, // 강조된 날짜를 사용
        allDay: true,
        id: "", // 초기 값 설정
        color,
      };
      const docRef = await addDoc(collection(db, "events"), newEvent);
      newEvent.id = docRef.id; // Firestore 문서 ID 업데이트
      setEvents((prevEvents) => [...prevEvents, newEvent]);
    } else {
      alert("일정을 추가할 날짜를 선택하세요.");
    }
  };

  // 특정 날짜의 모든 일정 삭제 함수
  const deleteEvents = async () => {
    if (selectedDate) {
      const dateToDelete = new Date(selectedDate).toISOString().split("T")[0];
      const eventsToDelete = events.filter(
        (event) => event.start === dateToDelete
      );

      // 삭제할 이벤트가 있을 경우
      if (eventsToDelete.length > 0) {
        for (const event of eventsToDelete) {
          if (event.id) {
            // event.id가 정의된 경우에만 삭제
            const eventDocRef = doc(db, "events", event.id); // Firestore 문서 참조
            await deleteDoc(eventDocRef); // Firestore에서 삭제
          }
        }

        // 상태 업데이트
        setEvents((prevEvents) =>
          prevEvents.filter((event) => event.start !== dateToDelete)
        );
      } else {
        alert("삭제할 일정이 없습니다.");
      }
    } else {
      alert("삭제할 날짜를 선택하세요.");
    }
  };

  // 선택된 날짜에 클래스 추가
  const dayCellClassNames = (arg: { date: Date }) => {
    const currentDate = arg.date.toISOString().split("T")[0]; // ISO 형식으로 변환하여 날짜 비교
    // 클릭한 날짜의 전날 강조
    return highlightedDate === currentDate ? "selected-date" : "";
  };

  return (
    <CalendarContainer>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        events={events}
        dayCellClassNames={dayCellClassNames}
      />
      <ButtonBox>
        <StyledButton onClick={() => addEvent("천영", "blue")} color="blue">
          천영 추가
        </StyledButton>
        <StyledButton onClick={() => addEvent("윤원", "black")} color="black">
          윤원 추가
        </StyledButton>
        <StyledButton onClick={() => addEvent("승우", "green")} color="green">
          승우 추가
        </StyledButton>
        <StyledButton onClick={() => addEvent("영웅", "red")} color="red">
          영웅 추가
        </StyledButton>
      </ButtonBox>
      <StyledButton onClick={deleteEvents} color="gray">
        삭제
      </StyledButton>
      <style>
        {`
        .selected-date {
          background-color: #cce5ff; /* 강조할 날짜의 배경색 */
          border-radius: 5px; /* 모서리 둥글게 */
          padding: 5px; /* 패딩 추가 */
          color: #000; /* 텍스트 색상 */
        }
      `}
      </style>
    </CalendarContainer>
  );
}
