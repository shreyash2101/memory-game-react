import { useEffect, useState } from "react";
import GridCell from "./GridCell";

const Grid = ({ row, col }) => {
  const [clickedCards, setClickedCards] = useState([]);
  const [numbers, setNumbers] = useState(null);
  const [disableGrid, setDisableGrid] = useState(false);
  const [totalCards, setTotalCards] = useState(row * col);
  const [playAgain, setPlayAgain] = useState(false);

  const handlePlayAgain = () => {
    setTotalCards(row * col);
    setNumbers(null);
    setPlayAgain(!playAgain);
  };

  useEffect(() => {
    const generateShuffledPairs = (min, max) => {
      const numbers = [];
      for (let i = min; i <= max; i++) {
        numbers.push(i, i);
      }

      for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
      }

      return numbers;
    };

    setNumbers(generateShuffledPairs(1, (row * col) / 2));
  }, [playAgain]);

  const rows = [];

  for (let i = 0; i < row; i++) {
    const cells = [];
    for (let j = 0; j < col; j++) {
      cells.push(
        <GridCell
          key={`${i}-${j}`}
          row={i}
          col={j}
          totalRow={row}
          numbers={numbers}
          clickedCards={clickedCards}
          setClickedCards={setClickedCards}
          setDisableGrid={setDisableGrid}
          totalCards={totalCards}
          setTotalCards={setTotalCards}
        ></GridCell>
      );
    }
    rows.push(
      <div key={i} className="grid-row">
        {cells}
      </div>
    );
  }

  return totalCards ? (
    <div className={`grid ${disableGrid && "disabled-cell"}`}>{rows}</div>
  ) : (
    <div>
      <button className="play-btn" onClick={handlePlayAgain}>
        Play Again
      </button>
    </div>
  );
};

export default Grid;
