import ReyBlanco from "../../assets/Images/Piezas/Blancas/Rey.svg";
import ReyNegro from "../../assets/Images/Piezas/Negras/Rey.png"
import ReinaBlanca from "../../assets/Images/Piezas/Blancas/Reina.png";
import ReinaNegra from "../../assets/Images/Piezas/Negras/Reina.png";
import PeonBlanco from "../../assets/Images/Piezas/Blancas/Peón.svg";
import PeonNegro from "../../assets/Images/Piezas/Negras/Peon.svg";
import TorreBlanco from "../../assets/Images/Piezas/Blancas/Torre.svg";
import TorreNegra from "../../assets/Images/Piezas/Negras/Torre.svg";
import AlfilBlanco from "../../assets/Images/Piezas/Blancas/Alfil.svg";
import AlfilNegro from "../../assets/Images/Piezas/Negras/Alfil.svg";
import CaballoBlanco from "../../assets/Images/Piezas/Blancas/Caballo.svg";
import CaballoNegro from "../../assets/Images/Piezas/Negras/Caballo.svg";

import { PieceTypes } from "../types";
import { King,Queen,Pawn,Horse,Bishop,Rock } from "./implemetations";

export interface IPieceFactory {
    createKing(col:number,row:number): King
    createQueen(col:number,row:number): Queen
    createRock(col:number,row:number): Rock
    createHorse(col:number,row:number): Horse
    createBishop(col:number,row:number): Bishop
    createPawn(col:number,row:number): Pawn
}


export class WhitePiecesFactory implements IPieceFactory {
    public createKing(col:number,row:number): King {
        return new King(col,row,ReyBlanco,PieceTypes.White);
    }
    public createQueen(col:number,row:number): Queen {
        return new Queen(col,row,ReinaBlanca,PieceTypes.White);
    }
    public createRock(col:number,row:number): Rock {
        return new Rock(col,row,TorreBlanco,PieceTypes.White);
    }
    public createHorse(col:number,row:number): Horse {
        return new Horse(col,row,CaballoBlanco,PieceTypes.White);
    }
    public createBishop(col:number,row:number): Bishop {
        return new Bishop(col,row,AlfilBlanco,PieceTypes.White);
    }
    public createPawn(col:number,row:number): Pawn {
        return new Pawn(col,row,PeonBlanco,PieceTypes.White);
    }
}

export class BlackPiecesFactory implements IPieceFactory {
    public createKing(col:number,row:number): King {
        return new King(col,row,ReyNegro,PieceTypes.Black);
    }
    public createQueen(col:number,row:number): Queen {
        return new Queen(col,row,ReinaNegra,PieceTypes.Black);
    }
    public createRock(col:number,row:number): Rock {
        return new Rock(col,row,TorreNegra,PieceTypes.Black);
    }
    public createHorse(col:number,row:number): Horse {
        return new Horse(col,row,CaballoNegro,PieceTypes.Black);
    }
    public createBishop(col:number,row:number): Bishop {
        return new Bishop(col,row,AlfilNegro,PieceTypes.Black);
    }
    public createPawn(col:number,row:number): Pawn {
        return new Pawn(col,row,PeonNegro,PieceTypes.Black);
    }
}