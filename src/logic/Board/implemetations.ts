import { IChessBoard, Piece, SquareState} from "../types";
import { WhitePiecesFactory,BlackPiecesFactory } from "../GamePieces/factory";


// En un futuro, si es necesario reemplazar por factory
export class BoardC implements IChessBoard {
    private board: Array<Array<Piece|number>>;

    constructor() {
        this.board = []; // Inicializa el tablero en el constructor
    }

    public createBoard(): Array<Array<Piece|number>> {
        // Inicializa el tablero con filas y columnas vacías
        for (let i = 0; i < 8; i++) {
            let column: Array<Piece|number> = [];
            for (let j = 0; j < 8; j++) {
                column.push(SquareState.Empty);
            }
            this.board.push(column);
        }
        this.fillBoard();
        return this.board; 
    }
    private fillBoard():void{
        let factoryWhite = new WhitePiecesFactory();
        let factoryBlack = new BlackPiecesFactory();
        for (let i = 0; i < 8; i++) {
            let newWhitePawn = factoryWhite.createPawn(1,i);
            let newBlackPawn = factoryBlack.createPawn(6,i);
            this.board[1][i] = newBlackPawn;
            this.board[6][i] = newWhitePawn;
        }
        // Adding pieces
        for (let i = 0; i <= 7; i = i + 7) {
            let newWhiteRock = factoryWhite.createRock(7,i);
            let newBlackRock = factoryBlack.createRock(0,i);
            this.board[7][i] = newWhiteRock;
            this.board[0][i] = newBlackRock;
        }
        for (let i = 1; i <= 6; i = i + 5) {
            let newWhiteHorse = factoryWhite.createHorse(7,i);
            let newBlackHorse = factoryBlack.createHorse(0,i);
            this.board[7][i] = newWhiteHorse;
            this.board[0][i] = newBlackHorse;
        }
        for (let i = 2; i <= 5; i = i + 3) {
            let newWhiteBishop = factoryWhite.createBishop(7,i);
            let newBlackBishop = factoryBlack.createBishop(0,i);
            this.board[7][i] = newWhiteBishop;
            this.board[0][i] = newBlackBishop;
        }
        let newWhiteQueen = factoryWhite.createQueen(7,4);
        let newBlackQueen = factoryBlack.createQueen(0, 3);
        this.board[7][4] = newWhiteQueen;
        this.board[0][3] = newBlackQueen;
        let newWhiteKing = factoryWhite.createKing(7, 3);
        let newBlackKing = factoryBlack.createKing(0, 4);
        this.board[7][3] = newWhiteKing;
        this.board[0][4] = newBlackKing;
    }
    public updateBoard():void{
        
    }
}