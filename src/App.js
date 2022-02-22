import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import MovieDetails from "./Components/MovieDetails";
import FavMovies from "./Components/FavMovies";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/moviedetails/:id" element={<MovieDetails />} />
        <Route path="/favourite" element={<FavMovies />} />
      </Routes>
    </Router>
  );
}

export default App;
