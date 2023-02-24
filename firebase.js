// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1jJ_N-lU76HBY8iWQHL7gCy0VZQYdFdw",
  authDomain: "portfolio-fb973.firebaseapp.com",
  projectId: "portfolio-fb973",
  storageBucket: "portfolio-fb973.appspot.com",
  messagingSenderId: "288901563873",
  appId: "1:288901563873:web:7b684f946b99b1c475bea0",
  measurementId: "G-1CRQWT7ZFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app