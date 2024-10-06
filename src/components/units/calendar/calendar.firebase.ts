// firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase 환경 변수 (process.env로부터 가져옵니다)
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Firebase 초기화
let app;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp(); // 이미 초기화된 앱을 가져옵니다
}

// Firestore 및 Authentication 초기화
export const db = getFirestore(app);
export const auth = getAuth(app);
