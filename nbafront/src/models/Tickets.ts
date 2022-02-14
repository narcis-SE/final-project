export interface Data {
    events: Events[];
}

export interface Events {
    name: string;
    url: string;
    sales: Sales;
    classifications: Classifications;
    dates: Dates;
}

export interface Dates {
    start: {
        localDate: string;
    }
}

export interface Sales {
    public: {
        endDateTime: string;
    }
}

export interface Classifications {
    subGenre: {
        id: string;
    }
}