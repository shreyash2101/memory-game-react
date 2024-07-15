import "./App.css";
import Grid from "./components/Grid.jsx";

function App() {
  return (
    <div className="game">
      <h1>Memory Game</h1>
      <Grid row={2} col={2} />
    </div>
  );
}

export default App;
