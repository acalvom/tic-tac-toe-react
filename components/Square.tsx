import { Button } from "@mui/material";
import * as React from "react";
import styles from "../styles/App.module.css";

export interface ISquareProps {
  id: number;
}

export function Square({ id }: ISquareProps) {
  return (
    <Button key={id} className={styles.square} variant="outlined" size="large">
      <span className={styles.player}>{id}</span>
    </Button>
  );
}
