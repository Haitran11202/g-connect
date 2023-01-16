function Square({ value, onSquareClick, className }) {
  let classes = className ? "square " + className : "square";
  return (
    <button className={classes} onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;
