import { useEffect, useState } from "react";
import styles from "../styles/App.module.css";
import { Square } from "./Square";

export interface IBoardProps {}

export default function Board(props: IBoardProps) {
  const [squares, setSquares] = useState(new Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [isWinner, setIsWinner] = useState(false);

  const renderSquare = (id: number) => {
    console.log(id);
    return <Square />;
  };

  useEffect(() => {
    //console.log(squares);
  }, []);

  return (
    <div className={styles.grid}>
      {renderSquare(0)}
      {renderSquare(1)}
      {renderSquare(2)}
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
    </div>
  );
}
