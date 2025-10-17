import Dice from "./Dice";

function Board({ name, color, num, sum, gameHistory }) {
  return (
    <div>
      <h2>{name}</h2>
      <Dice color={color} num={num} />
      <div>총점: {sum}</div>
      <div>기록: {gameHistory.join(", ")}</div>
    </div>
  );
}

export default Board;
