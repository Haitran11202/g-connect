import "./cell.css";
function Cell({ onClick, value, className }) {
  return (
    <div
      className={className ? "cell hightLight" : "cell"}
      onClick={() => onClick(value)}
    >
      {value}
    </div>
  );
}

export default Cell;
