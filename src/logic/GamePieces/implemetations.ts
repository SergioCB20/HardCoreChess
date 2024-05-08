import { BasePiece,PieceTypes } from "../types";

export class King extends BasePiece {
    constructor(col:number,row:number,symbol:string,type:number){
        super(col,row,"King",symbol,type);
    }
    public move(): void {
        
    }
}

export class Queen extends BasePiece {
    constructor(col:number,row:number,symbol:string,type:number){
        super(col,row,"Queen",symbol,type);
    }
    public move(): void {

    }
}

export class Pawn extends BasePiece {
    constructor(col:number,row:number,symbol:string,type:number){
        super(col,row,"Pawn",symbol,type);
    }
    public move(): void {
        
    }
}

export class Rock extends BasePiece {
    constructor(col:number,row:number,symbol:string,type:number){
        super(col,row,"Rock",symbol,type);
    }
    public move(): void {
        
    }
}

export class Bishop extends BasePiece {
    constructor(col:number,row:number,symbol:string,type:number){
        super(col,row,"Bishop",symbol,type);
    }
    public move(): void {
        
    }
}

export class Horse extends BasePiece {
    constructor(col:number,row:number,symbol:string,type:number){
        super(col,row,"Horse",symbol,type);
    }
    public move(): void {
        
    }
}