import { ThemeProvider, createGlobalStyle } from "styled-components";
import logo from "./logo.svg";
import "./App.css";
import StyledButton, { FancyButton, SubmitButton } from "./components/Button/Button";
import { AnimatedLogo } from "./components/Button/Button.styled";
import { Darkbutton } from "./components/Button/Button.styled";
const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
  },
  light: {
    primary: "#fff",
    text: "#000",
  },
  fontFamily: "Segoe UI",
};
const GlobalStyle = createGlobalStyle`

button{
  font-family: ${(props) => props.theme.fontFamily};
};

`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
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
        <div>
          <hr />
        </div>
        <Darkbutton>Dark Theme</Darkbutton>
      </div>
    </ThemeProvider>
  );
}

export default App;
