import "./App.css";
import StyledButton, { FancyButton, SubmitButton } from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <StyledButton>Button</StyledButton>
      <div>
        <hr />
      </div>
      <StyledButton variant="outline">Outline Button </StyledButton>
      <div>
        {" "}
        <hr />
      </div>
      {/* as='a' is for teat as ancher tag */}
      <FancyButton as="a">Fancy Button </FancyButton>
      <div>
        <hr />
      </div>
      <SubmitButton>Submit</SubmitButton>
    </div>
  );
}

export default App;
