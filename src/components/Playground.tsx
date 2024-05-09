import { useState } from "react";
import pg from "../logic/main.ts";
import { BasePiece, Piece, SquareState } from "../logic/types.ts";

export default function Playground() {
  const [playground, setPlayground] = useState(pg);

  const showValidatedMovements = (piece: Piece | null) => {
    if (piece === null) return;
    console.log(piece)
    let col = piece.getColumn();
    let row = piece.getRow();
    let possibleMovements: Array<Array<number>> = piece.getPossiblemoves().map(move => [col + move.y, row + move.x]);
    console.log(possibleMovements)
    // Crear una nueva copia de playground
    const newPg = pg.map((column, idxC) =>
        column.map((square, idxS) => {
            const coordinate = [idxC, idxS];
            const isValidMove = possibleMovements.some(move => move[0] === coordinate[0] && move[1] === coordinate[1]);
            // Actualizar el estado de la casilla en la nueva copia de playground
            return isValidMove && square === SquareState.Empty ? SquareState.Posible : square;
        })
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
                src={square.getSymbol()}
                alt={`${square.getName()} ${square.getId()}`}
                className="max-w-[80%] max-h-[80%] hover:cursor-pointer"
                onClick={() => {
                    showValidatedMovements(square);
                }}
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
