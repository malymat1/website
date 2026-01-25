import { onSnapshot, collection } from "firebase/firestore";
import type { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import type Gift from "../models/Gift";

import { db } from "./initializeFirebase";

export function useGifts() {
    const [gifts, setGifts] = useState<Gift[]>([]);

    useEffect(() => {
        const giftsRef = collection(db, "gifts");
        const unsubscribe = onSnapshot(giftsRef, (snapshot) => {
            const data: Gift[] = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...(doc.data() as DocumentData),
            })) as Gift[];
            setGifts(data);
        });
        return () => unsubscribe();
    }, []);

    return { gifts };
}
