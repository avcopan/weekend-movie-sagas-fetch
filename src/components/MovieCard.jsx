import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();

  return (
    <div
      className="card w-48 bg-base-100 shadow-xl mb-6"
      onClick={() => navigate(`/details/${movie.id}`)}
    >
      <figure>
        <img src={movie.poster} alt={movie.title} />
      </figure>
      <div className="card-body p-4 flex flex-col justify-center items-center">
        <h2 className="card-title">{movie.title}</h2>
      </div>
    </div>
  );
}
