import { Converter } from "./components/converter";
import { MainWrapper } from "./components/main-wrapper";

const App = () => {
  return (
    <MainWrapper>
      <header>
        <h1 className="main-header">Number to runes converter</h1>
      </header>
      <Converter />
    </MainWrapper>
  );
};

export default App;
