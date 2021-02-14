import React from "react";
import { Link } from "react-router-dom";

function About(){
    return (
        <div className="about-wrap">
            <div className="about-home">
                <Link to={{pathname:"/"}}>Home</Link>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default About;