import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";

import { Link, useParams } from "react-router-dom";
import axios from "axios";
const MovieInfo = () => {
  const {id} = useParams();
  console.log(id)
  const [movie, setMovie] = useState({});
  // console.log(id);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=59e995b1&i=${id}`
        );
        
      setMovie(response.data);
    };
    fetchMovie();
  }, []);

  console.log(movie);

  return (
    <div className="Movie__info">
      <div className="container">
        <div className="row">
          <div className="top__info">
            {/* <Link to='MoviePage'> */}
            <Link to="/MoviePage">
              <ArrowBackIcon className="arrow" />
            </Link>
            <h3>Movies</h3>

            {/* </Link> */}
          </div>

          <div className="movie__information">
            <img src={movie.Poster} alt="" />
            <div className="movie__information-desc" key={movie.imdbID}>
              <h1>{movie.Title}</h1>
              <h2>Summary</h2>
              <p>Plot : {movie.Plot}</p>

              <p>Actors : {movie.Actors}</p>
              <p>Rated : {movie.Rated}</p>
              <p>RunTime : {movie.Runtime}</p>
              <p>Writers : {movie.Writer}</p>
              <p>Release Date : {movie.Released}</p>
              <p>Genre : {movie.Genre}</p>
              <p>Lnaguge : {movie.Language}</p>

              <Button variant="contained" className="btn">
                Choose Movie
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
