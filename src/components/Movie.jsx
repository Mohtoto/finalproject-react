import React from 'react';
import img from '../assets/fast.jpg'

const Movie = ( { title , image , year , type}) => {
    return (
        <div className="wrapper">
            <div className="card">  
                    <img src={image} alt="" />
                    <div className="Descirption">
                        <h1>{title}</h1>
                        <h2>{year}</h2>
                        <h3>{type}</h3>
                        <p>
                            If you have a problem and there is nowhere else to turn, the mysterious and elusive Robert McCall will deliver the vigilante justice you seek. This time, however, McCall's past cuts especially close to home when thugs kill Susan Plummer -- his best friend and former colleague. Now out for revenge, McCall must take on a crew of highly trained assassins who'll stop at nothing to destroy him.                </p>
                        <button>
                            <i className="fab fa-youtube"></i>
                            Play trailer on YouTube
                        </button>
                    </div>
                </div>
             </div>


    );
}

export default Movie;
