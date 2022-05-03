import { Button } from "@mui/material";
import * as React from "react";
import styles from "../styles/App.module.css";

export interface ISquareProps {}

export function Square(props: ISquareProps) {
  return (
    <Button className={styles.square} variant="outlined" size="large">
      <span className={styles.player}>X</span>
    </Button>
  );
}
