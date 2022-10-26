import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
  collection,
  updateDoc,
  addDoc,
  doc,
  getDocs,
  increment,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDVX3Pir46x6gj8pAzoTESEEAEGhn91MDw",
    authDomain: "salt-week7-day2.firebaseapp.com",
    projectId: "salt-week7-day2",
    storageBucket: "salt-week7-day2.appspot.com",
    messagingSenderId: "917494022976",
    appId: "1:917494022976:web:0a4a6009222d0b70f3b0a5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const incrementCounterDB = async (id) => {
    const quoteRef = doc(db, 'quotes', id);
    await updateDoc(quoteRef, {
      charlieUttrance: increment(1),
    });
  };

export { app , db, incrementCounterDB };