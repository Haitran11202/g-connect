import "./App.css";
import Board from "./components/Board/Board";

function App() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* Todo */}</ol>
      </div>
    </div>
  );
}
export default App;
