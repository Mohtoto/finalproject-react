import React, { useEffect, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import img from '../assets/proj.png'
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Nav from '../components/Nav';




const MoviePage = () => {
    // const { query } = useParams();
    // console.log(query)
    const { state } = useLocation();
    
    // const navigate = useNavigate();
  


    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchString, setSearchString] = useState("")
    

    async function FetchMovies(query) {
        setLoading(true)
       const { data } = await axios.get(`https://www.omdbapi.com/?apikey=59e995b1&s=${searchString || query}`)
    
       setMovies(data.Search)
       setLoading(false)
 
   }
  
    


    
   
   
   useEffect(() => {

        if(state && state.query){

            FetchMovies(state.query)
        }
    }, []);

    

    


    const searchEnter= (e)=> {

        if(e.key === 'Enter'){

            FetchMovies()
        }
    }
    


    return (
        <div className='MoviePage'>
                


                    <div className="cont">
                        <div className="row ">

                           

                            <div className="desc__info">

                                <h1>Browse our Movies</h1>

                                <div className="input__field-holder">
                                    <input className='input__movie'  onKeyUp={searchEnter} value={searchString} onChange={(e) => setSearchString(e.target.value)}  placeholder='type in a Movie'  type="text" />
                                

                                    <Button className='btnpurp' onClick={() => FetchMovies(searchString)}>

                                            <SearchIcon  className='search' />
                                    </Button>

                                
                                </div>
                                    
                            </div>

                        </div>
                            

                    </div>
                    <div className="wrapper">
                    {loading? 
                        new Array(6).fill(0).map((_, index) => (

                        <div className="card">  
                                <img src="" alt="" />
                               <div className='card--skeleton'></div>

                          

                        </div>

                        ))

                    : 

                        
                        movies.slice(0,6).map(movie => ( 
                                <div className="card" key={movie.imdbID} >  
                                    <div className="Descirption">
                                     <Link to={`/MoviePage/${movie.imdbID}`}>
                                        <img src={movie.Poster} alt="" />
                                     </Link>   
                                        <h1>{movie.Title}</h1>
                                        <h2>{movie.Year}</h2>
                                        <h3>{movie.Type}</h3>
                                    </div>

                                    
                                </div>     
                         
                         ))}

                     
                    </div>
             

               
          
        </div>
    );
}

export default MoviePage;
