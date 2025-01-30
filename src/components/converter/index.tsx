import { NumberInput } from "../number-input";
import { CistercianNumeral } from "../rune-number";
import { Button } from "../button";
import { useConverter } from "./use-converter";

export const Converter = () => {
  const { number, handleChange, handleDownload } = useConverter();

  return (
    <div>
      <NumberInput number={number} onChange={handleChange} />
      <CistercianNumeral number={number} />
      <Button onClick={handleDownload}>Pobierz</Button>
    </div>
  );
};
