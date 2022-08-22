import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";

import { Link, useParams } from "react-router-dom";
import axios from "axios";
const MovieInfo = () => {
  const {id} = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {

    const fetchMovie = async () => {
      setLoading(true)
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=59e995b1&i=${id}`
        );
        
      setMovie(response.data);
      setLoading(false)
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
      
        {loading? (
            <div className="movie__information">
                <div className="img--sekelton"></div>
                  <div className="movie__information-desc">
                    <div className="box1"></div>
                    <div className="box2"></div>
                    <div className="box3"></div>
                    <div className="box4"></div>
                    <div className="box5"></div>
                    <div className="box6"></div>
                    <div className="btn--skeleton"></div>
                  </div>
              </div>

        ): (

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
                <p>Language : {movie.Language}</p>

                <Button variant="contained" className="btn">
                  Choose Movie
                </Button>
            </div>
          </div>
           
        )}
        
            
        
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
