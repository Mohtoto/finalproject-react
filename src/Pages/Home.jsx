import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../assets/proj.png";
import SearchIcon from "@mui/icons-material/Search";
import homeimg from "../assets/ai.png";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import Nav from "../components/Nav";
import Spline from '@splinetool/react-spline';



const Home = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();



  const gotoMoviepage = () => {
    navigate('MoviePage', {state: { query: input}});
  };



  function onSearchKeyDown(event) {
    if (event.key === "Enter") {
      gotoMoviepage();
    }
  }



  



  return (
    <div className="home">
      
     <header>
        <div className="row">
          <div className="main__des">
            <div className="home__description">
              <h1>Australia's most awarded Movie platform</h1>
              <h2>FIND YOUR DREAM MOVIE HERE</h2>

              <div className="input__holder">
                <input
                  placeholder="Type in a Movie...."
                  onKeyDown={onSearchKeyDown}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  type="text"
                />

                <Button className="btn" onClick={gotoMoviepage}>
                  <SearchIcon className="search" />
                </Button>
              </div>
            </div>

            <img className="home__img" src={homeimg} />
            {/* <Spline scene="https://prod.spline.design/TrzeU7JTeRZjxUfk/scene.splinecode" /> */}

           

            {/* <Spline className="spline" scene="https://prod.spline.design/Dat6UCsw2zdbnrnZ/scene.splinecode" /> */}



          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
