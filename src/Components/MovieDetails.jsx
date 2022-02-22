import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
function MovieDetails() {
  const params = useParams();
  console.log(params, "hook");
  const [details, setDetails] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=444e6955561b573982ab44eed9a90a67`
      )
      .then((res) => setDetails(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container my-5">
      <h1
        className="text-primary text-center"
        style={{ fontSize: 48, fontStyle: "italic" }}
      >
        Movie Details Page
      </h1>
      <img
        src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
        className="rounded mx-auto d-block"
        alt="..."
        style={{height:'400px'}}
      />
      <h3
        className="text-primary text-center"
        style={{ fontSize: 30, fontStyle: "italic" }}
      >
        Title :{details.title}
      </h3>
      <h3
        className="text-primary text-center"
        style={{ fontSize: 30, fontStyle: "italic" }}
      >
        Popularity : {details.popularity}
      </h3>
    </div>
  );
}

export default MovieDetails;
