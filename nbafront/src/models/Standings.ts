export interface Data {
    standings: Standings[];
}

export interface Standings {
    teamID: number;
    win: number;
    loss: number;
    gamesBehind: number;
    seasonYear: number;
    confrence: Confrence;
    division: Division;
}

export interface Confrence {
    name: string;
    rank: number;
    win: number;
    loss: number;
}

export interface Division {
    name: string;
    rank: number;
    win: number;
    loss: number;
    GamesBehind: number;
}