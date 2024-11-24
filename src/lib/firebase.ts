import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBDamoj1DvJGRjvVgzVfiafS6ywuxp5sCs",
  authDomain: "roles-1d1c1.firebaseapp.com",
  projectId: "roles-1d1c1",
  storageBucket: "roles-1d1c1.firebasestorage.app",
  messagingSenderId: "1081823746875",
  appId: "1:1081823746875:web:352f4f1a39b31d184c751e"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);