import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import img from "../assets/proj.png";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import Nav from "../components/Nav";
import MovieInfo from "./MovieInfo";

const MoviePage = () => {
  const { state } = useLocation();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchString, setSearchString] = useState('');
  const navigate = useNavigate();



  async function FetchMovies(query) {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=59e995b1&s=${searchString || query}`
    );

    
    
    setMovies(data.Search);
    setLoading(false);

  }



  
  
  useEffect(() => {
    if (state && state.query) {
      FetchMovies(state.query);
    }
  }, []);


  const searchEnter = (e) => {
    if (e.key === "Enter") {
      FetchMovies() 
    }
  };

  
  return (
    <div className="MoviePage">
      <div className="cont">
        <div className="row ">
          <div className="desc__info">
            <h1>Browse our Movies</h1>

            <div className="input__field-holder">
              <input
                className="input__movie"
                onKeyUp={searchEnter}
                value={searchString}
                onChange={(e) => setSearchString(e.target.value)}
                placeholder="Type in a Movie"
                type="text"
              />

              <Button
                className="btnpurp"
                onClick={() => FetchMovies(searchString)}
              >
                <SearchIcon className="search" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        {loading
          ? new Array(9).fill(0).map((_, index) => (
              <div className="card">
                <div className="card--skeleton"></div>
                <div className="Descirption">
                  <div className="Descirption--skeleton"></div>
                </div>
              </div>
            ))
          : movies.slice(0, 9).map((movie) => (
              <div className="card" key={movie.imdbID}>
                <div className="Descirption">
                  <Link to={`/MoviePage/${movie.imdbID}`} state={{title: searchString || state.query}}>
                    <img className="imggg" src={movie.Poster} alt="" />
                  </Link>
                  <h1>{movie.Title}</h1> 
                  <h3>{movie.Type}</h3>
                </div>
              </div>
            ))}
      </div>



      {/* {movies.map(movie => <MovieInfo id={movie.imdbID} />   )} */}

      {/* `/MoviePage/${movie.imdbID}` */}
    </div>
  );
};

export default MoviePage;
