import type { Timestamp } from "firebase/firestore";

export default interface Color {
    id: string;
    code: string;
    createdAt: Timestamp;
}
