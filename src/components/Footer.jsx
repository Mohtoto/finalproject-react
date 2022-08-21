import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
           
                <footer>
                    <div className="row">
                         <div class="footer-bottom">
                                <h1>PROJECTION</h1>
                                <div class="footer-menu">
                                    <ul class="f-menu">
                                        <li>
                                            <Link className="link__white" to='/'>Home</Link>
                                        </li>
                                        <li>
                                            <Link className="link__white" to='/MoviePage'>Find a Movie</Link>
                                        </li>
                                        <li>
                                        < Link  className="link__white" to='/Blog'>Blog</Link>
                                        </li>
                                        <li>
                                            <Link  className="link__white" to='/ContactUS'>Contact us</Link>
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
