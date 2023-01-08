import React from "react";
import { Link } from "react-router-dom";

function NavbR() {
    return (
        <div className="navi">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="#home">Healthify</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="one nav-item active">
                            <Link to="/">
                            <a class="nav-link" href="#home">Home <span class="sr-only"></span></a>
                            </Link>
                        </li>
                        <li class="two nav-item">
                            <Link to="/steps">
                            <a class="nav-link" href="#home">Calculate Steps!</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>


    )
}

export default NavbR;