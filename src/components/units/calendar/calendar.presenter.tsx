import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { db } from "./calendar.firebase";
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

interface Event {
  id: string;
  title: string;
  start: string;
  allDay: boolean;
  color: string;
}

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 100vh;
  margin-right: 10%;
`;

const CalendarBox = styled.div`
  width: 90%;
`;

const StyledButton = styled.button<{ color: string }>`
  background-color: ${(props) => props.color};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 5px;
  cursor: pointer;
  transition: 0.35s;
  &:hover {
    background-color: black;
  }
`;

const ButtonBox = styled.div`
  margin-left: 50px;
  width: 10%;
  display: flex;
  flex-direction: column;
  margin-top: 10%;
`;

export default function CalendarPresenter() {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [highlightedDate, setHighlightedDate] = useState<string | null>(null);
  const [isDeleteMode, setIsDeleteMode] = useState(false); // 삭제 모드 상태

  useEffect(() => {
    const fetchEvents = async () => {
      const q = query(collection(db, "events"), orderBy("start"));
      const querySnapshot = await getDocs(q);
      const fetchedEvents: Event[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        fetchedEvents.push({
          id: doc.id,
          title: data.title,
          start: data.start,
          allDay: data.allDay,
          color: data.color,
        });
      });
      setEvents(fetchedEvents);
    };

    fetchEvents();
  }, []);

  const handleDateClick = (arg: { dateStr: string }) => {
    const clickedDate = new Date(arg.dateStr);
    setSelectedDate(arg.dateStr);
    clickedDate.setDate(clickedDate.getDate() - 1);
    setHighlightedDate(clickedDate.toISOString().split("T")[0]);
  };

  const addEvent = async (title: string, color: string) => {
    if (selectedDate) {
      // 같은 날짜에 동일한 이름의 이벤트가 있는지 확인
      const dateToAdd = new Date(selectedDate).toISOString().split("T")[0];
      const isDuplicate = events.some(
        (event) => event.start === dateToAdd && event.title === title
      );

      if (isDuplicate) {
        alert("같은 날짜에 같은 이름의 일정이 이미 존재합니다.");
        return; // 중복된 일정이 있을 경우 함수를 종료
      }
      const newEvent: Event = {
        title,
        start: selectedDate,
        allDay: true,
        id: "",
        color,
      };
      const docRef = await addDoc(collection(db, "events"), newEvent);
      newEvent.id = docRef.id;
      setEvents((prevEvents) => [...prevEvents, newEvent]);
    } else {
      alert("일정을 추가할 날짜를 선택하세요.");
    }
  };

  // 특정 날짜와 이름에 해당하는 이벤트 삭제 함수
  const deleteEventByName = async (title: string) => {
    if (selectedDate) {
      const dateToDelete = new Date(selectedDate).toISOString().split("T")[0];
      const eventsToDelete = events.filter(
        (event) => event.start === dateToDelete && event.title === title
      );

      if (eventsToDelete.length > 0) {
        for (const event of eventsToDelete) {
          if (event.id) {
            const eventDocRef = doc(db, "events", event.id);
            await deleteDoc(eventDocRef);
          }
        }
        setEvents((prevEvents) =>
          prevEvents.filter(
            (event) => event.start !== dateToDelete || event.title !== title
          )
        );
      } else {
        alert("삭제할 일정이 없습니다.");
      }
    } else {
      alert("삭제할 날짜를 선택하세요.");
    }
  };

  // 삭제 모드 활성화 ㄹ
  const toggleDeleteMode = () => {
    setIsDeleteMode(!isDeleteMode);
  };

  const dayCellClassNames = (arg: { date: Date }) => {
    const currentDate = arg.date.toISOString().split("T")[0];
    return highlightedDate === currentDate ? "selected-date" : "";
  };

  return (
    <CalendarContainer>
      <CalendarBox>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          dateClick={handleDateClick}
          events={events}
          dayCellClassNames={dayCellClassNames}
        />
      </CalendarBox>

      <ButtonBox>
        {isDeleteMode ? (
          <>
            <StyledButton
              onClick={() => deleteEventByName("천영")}
              color="#536349"
            >
              천영
              <br />
              추방
            </StyledButton>
            <StyledButton
              onClick={() => deleteEventByName("윤원")}
              color="#670fdf"
            >
              윤원
              <br />
              추방
            </StyledButton>
            <StyledButton
              onClick={() => deleteEventByName("승우")}
              color="blue"
            >
              승우
              <br />
              추방
            </StyledButton>
            <StyledButton onClick={() => deleteEventByName("영웅")} color="red">
              영웅
              <br />
              추방
            </StyledButton>
          </>
        ) : (
          <>
            <StyledButton
              onClick={() => addEvent("천영", "#536349")}
              color="#536349"
            >
              천영
              <br />
              추가
            </StyledButton>
            <StyledButton
              onClick={() => addEvent("윤원", "#670fdf")}
              color="#670fdf"
            >
              윤원
              <br />
              추가
            </StyledButton>
            <StyledButton onClick={() => addEvent("승우", "blue")} color="blue">
              승우
              <br />
              추가
            </StyledButton>
            <StyledButton onClick={() => addEvent("영웅", "red")} color="red">
              영웅
              <br />
              추가
            </StyledButton>
          </>
        )}
        <StyledButton onClick={toggleDeleteMode} color="gray">
          {isDeleteMode ? (
            <>
              삭제
              <br />
              종료
            </>
          ) : (
            <>
              삭제
              <br />
              모드
            </>
          )}
        </StyledButton>
      </ButtonBox>

      <style>
        {`
        .selected-date {
          background-color: #cce5ff;
          border-radius: 5px;
          padding: 5px;
          color: #000;
        }
      `}
      </style>
    </CalendarContainer>
  );
}
