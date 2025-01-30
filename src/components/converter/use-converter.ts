import { useState } from "react";
import { saveAs } from "file-saver";

export const useConverter = () => {
  const [number, setNumber] = useState(2025);

  const handleDownload = () => {
    const svgElement = document.querySelector(".rune-number");

    if (svgElement) {
      const svgString = new XMLSerializer().serializeToString(svgElement);
      const svgBlob = new Blob([svgString], {
        type: "image/svg+xml;charset=utf-8",
      });
      saveAs(svgBlob, `rune-number_${number}.svg`);
    } else {
      console.error("Nie znaleziono elementu SVG.");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, min, max } = event.target;
    const numValue = parseInt(value, 10);
    const numMin = Number(min);
    const numMax = Number(max);

    if (isNaN(numValue) || numValue < 0) {
      alert("Wprowadź liczbę naturalną (całkowitą i nieujemną).");
      return;
    }

    if (numValue > 9999) {
      alert("Wprowadzona liczba musi być mniejsza niż 10000.");
      return;
    }

    const num = Math.max(
      numMin,
      Math.min(Number(max), numValue % (+numMax + 1))
    );

    setNumber(num);
  };

  return {
    number,
    handleChange,
    handleDownload,
  };
};
