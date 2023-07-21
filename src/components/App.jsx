import { Routes, Route } from "react-router-dom";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";

function App() {
  return (
    <div>
      <h1>The Movies Saga!</h1>
      <Routes>
        <Route exact path="/" element={<MovieList />} />
        <Route exact path="/details/:id" element={<MovieDetails />} />
        {/* Add Movie page */}
      </Routes>
    </div>
  );
}

export default App;
