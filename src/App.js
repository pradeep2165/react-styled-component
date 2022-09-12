import "./App.css";
import StyledButton, { FancyButton } from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <StyledButton>Button</StyledButton>
      <div>
        <hr />
      </div>
      <StyledButton variant="outline">Outline Button </StyledButton>
      <hr />
      {/* as='a' is for teat as ancher tag */}
      <FancyButton as="a">Fancy Button </FancyButton>
    </div>
  );
}

export default App;
