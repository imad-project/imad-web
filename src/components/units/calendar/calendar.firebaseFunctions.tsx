// firebaseFunctions.ts
import { db } from "./calendar.firebase";
import {
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  getDoc,
  setDoc,
} from "firebase/firestore";

// 특정 날짜의 도형 가져오기
export const getShapesForDate = async (date: string) => {
  const docRef = doc(db, "calendar", date);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data().shapes || [];
  } else {
    return []; // 문서가 없을 경우 빈 배열 반환
  }
};

// 도형 추가하기
export const addShape = async (date: string, shape: string) => {
  const docRef = doc(db, "calendar", date);

  // 문서가 존재하는지 확인
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    // 문서가 존재하지 않으면 새로 생성
    await setDoc(docRef, {
      shapes: [], // 새로운 문서에는 빈 배열로 시작
    });
  }

  // 도형 추가
  await updateDoc(docRef, {
    shapes: arrayUnion(shape),
  });
};

// 도형 제거하기
export const removeShape = async (date: string, shape: string) => {
  const docRef = doc(db, "calendar", date);

  // 문서가 존재하는지 확인
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    console.error(
      `Document for date ${date} does not exist. Cannot remove shape.`
    );
    return; // 문서가 없으면 함수 종료
  }

  // 도형 제거
  await updateDoc(docRef, {
    shapes: arrayRemove(shape),
  });
};
