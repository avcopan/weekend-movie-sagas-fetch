export default function MovieCard({ movie }) {
  return (
    <div className="card w-48 bg-base-100 shadow-xl mb-6">
      <figure>
        <img src={movie.poster} alt={movie.title} />
      </figure>
      <div className="card-body p-4 flex flex-col justify-center items-center">
        <h2 className="card-title">{movie.title}</h2>
      </div>
    </div>
  );
}
