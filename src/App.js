import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./Assignment1/MovieDetails";
import Movies from "./Assignment1/Movies";

function App() {
  const routes = (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie-details/:id" element={<MovieDetails />} />
        {/* <Route path="1" element={<MovieDetails />} /> */}
      </Routes>
    </BrowserRouter>
  );

  return <>{routes}</>;
}

export default App;
