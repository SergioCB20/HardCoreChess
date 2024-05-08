import { IChessBoard, GamePiece, IPiece,SquareState} from "../types";
import { King,Queen,Rock,Horse,Bishop,Pawn} from "../GamePieces/implemetations";

// En un futuro, si es necesario reemplazar por factory
export class BoardC implements IChessBoard {
    private board: Array<Array<IPiece|null>>;

    constructor() {
        this.board = []; // Inicializa el tablero en el constructor
    }

    public createBoard(): Array<Array<IPiece|null>> {
        // Inicializa el tablero con filas y columnas vacías
        for (let i = 0; i < 8; i++) {
            let column: Array<IPiece|null> = [];
            for (let j = 0; j < 8; j++) {
                column.push(null);
            }
            this.board.push(column);
        }
        this.fillBoard();
        return this.board; 
    }
    private fillBoard():void{
        // Adding pawns
        for (let i = 0; i < 8; i++){
            let newWhitePawn = new Pawn().createWhitePiece();
            let newBlackPawn = new Pawn().createBlackPiece();
            this.board[1][i] = newBlackPawn;
            this.board[6][i] = newWhitePawn;
        }
        // Adding pieces
        for(let i=0;i<=7;i = i+7){
            let newWhiteRock = new Rock().createWhitePiece();
            let newBlackRock = new Rock().createBlackPiece();
            this.board[7][i] = newWhiteRock;
            this.board[0][i] = newBlackRock;
        }
        for(let i=1;i<=6;i = i+5){
            let newWhiteHorse = new Horse().createWhitePiece();
            let newBlackHorse = new Horse().createBlackPiece();
            this.board[7][i] = newWhiteHorse;
            this.board[0][i] = newBlackHorse;
        }
        for(let i=2;i<=5;i = i+3){
            let newWhiteBishop = new Bishop().createWhitePiece();
            let newBlackBishop = new Bishop().createBlackPiece();
            this.board[7][i] = newWhiteBishop;
            this.board[0][i] = newBlackBishop;
        }
        let newWhiteQueen = new Queen().createWhitePiece();
        let newBlackQueen = new Queen().createBlackPiece();
        this.board[7][4] = newWhiteQueen;
        this.board[0][4] = newBlackQueen;
        let newWhiteKing = new King().createWhitePiece();
        let newBlackKing = new King().createBlackPiece();
        this.board[7][3] = newWhiteKing;
        this.board[0][3] = newBlackKing;
    }
}