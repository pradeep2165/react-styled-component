import "./App.css";
import StyledButton from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <StyledButton>Button</StyledButton>
      <div>
        <hr />
      </div>
      <StyledButton variant="outline">Outline Button </StyledButton>
    </div>
  );
}

export default App;
