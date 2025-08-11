// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl7O4w4DkVdRARgU1-Z2dXLn-Xpiqn6GY",
  authDomain: "to-do-list-react-90b47.firebaseapp.com",
  projectId: "to-do-list-react-90b47",
  storageBucket: "to-do-list-react-90b47.firebasestorage.app",
  messagingSenderId: "490609653601",
  appId: "1:490609653601:web:64221276dc7f6055b47720",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
