import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../state/actions";

export default function MovieDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);
  const genres = useSelector((store) => store.genres);
  const movie = movies.filter((movie) => movie.id == id)[0];
  const movie_genres = genres.filter((genre) => genre.movie_id == id);

  useEffect(() => {
    if (!movie) {
      dispatch(actions.getMovies());
    }
    if (!movie_genres.length) {
      dispatch(actions.getGenres());
    }
  }, []);

  return (
    <div>
      {movie && (
        <>
          <p>{movie.title}</p>
          <img src={`/${movie.poster}`} alt={movie.title} />
          <p>{movie.description}</p>
          <ul>
            {movie_genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
