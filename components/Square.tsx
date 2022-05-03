import * as React from "react";
import styles from "../styles/App.module.css";

export interface ISquareProps {}

export function Square(props: ISquareProps) {
  return <button className={styles.square}>Button</button>;
}
