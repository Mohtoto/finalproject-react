import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/proj.png'
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import Movie from '../components/Movie';
import { useParams } from 'react-router-dom';
import axios from 'axios';





const MoviePage = () => {

    const [movie, setMovie] = useState([]);
    
    // const { id } = useParams();
    // console.log(id)

    useEffect(() => {

         async function Movie() {

            const { data } = await axios.get('https://www.omdbapi.com/?apikey=59e995b1&s=game')
            setMovie(data.Search)
        }
        Movie()
        console.log(movie)
    }, []);


    return (
        <div className='MoviePage'>
                


                    <div className="cont">
                        <div className="row ">

                                {/* <img src='https://image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg' alt="" />  */}
                            <nav>   
                                <img src={img} />

                                    <ul>
                                        
                                        
                                            <li><Link to='/'  className='link'>Home</Link></li>
                                            <li><Link to='/MoviePage' className='link'>Find your Movie</Link></li>
                                            <li><Link to='/Contactus' className='link movieback '>Contact US</Link></li>
                                        
                                    </ul>
                                    
                            </nav>

                            <div className="desc__info">

                                <h1>Browse our Movies</h1>

                                <div className="input__field-holder">
                                    <input className='input__movie' placeholder='type in a Movie'  type="text" />
                                

                                    <Button className='btnpurp' >

                                            <SearchIcon  className='search' />
                                    </Button>

                                
                                </div>
                                    
                            </div>

                        </div>
                            

                    </div>

                            <div className="wrapper">
                                {movie.slice(0,6).map(movies=> 
                                
                                    <div className="card" key={movies.imdbID}>  
                                            <img src={movies.Poster} alt="" />
                                            <div className="Descirption">
                                                <h1>{movies.Title}</h1>
                                                <h2>{movies.Year}</h2>
                                                <h3>{movies.Type}</h3>
                                                <p>
                                                    If you have a problem and there is nowhere else to turn, the mysterious and elusive Robert McCall will deliver the vigilante justice you seek. This time, however, McCall's past cuts especially close to home when thugs kill Susan Plummer -- his best friend and former colleague. Now out for revenge, McCall must take on a crew of highly trained assassins who'll stop at nothing to destroy him.                </p>
                                                <button>
                                                    <i className="fab fa-youtube"></i>
                                                    Play trailer on YouTube
                                                </button>
                                            </div>
                                        </div>
                                
                                )}
                            
                            </div>

               
          
        </div>
    );
}

export default MoviePage;
