import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface MoviesContextProps {
  children: ReactNode
}
interface MoviesContextData {
  genres:GenreResponseProps[]
  selectedGenreId: number
  handleClickButton: (id: number) => void;
  movies: MovieProps[]
  selectedGenre:GenreResponseProps
}

export const MoviesContext = createContext<MoviesContextData>({} as MoviesContextData) 

export function MoviesProvider(props: MoviesContextProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  
  return (
    <MoviesContext.Provider value={{
      genres,
      selectedGenreId,
      handleClickButton,
      movies,
      selectedGenre
    }}>
      {props.children}
    </MoviesContext.Provider>
  )
} 

export function useMovies() {
  const context = useContext(MoviesContext)
  return context
}