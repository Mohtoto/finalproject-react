import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import MoviePage from "./Pages/MoviePage";


function App() {

  return (
    <Router>

      
      <div className="App">
        
        <Routes>
           <Route path="/" exact element={<Home />} />
           <Route path="/MoviePage"  element={<MoviePage />} />
           
        </Routes>
      </div>
    </Router>
  );
}

export default App;
