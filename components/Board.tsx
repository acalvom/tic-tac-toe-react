import { Button } from "@mui/material";
import { useState } from "react";
import styles from "../styles/App.module.css";

export interface IBoardProps {}

export default function Board(props: IBoardProps) {
  const [squares, setSquares] = useState(new Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [isWinner, setIsWinner] = useState(false);

  const togglePlayer = () => {
    setPlayer(player === "X" ? "O" : "X");
  };

  const setSquareValue = (id: number) => {
    // Check the button where I clicked and change its value
    setSquares(squares.map((item, index) => (index === id ? player : item)));
    togglePlayer();
  };

  const renderSquare = (id: number) => {
    return (
      <Button
        key={id}
        className={styles.square}
        variant="outlined"
        onClick={() => setSquareValue(id)}
        disabled={squares[id] !== null}
      >
        <span className={styles.player}>{squares[id]}</span>
      </Button>
    );
  };

  return (
    <div className={styles.grid}>
      {squares.map((_, index) => renderSquare(index))}
    </div>
  );
}
