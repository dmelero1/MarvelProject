export interface Thumbnail {
    path: string;
    extension: string;
}
export interface Comic {
    id: number;
    title: string;
    description: string;
    thumbnail: {
      path: string;
      extension: string;
    };
  }
  
export interface ComicSummary {
    resourceURI: string;
    name: string;
}

export interface Comics {
    available: number;
    collectionURI: string;
    items: ComicSummary[];
    returned: number;
}

export interface SeriesSummary {
    resourceURI: string;
    name: string;
}

export interface Series {
    available: number;
    collectionURI: string;
    items: SeriesSummary[];
    returned: number;
}

export interface Stories {
    available: number;
    collectionURI: string;
    items: any[];
    returned: number;
}

export interface Events {
    available: number;
    collectionURI: string;
    items: any[];
    returned: number;
}

export interface Character {
    id: number;
    name: string;
    description: string;
    modified: string;
    resourceURI: string;
    thumbnail: Thumbnail;
    comics: Comics;
    series: Series;
    stories: Stories;
    events: Events;
}

interface DateItem {
    type: string;
    date: string;
  }
  
  interface Price {
    type: string;
    price: number;
  }
  
  export interface Comic {
    id: number;
    digitalId: number;
    title: string;
    issueNumber: number;
    variantDescription: string;
    description: string;
    modified: string;
    isbn: string;
    upc: string;
    diamondCode: string;
    ean: string;
    issn: string;
    format: string;
    pageCount: number;
    resourceURI: string;
    thumbnail: Thumbnail;
    series: Series;
    dates: DateItem[];
    prices: Price[];
  }

export interface ApiResponse {
    code: number;
    status: string;
    data: {
        offset: number;
        limit: number;
        total: number;
        count: number;
        results: Character[];
    };
}

