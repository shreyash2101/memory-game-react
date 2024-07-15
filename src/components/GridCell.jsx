import { useState } from "react";

const GridCell = ({
  row,
  col,
  totalRow,
  numbers,
  clickedCards,
  setClickedCards,
  setDisableGrid,
  totalCards,
  setTotalCards,
}) => {
  const handleClickCell = (e) => {
    const id = e.target.id;
    // disable cell
    document.getElementById(id).classList.add("disabled-cell");
    // show value
    document.getElementById("val-" + id)?.classList?.remove("hide-value");

    const cellData = {
      value: numbers[row * totalRow + col],
      id: id,
    };

    clickedCards.push(cellData);

    if (clickedCards.length == 2) {
      setDisableGrid(true);
      const cardId1 = clickedCards[0].id;
      const cardId2 = clickedCards[1].id;

      if (clickedCards[0].value == clickedCards[1].value) {
        setTimeout(() => {
          // Hide cell
          document.getElementById(cardId1).classList.add("hidden-cell");
          document.getElementById(cardId2).classList.add("hidden-cell");

          // Hide values
          document
            .getElementById("val-" + cardId1)
            ?.classList?.add("hide-value");
          document
            .getElementById("val-" + cardId2)
            ?.classList?.add("hide-value");

          setClickedCards([]);
          setDisableGrid(false);
          setTotalCards(totalCards - 2);
        }, 3000);
      } else {
        setTimeout(() => {
          // enable cells
          document.getElementById(cardId1).classList.remove("disabled-cell");
          document.getElementById(cardId2).classList.remove("disabled-cell");

          // Hide values
          document
            .getElementById("val-" + cardId1)
            ?.classList?.add("hide-value");
          document
            .getElementById("val-" + cardId2)
            ?.classList?.add("hide-value");
          setClickedCards([]);
          setDisableGrid(false);
        }, 3000);
      }
    }
  };

  return (
    <div
      id={`${row}-${col}`}
      className="grid-item"
      onClick={(e) => handleClickCell(e)}
    >
      <span id={`val-${row}-${col}`} className="hide-value">
        {numbers?.[row * totalRow + col]}
      </span>
    </div>
  );
};

export default GridCell;
