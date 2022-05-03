import { useEffect, useState } from "react";
import styles from "../styles/App.module.css";
import { Square } from "./Square";

export interface IBoardProps {}

export default function Board(props: IBoardProps) {
  const [squares, setSquares] = useState(new Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [isWinner, setIsWinner] = useState(false);

  const renderSquare = (id: number) => {
    return <Square id={id} />;
  };

  useEffect(() => {
    //console.log(squares);
  }, []);

  return (
    <div className={styles.grid}>
      {squares.map((_, index) => renderSquare(index))}
    </div>
  );
}
