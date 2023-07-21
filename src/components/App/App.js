import { Routes, Route } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Routes>
        <Route exact path="/" element={<MovieList />} />
        {/* Details page */}
        {/* Add Movie page */}
      </Routes>
    </div>
  );
}

export default App;
