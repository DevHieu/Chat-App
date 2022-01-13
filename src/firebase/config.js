import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjGYwhDd5XZxO6L931P5ulmu6XqUPs8CM",
  authDomain: "chat-app-1b868.firebaseapp.com",
  projectId: "chat-app-1b868",
  storageBucket: "chat-app-1b868.appspot.com",
  messagingSenderId: "518127490703",
  appId: "1:518127490703:web:9e6a2d1b3bf462b3fb02fa",
  measurementId: "G-ENVS5GEJNB",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
const db = getFirestore();

export { analytics, auth, db };
