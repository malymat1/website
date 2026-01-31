import { onSnapshot, collection, updateDoc, doc, getDoc } from "firebase/firestore";
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

    const reserveGift = async (giftId: string, name: string) => {
        const giftDocRef = doc(db, "gifts", giftId);
        const giftDoc = await getDoc(giftDocRef);
        if (giftDoc.exists() && giftDoc.data().reserved === true) {
            throw new Error("This gift is already reserved.");
        }
        await updateDoc(giftDocRef, {
            reserved: true,
            reserver: name,
        });
    };

    return { gifts, reserveGift };
}
