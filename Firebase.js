import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "feelathome-594b4.firebaseapp.com",
  projectId: "feelathome-594b4",
  storageBucket: "feelathome-594b4.firebasestorage.app",
  messagingSenderId: "409868763904",
  appId: "1:409868763904:web:4c84790aea6d6c06cfa9e5",
  measurementId: "G-14R2QD4N8V",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const dataBase = getFirestore(app);
export default app;
