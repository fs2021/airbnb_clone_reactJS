// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRZMq6AnrPW956hFf78DJiYKwtW3FyJm8",
  authDomain: "airbnbclone-1a299.firebaseapp.com",
  projectId: "airbnbclone-1a299",
  storageBucket: "airbnbclone-1a299.appspot.com",
  messagingSenderId: "503934846307",
  appId: "1:503934846307:web:5506230e3f2b4821e1ff56",
  measurementId: "G-NTYL11K19J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);