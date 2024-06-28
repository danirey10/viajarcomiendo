export interface User {
  _id:       string;
  name:      string;
  email:     string;
  img:       string;
  isActive:  boolean;
  favorites: number[];
}
