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


import { IPiece,PieceTypes } from "../types";
import { GamePiece } from "../types";

export class King extends GamePiece {
    createWhitePiece(): IPiece {
      return {
        id: this.id,
        name: "King",
        symbol: ReyBlanco,
        type: PieceTypes.White,
      };
    }
    createBlackPiece(): IPiece {
        return{
            id: this.id,
            name: "King",
            symbol: ReyNegro,
            type: PieceTypes.Black,
        }
    }
}

export class Queen extends GamePiece {
    createWhitePiece(): IPiece {
        return {
          id: this.id,
          name: "Queen",
          symbol: ReinaBlanca,
          type: PieceTypes.White,
        };
    }
    createBlackPiece(): IPiece {
        return{
            id: this.id,
            name: "Queen",
            symbol: ReinaNegra,
            type: PieceTypes.Black,
        }
    }
}

export class Pawn extends GamePiece {
    createWhitePiece(): IPiece {
      return {
        id: this.id,
        name: "Pawn",
        symbol: PeonBlanco,
        type: PieceTypes.White,
      };
    }
    createBlackPiece(): IPiece {
        return{
            id: this.id,
            name: "Pawn",
            symbol: PeonNegro,
            type: PieceTypes.Black,
        }
    }
}

export class Rock extends GamePiece {
    createWhitePiece(): IPiece {
        return {
          id: this.id,
          name: "Rock",
          symbol: TorreBlanco,
          type: PieceTypes.White,
        };
    }
    createBlackPiece(): IPiece {
        return{
            id: this.id,
            name: "Rock",
            symbol: TorreNegra,
            type: PieceTypes.Black,
        }
    }
}

export class Bishop extends GamePiece {
    createWhitePiece(): IPiece {
        return {
          id: this.id,
          name: "Bishop",
          symbol: AlfilBlanco,
          type: PieceTypes.White,
        };
    }
    createBlackPiece(): IPiece {
        return{
            id: this.id,
            name: "Bishop",
            symbol: AlfilNegro,
            type: PieceTypes.Black,
        }
    }
}

export class Horse extends GamePiece {
    createWhitePiece(): IPiece {
        return {
          id: this.id,
          name: "Horse",
          symbol: CaballoBlanco,
          type: PieceTypes.White,
        };
    }
    createBlackPiece(): IPiece {
        return{
            id: this.id,
            name: "Horse",
            symbol: CaballoNegro,
            type: PieceTypes.Black,
        }
    }
}