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
    const { addColor, removeColor } = useColors();
    const [addedIds, setAddedIds] = useState<string[]>([]);

    function removeLastColor() {
        if (addedIds.length <= 0) {
            return;
        }
        removeColor(addedIds[addedIds.length - 1]);
        setAddedIds((prev) => prev.splice(-1));
    }

    return (
        <div className={styles.container}>
            <div className={styles.colorPicker}>
                <HexColorPicker color={color} onChange={setColor} />
            </div>
            <div className={styles.buttonContainer}>
                <div className={styles.colorPreview} style={{ backgroundColor: color }}></div>
                <Button
                    onClick={async () => {
                        const addedId = await addColor(color);
                        setAddedIds((prev) => [...prev, addedId]);
                    }}
                >
                    {t("colorPickerBtn")}
                </Button>
                <Button onClick={removeLastColor} disabled={addedIds.length === 0}>
                    {t("colorPickerUndoBtn")}
                </Button>
            </div>
        </div>
    );
}
