import { useState } from "react";
import "./board.css";
import Square from "./Square";

function Board() {
  const [isNext, setIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentStep, setcurrentStep] = useState(0);

  console.log(isNext);

  const [numbers, setNumbers] = useState([]);

  let status;
  const handleClick = (i) => {
    if (squares[i] || calculatorWinner(squares)) return;
    const nextSquares = squares.slice();
    nextSquares[i] = isNext ? "X" : "O";
    setSquares(nextSquares);
    setIsNext(!isNext);
    setcurrentStep(i);
  };

  const winner = calculatorWinner(squares);

  if (winner) {
    status = "Winner : " + winner.square;
  } else if (!squares.includes(null)) {
    status = "Tie";
  } else {
    status = "Next player: " + (isNext ? "X" : "O");
  }
  function listToMatrix(list, elementsPerSubArray) {
    var matrix = [],
      i,
      k;
    for (i = 0, k = -1; i < list.length; i++) {
      if (i % elementsPerSubArray === 0) {
        k++;
        matrix[k] = [];
      }
      matrix[k].push(list[i]);
    }
    return matrix;
  }

  var matrix = listToMatrix(squares, 3);

  return (
    <>
      <div>
        <div className="status"> {status}</div>
        <div className="board-row">
          {squares.map((square, index) => {
            let classes =
              winner && winner.numbers.includes(index) ? "hightLight" : "";
            if (currentStep === index) {
              classes += " bold";
            }
            return (
              <Square
                key={index}
                value={square}
                className={classes}
                onSquareClick={() => handleClick(index)}
              />
            );
          })}
        </div>
      </div>
      <div>
        {matrix.map((ma, index) => {
          return ma.map((m, jndex) => {
            return (
              <>
                {m && (
                  <div>
                    | {m} : hàng {index} - cột {jndex}
                  </div>
                )}
              </>
            );
          });
        })}
      </div>
    </>
  );
}

function calculatorWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      const resutl = { square: squares[a], numbers: [a, b, c] };
      return resutl;
    }
  }
  return null;
}

export default Board;
