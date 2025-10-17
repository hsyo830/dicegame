import Dice from "./Dice";

function Board({ name, color, gameHistory, isLoser }) {
  const num = gameHistory[gameHistory.length - 1] || 1;
  const sum = gameHistory.reduce((a, b) => a + b, 0);

  if (isLoser) {
    console.log(name);
  }
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
