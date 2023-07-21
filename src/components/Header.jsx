import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../state/actions";

export default function Header() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch(actions.getMovies());
    dispatch(actions.getGenres());
  }, []);

  return (
    <header className="flex mb-6 justify-between items-center">
      <h1 className="text-4xl">
        <Link to="/">The Movies Saga!</Link>
      </h1>
      <details className="dropdown">
        <summary className="m-1 btn">View Details</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/details/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </details>
    </header>
  );
}
