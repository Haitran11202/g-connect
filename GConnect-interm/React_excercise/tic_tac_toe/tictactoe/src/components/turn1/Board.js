function Board() {
  return (
    <div className="App">
      <div className="tic_wrapper">
        <div className="cell_main">
          {board.map((val, index) => {
            return (
              <Cell
                className={currentStep === index ? "highLight" : ""}
                value={val}
                key={index}
                onClick={() => handleClick(index)}
              />
            );
          })}
        </div>
        <div className="cell_history">
          <label>History</label>
          <div>
            {boardPrev.map((val, index) => (
              <Cell key={index} value={val} index={index} />
            ))}
          </div>
        </div>
      </div>
      <p>
        {winner
          ? "Winner: " + winner.square
          : "Next Player: " + (xIsNext ? "X" : "O")}
      </p>
    </div>
  );
}

export default Board;
