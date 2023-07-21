import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import actions from "../state/actions";

function MovieList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        {movies.map((movie) => {
          return (
            <div
              key={movie.id}
              onClick={() => navigate(`/details/${movie.id}`)}
            >
              <h3>{movie.title}</h3>
              <img src={movie.poster} alt={movie.title} />
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
