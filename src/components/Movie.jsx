import React from 'react';
import img from '../assets/fast.jpg'

const Movie = ( { title , image , year , type}) => {
    return (
        
            <div className="card card--skeleton">  
                    <img src={image} alt="" />
                    <div className="Descirption">
                        <h1>{title}</h1>
                        <h2>{year}</h2>
                        <h3>{type}</h3>
                    </div>
                </div>
             


    );
}

export default Movie;
