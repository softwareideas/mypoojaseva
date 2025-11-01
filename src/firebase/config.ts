// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF_gmydTUkkS5IeKnhQvm5BzL5I8qUBeQ",
  authDomain: "pooja-booking-e363a.firebaseapp.com",
  projectId: "pooja-booking-e363a",
  storageBucket: "pooja-booking-e363a.firebasestorage.app",
  messagingSenderId: "1098459676179",
  appId: "1:1098459676179:web:74d14be70978709fc709e6",
  measurementId: "G-HHZYK8J9BP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };
export default app;
