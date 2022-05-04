import { Button } from "@mui/material";
import { useState } from "react";
import styles from "../styles/App.module.css";

export interface IBoardProps {}
enum PIECE {
  X = "X",
  O = "O",
}
enum COLOR {
  X = "#cfdbd5",
  O = "#e8eddf",
}

export interface Player {
  piece: PIECE;
  color: COLOR;
}

export default function Board(props: IBoardProps) {
  const [squares, setSquares] = useState<Player[]>(new Array(9).fill(null));
  const [player, setPlayer] = useState<Player>({
    piece: PIECE.X,
    color: COLOR.X,
  });
  const [isWinner, setIsWinner] = useState<Boolean>(false);

  const togglePlayer = () => {
    setPlayer(
      player.piece === PIECE.X
        ? { piece: PIECE.O, color: COLOR.O }
        : { piece: PIECE.X, color: COLOR.X }
    );
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
        sx={{ backgroundColor: squares[id] && squares[id].color }}
        disabled={squares[id] !== null}
      >
        <span className={styles.player}>
          {squares[id] && squares[id].piece}
        </span>
      </Button>
    );
  };

  return (
    <div className={styles.grid}>
      {squares.map((_, index) => renderSquare(index))}
    </div>
  );
}
