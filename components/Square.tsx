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
  const squareTheme = {
    color: "#333533",
    borderColor: "#333533",
    borderRadius: "0",
    width: "33%",
    paddingBottom: "33%",
    marginBottom: "0.5%",
    position: "relative",
    backgroundColor: squares[id] && squares[id].color,
    ":hover": {
      backgroundColor: "#f5cb5c",
      border: "1px solid #f5cb5c",
    },
    ":disabled": {
      color: "#333533",
    },
  };

  return (
    <Button
      sx={squareTheme}
      variant="outlined"
      onClick={() => setSquareValue(id)}
      disabled={squares[id] !== null}
    >
      <span className={styles.player}>{squares[id] && squares[id].piece}</span>
    </Button>
  );
}
