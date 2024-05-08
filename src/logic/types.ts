
// Enumeración de estados de las casillas con respecto a las piezas
export enum SquareState {
    Empty = 0,
    Posible = 1,
    NoPosible = 2,
}
/*---------------- BOARD ----------------- */

//Interfaz de chessBoard
export interface IChessBoard{
    createBoard(): Array<Array<Piece|number>>
    updateBoard(): void
} 

/*---------------------------------------- */

/*---------------- GAME PIECES ----------------- */

//Interfaz de GamePiece

export enum PieceTypes{
    White = 0,
    Black = 1
}

export interface Piece {
    id:number,
    name:string,
    symbol:string,
    type:number,
    column:number,
    row:number,
    move():void
}

//usar para piezas normales y evolucionadas

export abstract class BasePiece implements Piece{
    private static currentId = 1;
    protected static pieces: BasePiece[] = [];
    id:number;
    name:string;
    symbol:string;
    type:number;
    column:number;
    row:number;
    
    constructor(col:number,row:number,name:string,symbol:string,type:number) {
      this.id = BasePiece.currentId++;
      BasePiece.pieces.push(this);
      this.column = col;
      this.row = row;
      this.name = name
      this.symbol = symbol
      this.type = type;
    }
    
    abstract move():void
    static findById(id: number): BasePiece | undefined {
      return this.pieces.find((piece) => piece.id === id);
    }
  }

/*---------------------------------------------- */
