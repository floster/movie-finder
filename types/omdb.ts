export interface MovieResponse {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: "True" | "False";
}

export type SearchResponse = {
  Search: SearchData[];
  totalResults: string;
  Response: "True" | "False";
};

export type SearchData = Pick<
  MovieResponse,
  "Title" | "Year" | "imdbID" | "Type" | "Poster"
>;

interface Rating {
  Source: string;
  Value: string;
}

export interface Movie {
  title: string;
  year: string;
  director: string;
  poster: string;
  response: boolean;
}

export interface SearchResult {
  title: string;
  year: string;
  imdbID: string;
  poster: string;
}

export interface Search {
  results: SearchResult[];
  qty: string;
  response: boolean;
}
