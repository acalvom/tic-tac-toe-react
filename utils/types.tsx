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
