import { initializeApp } from "firebase/app";
import {
    getFirestore,
    onSnapshot,
    collection,
    addDoc,
    serverTimestamp,
    query,
    orderBy,
} from "firebase/firestore";
import type { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import type Color from "../models/Color";

const firebaseConfig = {
    apiKey: "AIzaSyB6QbeGrzONJxygmOvxshNbj6aJwch3L8c",
    authDomain: "fakt-mala-svatba.firebaseapp.com",
    projectId: "fakt-mala-svatba",
    storageBucket: "fakt-mala-svatba.firebasestorage.app",
    messagingSenderId: "212748346313",
    appId: "1:212748346313:web:eaa52499f2854f81093e18",
    measurementId: "G-W8HBEVY0SC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export function useColors() {
    const [colors, setColors] = useState<Color[]>([]);

    useEffect(() => {
        const colorsRef = collection(db, "colors");
        const q = query(colorsRef, orderBy("createdAt", "asc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data: Color[] = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...(doc.data() as DocumentData),
            })) as Color[];
            setColors(data);
        });
        return () => unsubscribe();
    }, []);

    const addColor = async (code: string) => {
        await addDoc(collection(db, "colors"), { code, createdAt: serverTimestamp() });
    };

    return { colors, addColor };
}
