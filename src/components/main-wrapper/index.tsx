import "./MainWrapper.css";

export const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  return <main className="main-wrapper">{children}</main>;
};
