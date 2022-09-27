import React from "react";
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <nav className = "navbar navbar-expand-sm bg-dark navbar-dark">
            <h1 style = {{color:"white"}}>React</h1>
            <div className = "container-fluid">
                <ul className = "navbar-nav">
                    <li className="nav-item">
                        <Link className = "nav-link" to="/">Welcome</Link>
                    </li>
                    <li className="nav-item">
                        <Link className = "nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className = "nav-link" to="/person">Person</Link>
                    </li>
                    <li className="nav-item">
                        <Link className = "nav-link" to="/crud">CrudDemo</Link>
                    </li>
                    <li className="nav-item">
                        <Link className = "nav-link" to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;