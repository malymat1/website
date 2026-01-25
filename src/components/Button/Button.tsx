import { type ReactElement } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
    onClick: () => void;
    disabled?: boolean;
    children?: ReactElement | string;
}

export default function Button({ onClick, disabled, children }: ButtonProps) {
    let style = styles.buttonConcise;
    if (typeof children === "string") {
        style = styles.button;
    }
    return (
        <button className={style} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
}
