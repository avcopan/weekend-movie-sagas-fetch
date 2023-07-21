import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../state/actions";
import MovieCard from "./MovieCard";

function MovieList() {
  const dispatch = useDispatch();

  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    if (!movies.length) {
      dispatch(actions.getMovies());
      dispatch(actions.getGenres());
    }
  }, []);

  return (
    <main>
      <section>
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </section>
    </main>
  );
}

export default MovieList;
