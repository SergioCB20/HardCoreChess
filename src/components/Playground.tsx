import React from "react";
import playground from "../logic/main.ts";
import PeonBlancoImg from "../assets/Images/Piezas/Blancas/Peón.svg";
import ReyBlancoImg from "../assets/Images/Piezas/Blancas/Rey.svg";

export default function Playground() {
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
          >
            {square !== null? (
                <img src={square.symbol} alt={`${square.name} ${square.id}`} className="max-w-[80%] max-h-[80%]"/>
            ):null}
          </div>
        ))
      )}
    </div>
  );
}
