import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB6QbeGrzONJxygmOvxshNbj6aJwch3L8c",
    authDomain: "fakt-mala-svatba.firebaseapp.com",
    projectId: "fakt-mala-svatba",
    storageBucket: "fakt-mala-svatba.firebasestorage.app",
    messagingSenderId: "212748346313",
    appId: "1:212748346313:web:eaa52499f2854f81093e18",
    measurementId: "G-W8HBEVY0SC",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
