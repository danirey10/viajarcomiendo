export interface Resultado {
  results:      Result[];
  offset:       number;
  number:       number;
  totalResults: number;
}

export interface Result {
  id:        number;
  title:     string;
  image:     string;
}
