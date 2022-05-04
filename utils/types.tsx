export enum PIECE {
  X = "X",
  O = "O",
}
export enum COLOR {
  X = "#cfdbd5",
  O = "#e8eddf",
}
export interface Player {
  piece: PIECE;
  color: COLOR;
}

export const PLAYER_X = { piece: PIECE.X, color: COLOR.X };
export const PLAYER_O = { piece: PIECE.O, color: COLOR.O };

export const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
