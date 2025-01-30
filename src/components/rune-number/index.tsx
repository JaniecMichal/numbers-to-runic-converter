import { useCallback } from "react";

import { Digit } from "./digit";

export const CistercianNumeral = ({ number }: { number: number }) => {
  const getDigits = useCallback(
    (number: number) => number.toString().split("").reverse(),
    []
  );
  return (
    <svg viewBox="-1.5 -1 3 5" xmlns="http://www.w3.org/2000/svg">
      <style>{`
          polyline {
            fill: none;
            stroke: black;
            stroke-width: 0.25;
            stroke-linecap: round;
            stroke-linejoin: round;
          }
        `}</style>
      {getDigits(number).map((value, i) => (
        <Digit value={parseInt(value, 10)} magnitude={i} key={i} />
      ))}
    </svg>
  );
};
