import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import MoviePage from "./Pages/MoviePage";
import Footer from "./components/Footer";
import MovieInfo from "./components/MovieInfo";
import Nav from "./components/Nav";


function App() {

  return (
    <Router>

      <Nav />
      <div className="app">
        
        <Routes>
           <Route path="/" exact element={<Home />} />
           <Route path="/MoviePage" exact element={<MoviePage />} />
           <Route path="/MoviePage/1" element={<MovieInfo />} />
        
        </Routes>

      </div>
      <Footer />
    </Router>
  );
}

export default App;
