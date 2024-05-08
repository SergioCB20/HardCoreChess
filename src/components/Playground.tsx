import { useState } from "react";
import pg from "../logic/main.ts";
import { BasePiece, Piece, SquareState } from "../logic/types.ts";

export default function Playground() {
  const [playground, setPlayground] = useState(pg);

  const showValidatedMovements = (piece: Piece | null) => {
    if (piece === null) return;
    let col = piece.column;
    let row = piece.row;
    // Crear una nueva copia de playground
    const newPg = playground.map((column, idxC) =>
      column.map((square, idxS) =>
        idxC === col+1 && idxS === row+1 ? SquareState.Posible : square
      )
    );

    setPlayground(newPg);
  };

  return (
    <div className="grid grid-cols-8 grid-rows-8 w-full h-full border-2 border-black z-10">
      {playground.map((column, idxC) =>
        column.map((square, idxS) => (
          <div
            className={`flex justify-center items-center ${
              (idxC + 1) % 2
                ? (idxS + 1) % 2
                  ? "bg-red-700"
                  : "bg-white"
                : (idxS + 1) % 2
                ? "bg-white"
                : "bg-red-700"
            }`}
            key={idxC + idxS}
          >
            {square instanceof BasePiece ? (
              <img
                src={square.symbol}
                alt={`${square.name} ${square.id}`}
                className="max-w-[80%] max-h-[80%] hover:cursor-pointer"
                onClick={() => showValidatedMovements(square)}
              />
            ) : null}
            {square === SquareState.Posible ? (
              <div className="w-[60%] h-[60%] rounded-full border-2 border-black bg-yellow-300">

              </div>
            ) : null}
          </div>
        ))
      )}
    </div>
  );
}
