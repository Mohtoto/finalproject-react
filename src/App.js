import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import MoviePage from "./Pages/MoviePage";
import Footer from "./components/Footer";
import MovieInfo from "./Pages/MovieInfo";
import Nav from "./components/Nav";


function App() {

  return (
    <Router>

      <div className="app">
        <Nav />
        
        <Routes>
           <Route path="/" exact element={<Home />} />
           <Route path="/MoviePage" exact element={<MoviePage />} />
           <Route path="/MoviePage/:id" element={<MovieInfo />} />
        
        </Routes>

      </div>
      <Footer />
    </Router>
  );
}

export default App;
