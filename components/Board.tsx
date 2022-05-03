import * as React from "react";
import styles from "../styles/App.module.css";
import { Square } from "./Square";

export interface IBoardProps {}

export default function Board(props: IBoardProps) {
  return (
    <div className={styles.grid}>
      This is the board
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
}
