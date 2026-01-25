import styles from "./ColorLibrary.module.scss";
import { useState, useRef, useEffect } from "react";

interface ColorLibraryProps {
    colors: string[];
}

export default function ColorLibrary({ colors }: ColorLibraryProps) {
    const libraryRef = useRef<HTMLDivElement>(null);
    const [perRow, setPerRow] = useState(1);

    useEffect(() => {
        function calculatePerRow() {
            if (!libraryRef.current) return;
            const containerWidth = libraryRef.current.offsetWidth;
            const elementDimensions = 20;
            const gap = 5;
            const perRow = Math.floor((containerWidth + gap) / (elementDimensions + gap));
            setPerRow(perRow);
        }
        calculatePerRow();
        window.addEventListener("resize", calculatePerRow);
        return () => window.removeEventListener("resize", calculatePerRow);
    }, []);

    // Calculate number of rows needed
    const rows = Math.ceil(colors.length / perRow);
    const totalElements = rows * perRow;

    // Pad the array with placeholders
    let libraryElements = [...colors];
    while (libraryElements.length < totalElements) {
        libraryElements.push("");
    }

    return (
        <div className={styles.library} ref={libraryRef}>
            {libraryElements.map((color, i) => (
                <div
                    key={i}
                    className={styles.element}
                    style={
                        color
                            ? { backgroundColor: color }
                            : { backgroundColor: "#4e6564", border: "solid #4e6564 1px" }
                    }
                ></div>
            ))}
        </div>
    );
}
