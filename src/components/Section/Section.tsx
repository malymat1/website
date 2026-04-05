import styles from "./Section.module.scss";
import React from "react";

interface SectionProps {
    title: string;
    paragraphs: (string | React.ReactNode)[];
    children?: React.ReactNode;
}

export default function Section({ title, paragraphs, children }: SectionProps) {
    return (
        <div className={styles.section}>
            <div className={styles.title}>{title}</div>
            <div className={styles.paragraphsContainer}>
                {paragraphs.map((par, index) => {
                    return (
                        <React.Fragment key={index}>
                            <div
                                className={`${styles.paragraph} ${
                                    typeof par === "string" ? "" : `${styles.paragraphContent}`
                                }`}
                            >
                                {par}
                            </div>
                            {index < paragraphs.length - 1 && <div className={styles.divider} />}
                        </React.Fragment>
                    );
                })}
            </div>
            {children && <div className={styles.childernContainer}>{children}</div>}
        </div>
    );
}
