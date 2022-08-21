import React from "react";
import { Link } from "react-router-dom";
import img from '../assets/proj.png'

const Nav = () => {
  return (
    <div>
      <nav>
        <Link to='/'>
            <img src={img} />
        </Link>

        <ul>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/MoviePage" className="link">
              Find your Movie
            </Link>
            
            
          </li>
          {/* <li><Link to='/Contactus' className='link movieback '>Contact US</Link></li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
