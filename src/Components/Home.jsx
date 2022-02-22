import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AddFavourite } from "../Store/Actions/AddFavourite";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
function Home() {
  const [movies, setMovie] = useState([]);
  const favMovies = useSelector((state) => {
    return state.favouriteArr;
  });
  const dispatch = useDispatch();

  console.log(favMovies);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=444e6955561b573982ab44eed9a90a67"
      )
      .then((res) => setMovie(res.data.results))
      .catch((err) => console.log(err));
  }, []);
  const handleFav = (id) => {
    if (favMovies.includes(id)) {
      const index = favMovies.indexOf(id);
      console.log(index);
      favMovies.splice(index, 1);
      dispatch(AddFavourite([...favMovies]));
    } else {
      dispatch(AddFavourite([id, ...favMovies]));
    }
  };
  return (
    <div>
      <h2
        className="text-primary text-center"
        style={{ fontSize: 44, fontStyle: "italic" }}
      >
        New Releases
      </h2>
      <div className="container">
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
          {movies.map((movie) => {
            return (
              <div className="col">
                <div className="card text-light h-100">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    className="card-img-top"
                    alt="..."
                    style={{ height: "350px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h4 className="card-title text-primary">{movie.title}</h4>
                    <p className="card-text text-primary">{movie.popularity}</p>
                  </div>
                  <div className="card-footer">
                    <Link
                      to={`/moviedetails/${movie.id}`}
                      className="btn btn-danger"
                    >
                      Show Details Movie
                    </Link>
                    {favMovies.includes(movie.id) ? (
                      <AiFillStar
                        className="text-warning float-end fs-3"
                        onClick={() => {
                          handleFav(movie.id);
                        }}
                      />
                    ) : (
                      <AiOutlineStar
                        className="text-warning float-end fs-3"
                        onClick={() => {
                          handleFav(movie.id);
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
