import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () =>{
    return <div className="img-container">
        <div className="img-wrap">
        <Link to="/animals">
            <h2>Animals collection</h2>
        </Link>
        <img src={require("./img/Gerbil.JPG")} alt="gerbil" />
        </div>
        <div className="img-wrap">
        <Link to="/birds">
            <h2>Birds collection</h2>
        </Link>
        <img src={require("./img/AT-nature-siberian-jay-winter-bird-walk.webp")} alt="gerbil" />
        </div>
    </div>
}

export default Home;