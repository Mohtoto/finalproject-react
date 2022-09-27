import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import fast from '../assets/fast.jpg'
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import MoviePage from "./MoviePage";



const MovieInfo = () => {
  const {id} = useParams();
  const {state} = useLocation()
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [similarMovies, setsimialrMovies] = useState([]);

  



  useEffect(() => {

    const fetchMovie = async () => {
      setLoading(true)
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=59e995b1&i=${id}`
        );

      setMovie(data);
      setLoading(false)
    };
    fetchMovie();
  }, []);


  
  const fetchSimilarMovies = async (name) => {
  
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=59e995b1&s=${name}`
      );

      setsimialrMovies(data.Search);
      
  };

  

  useEffect(() => {
    if (state.title) {
      fetchSimilarMovies(state.title);
    }
  }, []);

  



  return (
    <div className="Movie__info">
      <div className="container">
        <div className="row">
          <div className="top__info">
            <Link to="/MoviePage" state={{query: state.title}}>
              <ArrowBackIcon className="arrow" />
            </Link>
            <h3>Movies</h3>

            
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

              <img className="movie__info-img" src={movie.Poster} alt="" />
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


                <Button  onclick={()=> (alert ("This is an alert dialog box"))} variant="contained" className="btn">

                  Choose Movie

                </Button>

            </div>
          </div>
           
        )}
            
            <div className="container">
              <div className="row">
                <h1 className="reco__h1">Similar Movies</h1>
                <div className="recommened__wrapper">
                  {similarMovies.filter((elem) => elem.imdbID !== id).slice(0,4).map((reco) => (  
                  <div className="reco__movie" key={reco.imdbID}>
                    
                    <img className="recoo__img" src={reco.Poster} alt="" />
                  </div>

                ))}
                

              </div>
            </div>
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default MovieInfo;



