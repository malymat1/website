import {
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

import { db } from "./initializeFirebase";

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
