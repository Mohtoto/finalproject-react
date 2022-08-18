import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <footer>
                <div class="footer-content">
                    <h3>PROJECTION</h3>
                    <p>
                        Australia's Most awarded Movie platform , FIND YOUR DREAM Movie WITH CINEMATIC
                    </p>
                   
                </div>
                <div class="footer-bottom">
                    <p>
                        copyright &copy; <a href="#">Mohammad Totonchy</a>{" 2022"}
                    </p>
                    <div class="footer-menu">
                        <ul class="f-menu">
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/MoviePage'>Find a Movie</Link>
                            </li>
                            <li>
                             <  Link to='/Blog'>Blog</Link>
                            </li>
                            <li>
                                <Link to='/ContactUS'>Contact us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
