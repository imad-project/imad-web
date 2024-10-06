// firebaseFunctions.ts
import { db } from "./calendar.firebase";
import {
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  getDoc,
} from "firebase/firestore";

export const getShapesForDate = async (date: string) => {
  const docRef = doc(db, "calendar", date);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data().shapes || [];
  } else {
    return [];
  }
};

export const addShape = async (date: string, shape: string) => {
  const docRef = doc(db, "calendar", date);
  await updateDoc(docRef, {
    shapes: arrayUnion(shape),
  });
};

export const removeShape = async (date: string, shape: string) => {
  const docRef = doc(db, "calendar", date);
  await updateDoc(docRef, {
    shapes: arrayRemove(shape),
  });
};
