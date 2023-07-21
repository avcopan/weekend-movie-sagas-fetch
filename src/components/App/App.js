import { Routes, Route } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import MovieDetails from "../MovieDetails/MovieDetails";

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Routes>
        <Route exact path="/" element={<MovieList />} />
        <Route exact path="/details/:id" element={<MovieDetails />} />
        {/* Details page */}
        {/* Add Movie page */}
      </Routes>
    </div>
  );
}

export default App;
