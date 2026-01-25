import styles from "./ColorPicker.module.scss";

import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import Button from "../Button/Button";
import { useColors } from "../../hooks/useColors";
import { useTranslation } from "react-i18next";

interface ColorPickerProps {}

export default function ColorPicker({}: ColorPickerProps) {
    const { t } = useTranslation();
    const [color, setColor] = useState("#4e6564");
    const { addColor } = useColors();

    return (
        <div className={styles.container}>
            <div className={styles.colorPicker}>
                <HexColorPicker color={color} onChange={setColor} />
            </div>
            <div className={styles.buttonContainer}>
                <div className={styles.colorPreview} style={{ backgroundColor: color }}></div>
                <Button
                    onClick={() => {
                        addColor(color);
                    }}
                >
                    {t("colorPickerBtn")}
                </Button>
            </div>
        </div>
    );
}
