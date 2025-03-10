export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Summary {
  resourceURI: string;
  name: string;
}

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: string;
  resourceURI: string;
  thumbnail: Thumbnail;
  comics: Comic;
  series: Serie;
  stories: Stories;
  events: Events;
}

export interface Serie {
  items: any;
  id: number;
  title: string;
  description: string;
  thumbnail: Thumbnail;
  characters: {
    items: Summary[];
  };
  comics: {
    items: Summary[];
  };
  events: {
    items: EventSummary[];
  };
  stories: {
    items: StorySummary[];
  };
  startYear?: number;
  endYear?: number;
}

export interface SeriesItem {
  resourceURI: string;
  name: string;
}

export interface StorySummary {
  resourceURI: string;
  name: string;
}

export interface EventSummary {
  resourceURI: string;
  name: string;
}

export interface ComicSummary {
  resourceURI: string;
  name: string;
}

export interface SeriesSummary {
  resourceURI: string;
  name: string;
}

export interface DateItem {
  type: string;
  date: string;
}

export interface Comic {
  id: number;
  title: string;
  description: string;
  thumbnail: Thumbnail;
  series: SeriesSummary;
  characters: {
    items: Summary[];
  };
  dates: DateItem[];
}

export interface Events {
  available: number;
  collectionURI: string;
  items: EventSummary[];
  returned: number;
}

export interface Stories {
  available: number;
  collectionURI: string;
  items: StorySummary[];
  returned: number;
}

export interface ApiResponseSeries {
  code: number;
  status: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Serie[];
  };
}

export interface ApiResponseCharacters {
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

export interface ApiResponseComics {
  code: number;
  status: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Comic[];
  };
}