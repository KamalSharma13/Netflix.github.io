
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB452z8L1JvhRKyoIkQ6ce0iJybo7t3Dps",
  authDomain: "react-netflix-clone-b1abd.firebaseapp.com",
  projectId: "react-netflix-clone-b1abd",
  storageBucket: "react-netflix-clone-b1abd.appspot.com",
  messagingSenderId: "241797277451",
  appId: "1:241797277451:web:8f37c5fb0fd3889010240e",
  measurementId: "G-TX6H5HZ07R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseauth = getAuth(app);