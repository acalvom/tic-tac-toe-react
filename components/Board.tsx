import { useState } from "react";
import styles from "../styles/App.module.css";
import { Player, PLAYER_O, PLAYER_X } from "../utils/types";
import { Square } from "./Square";

export default function Board() {
  const [squares, setSquares] = useState<Player[]>(new Array(9).fill(null));
  const [player, setPlayer] = useState<Player>(PLAYER_X);
  const [isWinner, setIsWinner] = useState<Boolean>(false);

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

  return (
    <div className={styles.grid}>
      {squares.map((_, index) => renderSquare(index))}
    </div>
  );
}
