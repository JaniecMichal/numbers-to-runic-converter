import "./button.css";

export const Button = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};
