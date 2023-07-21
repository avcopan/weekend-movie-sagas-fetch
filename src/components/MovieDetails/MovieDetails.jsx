import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Movie Details</h1>
      <p>Movie id: {id}</p>
    </div>
  );
}
