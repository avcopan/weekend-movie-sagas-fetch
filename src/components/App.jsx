import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<MovieList />} />
        <Route exact path="/details/:id" element={<MovieDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;
