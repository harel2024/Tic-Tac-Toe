export interface Game {
    gameId: number;
    move:Move;
    status:Status;
    result:Winner;
}

export interface Move {
    player:player;
    position:[number,number];
}

export enum player {
    X = "X",
    O = "O"
}

export enum Status {
    IN_PROGRESS = "IN_PROGRESS",
    DRAW = "DRAW",
    X_WON = "X_WON",
    O_WON = "O_WON"
}

export enum Winner {
    X = "X",
    O = "O"
}

