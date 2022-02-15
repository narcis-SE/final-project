export interface Data {
    data: Scores[];
}

export interface Scores {
    id: number;
    home_team: Team;
    home_team_score: number;
    visitor_team: Team;
    visitor_team_score: number;
}

export interface Team {
    abbreviation: string;
}