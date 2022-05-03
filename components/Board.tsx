import { Button } from "@mui/material";
import { useState } from "react";
import styles from "../styles/App.module.css";

export interface IBoardProps {}

export default function Board(props: IBoardProps) {
  const [squares, setSquares] = useState(new Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [isWinner, setIsWinner] = useState(false);

  const renderSquare = (id: number) => {
    const handleClick = () => {
      const sqs = squares.map((item, index) => {
        if (index === id) {
          item = player;
        }
        return item;
      });

      setSquares(sqs);
      togglePlayer();
    };

    return (
      <Button
        key={id}
        className={styles.square}
        variant="outlined"
        onClick={handleClick}
      >
        <span className={styles.player}>{squares[id]}</span>
      </Button>
    );
  };

  const togglePlayer = () => {
    if (player === "X") setPlayer("O");
    else setPlayer("X");
  };

  return (
    <div className={styles.grid}>
      {squares.map((_, index) => renderSquare(index))}
    </div>
  );
}
