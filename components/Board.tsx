import { Button, Typography } from "@mui/material";
import { useState } from "react";
import styles from "../styles/App.module.css";
import {
  Player,
  PLAYER_O,
  PLAYER_X,
  WINNING_COMBINATIONS,
} from "../utils/types";
import { Square } from "./Square";

export default function Board() {
  const [squares, setSquares] = useState<Player[]>(new Array(9).fill(null));
  const [player, setPlayer] = useState<Player>(PLAYER_X);

  const restartGame = () => {
    setSquares(new Array(9).fill(null));
  };

  const togglePlayer = () => {
    setPlayer(player === PLAYER_X ? PLAYER_O : PLAYER_X);
  };

  const setSquareValue = (id: number) => {
    // Check the button where I clicked and change its value
    setSquares(squares.map((item, index) => (index === id ? player : item)));
    togglePlayer();
  };

  const renderSquare = (id: number) => {
    return (
      <Square
        key={id}
        id={id}
        squares={squares}
        setSquareValue={setSquareValue}
      />
    );
  };

  const renderWinner = () => {
    return (
      <Typography variant="h5" sx={{ color: player.color }}>
        WINNER: PLAYER {getWinner()}
      </Typography>
    );
  };

  function getWinner() {
    for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
      const [a, b, c] = WINNING_COMBINATIONS[i];
      if (
        squares[a] &&
        squares[b] &&
        squares[c] &&
        squares[a].piece === squares[b].piece &&
        squares[a].piece === squares[c].piece
      ) {
        return squares[a].piece;
      } else if (squares[a] && squares[b] && squares[c]) return null;
    }
    return null;
  }

  return (
    <div className={styles.grid}>
      {getWinner()
        ? renderWinner()
        : squares.map((_, index) => renderSquare(index))}
      <Button
        className={styles.restart}
        variant="contained"
        onClick={restartGame}
      >
        RESTART GAME
      </Button>
    </div>
  );
}
