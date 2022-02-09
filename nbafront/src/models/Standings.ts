export interface Data {
    response: [];
}

export interface Response{
    another: Standings[]
}

export interface Standings {
    position: number;
    group: Group;
    team: Team;
    games: Games;
}

export interface Group {
    name: string;
}

export interface Team {
    name: string;
}

export interface Games {
    win: Win;
    lose: Lose;
}

export interface Win {
    total: number;
}

export interface Lose {
    total: number;
}