import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-8fb16.firebaseapp.com",
  projectId: "reactchat-8fb16",
  storageBucket: "reactchat-8fb16.appspot.com",
  messagingSenderId: "167120457402",
  appId: "1:167120457402:web:0cb148a7f64b4e55897c83",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
