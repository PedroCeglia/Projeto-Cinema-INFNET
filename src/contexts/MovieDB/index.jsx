import { createContext, useContext } from "react";
import { getFilmeList, getFilmeDescription } from "../../api/MovieDB";

const MovieDBContext = createContext();

export default function MovieDBProvider({ children }) {
  return (
    <MovieDBContext.Provider value={{ getFilmeList, getFilmeDescription }}>
      {children}
    </MovieDBContext.Provider>
  );
}

export const useMovieDBContext = () => useContext(MovieDBContext);
