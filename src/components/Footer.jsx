import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/moh2.png'


const Footer = () => {
    return (
        <div className="footer">
           
                <footer>
                    <div className="row">
                         <div class="footer-bottom">
                         <img  className="personal__logo" src={logo} />
                                <div class="footer-menu">
                                    <ul class="f-menu">
                                        <li>
                                            <Link className="link__white" to='/'>Home</Link>
                                        </li>
                                        <li>
                                            <Link className="link__white" to='/MoviePage'>Find a Movie</Link>
                                        </li>
                                      
                                    </ul>
                                </div>
                                <p>
                                    copyright &copy; Mohammad Totonchy{"2022"}
                                </p>
                            </div>
                        </div>
                </footer>
            
        </div>
    );
};

export default Footer;
