
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
    getPossiblemoves():Array<PieceMove>,
    getSymbol():string,
    getType():number,
    getColumn():number,
    getRow():number,
    getId():number,
    getName():string
}

export type PieceMove ={
    x:number,
    y:number
}

//usar para piezas normales y evolucionadas

export abstract class BasePiece implements Piece{
    private static currentId = 1;
    protected static pieces: BasePiece[] = [];
    protected id:number;
    protected name:string;
    protected symbol:string;
    protected type:number;
    protected column:number;
    protected row:number;
    
    constructor(col:number,row:number,name:string,symbol:string,type:number) {
      this.id = BasePiece.currentId++;
      BasePiece.pieces.push(this);
      this.column = col;
      this.row = row;
      this.name = name
      this.symbol = symbol
      this.type = type;
    }
    
    abstract getPossiblemoves():Array<PieceMove>;
    public getSymbol():string {
        return this.symbol;
    }
    public getType():number {
        return this.type;
    }
    public getColumn():number {
        return this.column;
    }
    public getRow():number {
        return this.row;
    }
    public getId():number {
        return this.id;
    }
    public getName():string {
        return this.name;
    }
    static findById(id: number): BasePiece | undefined {
      return this.pieces.find((piece) => piece.id === id);
    }
  }

/*---------------------------------------------- */
