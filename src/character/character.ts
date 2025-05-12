export interface Root {
    items: Characters[];
    meta:  Meta;
    links: Links;
}

export interface Characters {
    id:          number;
    name:        string;
    ki:          string;
    maxKi:       string;
    race:        string;
    gender:      string;
    description: string;
    image:       string;
    affiliation: string;
    deletedAt:   null;
}

export interface Links {
    first:    string;
    previous: string;
    next:     string;
    last:     string;
}

export interface Meta {
    totalItems:   number;
    itemCount:    number;
    itemsPerPage: number;
    totalPages:   number;
    currentPage:  number;
}