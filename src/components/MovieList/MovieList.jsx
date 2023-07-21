import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../state/actions";
import "./MovieList.css";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);
  console.log(movies);

  useEffect(() => {
    dispatch(actions.getMovies());
    console.log(movies);
  }, []);

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map((movie) => {
          return (
            <div key={movie.id}>
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
