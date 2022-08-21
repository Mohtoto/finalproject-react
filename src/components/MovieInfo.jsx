import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import img from '../assets/fast.jpg'
import { Link } from "react-router-dom";
const MovieInfo = () => {
  return (
    <div className="Movie__info">
      <div className="container">
        <div className="row">
          <div className="top__info">
            {/* <Link to='MoviePage'> */}
                <Link to='/MoviePage'>
                    <ArrowBackIcon className="arrow" />
                </Link>
                <h3>Movies</h3>
            
            {/* </Link> */}
          </div>

          <div className="movie__information">
            <img src={img} alt="" />
            <div className="movie__information-desc">
              <h1>Fast and Furious 6</h1>
              <h2>Summary</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
                rem fuga aperiam a dolores quam laborum eius commodi at deleniti
                nesciunt cum itaque, corporis, fugit quaerat nulla, pariatur
                consequuntur id.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
                rem fuga aperiam a dolores quam laborum eius commodi at deleniti
                nesciunt cum itaque, corporis, fugit quaerat nulla, pariatur
                consequuntur id.
              </p>

              <Button variant="contained" className="btn" >
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
