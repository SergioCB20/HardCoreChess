
// Enumeración de estados de las casillas con respecto a las piezas
export enum SquareState {
    Empty = 0,
    Pawn = 1,
    Rook = 2,
    Horse = 3,
    Bishop = 4,
    Queen = 5,
    King = 6
}

/*---------------- BOARD ----------------- */

//Interfaz de chessBoard
export interface IChessBoard{
    createBoard(): Array<Array<IPiece|null>>
} 

/*---------------------------------------- */

/*---------------- GAME PIECES ----------------- */

//Interfaz de GamePiece

export enum PieceTypes{
    White = 0,
    Black = 1
}

export interface IPiece {
    id:number,
    name:string,
    symbol:string,
    type:number
}


export abstract class GamePiece {
    private static currentId = 1;
    protected static pieces: GamePiece[] = [];
    public id = 0;
    
    constructor() {
      this.id = GamePiece.currentId++;
      GamePiece.pieces.push(this);
    }
    
    abstract createBlackPiece(): IPiece;
    abstract createWhitePiece(): IPiece;
  
    static findById(id: number): GamePiece | undefined {
      return this.pieces.find((piece) => piece.id === id);
    }
  }

/*---------------------------------------------- */
