export interface Standings{
    data: BetData[]
}

export interface BetData{
    home_team: string,
    commence_time: string,
    sites: Sites[],
    teams: Teams[]
}

export interface Sites{
    site_nice: string
    odds: Odds
}

export interface Odds{
    spreads: Spreads
}

export interface Spreads{
    odds: Odds[]
    points: Points[]
}
export interface Odds{
    team1: number
    team2: number
}

export interface Points{
    team1: string,
    team2: string
}


export interface Teams{
    team1: string,
    team2: string
}