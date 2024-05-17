import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDrGD0E43MqgdSGyQioCFCuXz1xaghNLL4",
  authDomain: "complaint-box-478d6.firebaseapp.com",
  projectId: "complaint-box-478d6",
  storageBucket: "complaint-box-478d6.appspot.com",
  messagingSenderId: "333722106241",
  appId: "1:333722106241:web:057f7530e897b03bf99080",
  measurementId: "G-JXC0SJQGXS"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);