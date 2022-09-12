import logo from "./logo.svg";
import "./App.css";
import StyledButton, { FancyButton, SubmitButton } from "./components/Button/Button";
import { AnimatedLogo } from "./components/Button/Button.styled";

function App() {
  return (
    <div className="App">
      <AnimatedLogo src={logo} />
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
