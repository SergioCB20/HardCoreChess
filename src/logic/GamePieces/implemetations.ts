import { BasePiece, PieceTypes,PieceMove } from "../types";

export class King extends BasePiece {
  constructor(col: number, row: number, symbol: string, type: number) {
    super(col, row, "King", symbol, type);
  }
  public getPossiblemoves(): Array<PieceMove> {
    let possibleMoves: Array<PieceMove> = [];
    let multiple = 0;
    if(this.type === PieceTypes.White)
        multiple = -1;
    if(this.type === PieceTypes.Black)
        multiple = 1;
    possibleMoves.push({
        x:0,
        y:1 * multiple,
    });
    possibleMoves.push({
        x:0,
        y:-1 * multiple,
    });
    possibleMoves.push({
        x:1 * multiple,
        y:0,
    });
    possibleMoves.push({
        x:-1 * multiple,
        y:0,
    });
    possibleMoves.push({
        x:1 * multiple,
        y:1 * multiple,
    });
    possibleMoves.push({
        x:-1 * multiple,
        y:-1 * multiple,
    });
    possibleMoves.push({
        x:1 * multiple,
        y:-1 * multiple,
    });
    possibleMoves.push({
        x:-1 * multiple,
        y:1 * multiple,
    });
    return possibleMoves;
  }
}

export class Queen extends BasePiece {
  constructor(col: number, row: number, symbol: string, type: number) {
    super(col, row, "Queen", symbol, type);
  }
  public getPossiblemoves(): Array<PieceMove> {
    let possibleMoves: Array<PieceMove> = [];
    let multiple = 0;
    if(this.type === PieceTypes.White)
        multiple = -1;
    if(this.type === PieceTypes.Black)
        multiple = 1;
    possibleMoves.push({
        x:0,
        y:1 * multiple,
    });
    return possibleMoves;
  }
}

export class Pawn extends BasePiece {
  constructor(col: number, row: number, symbol: string, type: number) {
    super(col, row, "Pawn", symbol, type);
  }
  public getPossiblemoves(): Array<PieceMove> {
    let possibleMoves: Array<PieceMove> = [];
    let multiple = 0;
    if(this.type === PieceTypes.White)
        multiple = -1;
    if(this.type === PieceTypes.Black)
        multiple = 1;
    possibleMoves.push({
        x:0,
        y:1 * multiple,
    });
    return possibleMoves;
  }
}

export class Rock extends BasePiece {
  constructor(col: number, row: number, symbol: string, type: number) {
    super(col, row, "Rock", symbol, type);
  }
  public getPossiblemoves(): Array<PieceMove> {
    let possibleMoves: Array<PieceMove> = [];
    let multiple = 0;
    if(this.type === PieceTypes.White)
        multiple = -1;
    if(this.type === PieceTypes.Black)
        multiple = 1;
    possibleMoves.push({
        x:0,
        y:1 * multiple,
    });
    possibleMoves.push({
        x:0,
        y:-1 * multiple,
    });
    possibleMoves.push({
        x:1 * multiple,
        y:0,
    });
    possibleMoves.push({
        x:-1 * multiple,
        y:0,
    });
    possibleMoves.push({
        x:1 * multiple,
        y:1 * multiple,
    });
    possibleMoves.push({
        x:-1 * multiple,
        y:-1 * multiple,
    });
    return possibleMoves;
  }
}

export class Bishop extends BasePiece {
  constructor(col: number, row: number, symbol: string, type: number) {
    super(col, row, "Bishop", symbol, type);
  }
  public getPossiblemoves(): Array<PieceMove>{
    let possibleMoves: Array<PieceMove> = [];
    let multiple = 0;
    if(this.type === PieceTypes.White)
        multiple = -1;
    if(this.type === PieceTypes.Black)
        multiple = 1;
    possibleMoves.push({
        x:0,
        y:1 * multiple,
    });
    possibleMoves.push({
        x:0,
        y:-1 * multiple,
    });
    possibleMoves.push({
        x:1 * multiple,
        y:0,
    });
    possibleMoves.push({
        x:-1 * multiple,
        y:0,
    });
    possibleMoves.push({
        x:1 * multiple,
        y:1 * multiple,
    });
    possibleMoves.push({
        x:-1 * multiple,
        y:-1 * multiple,
    });
    return possibleMoves;
  }
}

export class Horse extends BasePiece {
  constructor(col: number, row: number, symbol: string, type: number) {
    super(col, row, "Horse", symbol, type);
  }
  public getPossiblemoves(): Array<PieceMove> {
    let possibleMoves: Array<PieceMove> = [];
    let multiple = 0;
    if(this.type === PieceTypes.White)
        multiple = -1;
    if(this.type === PieceTypes.Black)
        multiple = 1;
    possibleMoves.push({
        x:0,
        y:1 * multiple,
    });
    possibleMoves.push({
        x:0,
        y:-1 * multiple,
    });
    possibleMoves.push({
        x:1 * multiple,
        y:0,
    });
    possibleMoves.push({
        x:-1 * multiple,
        y:0,
    });
    possibleMoves.push({
        x:1 * multiple,
        y:1 * multiple,
    });
    possibleMoves.push({
        x:-1 * multiple,
        y:-1 * multiple,
    });
    return possibleMoves;
  }
}
