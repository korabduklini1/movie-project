import { createContext, useContext } from "react";

const MovieContext = createContext({});

export const useMovieContext = () => {
  return useContext(MovieContext);
};

export default MovieContext;
