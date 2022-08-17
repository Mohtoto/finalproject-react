import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/proj.png'
import SearchIcon from '@mui/icons-material/Search';
import homeimg from '../assets/home.svg'



const Home = () => {

    const [input, setInput] = useState('');






    return (
        <div className='home'>

            <nav>
                <img src={img} />

                <ul>
                    <li><Link to='/'  className='link'>Home</Link></li>
                    <li><Link to='/MoviePage' className='link'>Find your Movie</Link></li>
                    <li><Link to='/Contactus' className='link back'>Contact US</Link></li>
                </ul>
            </nav>

            <header>
                
                <div className="row">
                    <div className="main__des">
                            <div className="home__description">
                                <h1>Australia's most awarded Movie platform</h1>
                                <h2>FIND YOUR DREAM CAR WITH CINEMATIC</h2>


                                <div className="input__holder">
                                        <input placeholder='type in a Movie' value={input} onChange={(e) => setInput(e.target.value)} type="text" />

                                        <Button className='btn' >

                                            <SearchIcon  className='search' />
                                        </Button>

                                </div>


                            </div>

                            <img className='home__img' src={homeimg} />
                        </div>
                    </div>
            </header>





        </div>
    );
}

export default Home;
