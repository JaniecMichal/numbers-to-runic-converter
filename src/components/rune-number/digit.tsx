const CISTERCIAN_POINTS = [
  "0,0 0,3",
  "0,0 1,0",
  "0,1 1,1",
  "0,0 1,1",
  "0,1 1,0",
  "0,0 1,0 0,1",
  "1,0 1,1",
  "0,0 1,0 1,1",
  "1,0 1,1 0,1",
  "0,0 1,0 1,1 0,1",
];

type DigitProps = {
  value: number;
  magnitude: number;
};

export const Digit = ({ value, magnitude }: DigitProps) => {
  const getTransform = () => {
    switch (magnitude) {
      case 1:
        return "scale(-1, 1)";
      case 2:
        return "translate(0, 3) scale(1, -1)";
      case 3:
        return "translate(0, 3) scale(-1, -1)";
      default:
        return "";
    }
  };

  return (
    <>
      <polyline transform={getTransform()} points={CISTERCIAN_POINTS[0]} />
      <polyline transform={getTransform()} points={CISTERCIAN_POINTS[value]} />
    </>
  );
};
