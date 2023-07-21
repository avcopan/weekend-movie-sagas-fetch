import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actions from "../state/actions";

export default function MovieDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
        <div className="card w-full bg-base-100 shadow-xl mb-6">
          <figure>
            <img src={`/${movie.poster}`} alt={movie.title} />
          </figure>
          <div className="card-body p-4 flex flex-col justify-center items-center">
            <h2 className="card-title">{movie.title}</h2>
            <p className="text-justify">{movie.description}</p>
            <ul className="flex gap-8">
              {movie_genres.map((genre) => (
                <li key={genre.id} className="font-medium text-accent">
                  {genre.name}
                </li>
              ))}
            </ul>
            <div className="card-actions self-end">
              <button className="btn btn-primary" onClick={() => navigate("/")}>
                Back to List
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
