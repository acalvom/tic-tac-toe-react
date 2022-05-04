import { Button } from "@mui/material";
import * as React from "react";
import styles from "../styles/App.module.css";
import { Player } from "../utils/types";

export interface ISquareProps {
  id: number;
  squares: Player[];
  setSquareValue: (id: number) => void;
}

export function Square({ id, squares, setSquareValue }: ISquareProps) {
  return (
    <Button
      className={styles.square}
      variant="outlined"
      onClick={() => setSquareValue(id)}
      sx={{ backgroundColor: squares[id] && squares[id].color }}
      disabled={squares[id] !== null}
    >
      <span className={styles.player}>{squares[id] && squares[id].piece}</span>
    </Button>
  );
}
