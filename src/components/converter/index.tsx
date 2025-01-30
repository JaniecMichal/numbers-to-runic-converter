import { useState } from "react";
import { NumberInput } from "../number-input";
import { CistercianNumeral } from "../rune-number";

export const Converter = () => {
  const [number, setNumber] = useState(2025);

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
  return (
    <div>
      <NumberInput number={number} onChange={handleChange} />
      <CistercianNumeral number={number} />{" "}
    </div>
  );
};
