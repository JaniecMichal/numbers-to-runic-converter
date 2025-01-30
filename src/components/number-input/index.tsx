import React from "react";
import "./NumberInput.css";

type NumberInputProps = {
  number: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const NumberInput = ({ number, onChange }: NumberInputProps) => (
  <label className="number-input-label">
    Enter a number:
    <input
      type="number"
      name="number"
      id="number"
      min="0"
      max="9999"
      value={number}
      onChange={onChange}
      className="number-input"
    />
  </label>
);
