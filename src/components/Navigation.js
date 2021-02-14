import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import {ImSearch} from "react-icons/im";
import {AiFillSound} from "react-icons/ai";

function Navigation(props){
    return (
    <div className="nav-bar">
        <Link to="/" className="link">Home</Link>
        <div className="box-container">
            <div className="elementContainer">
                <div className="search">
                    <input 
                    className="search-box" 
                    placeholder="제목,장르를 입력하세요" 
                    type="text" 
                    onChange={props.handleChange}></input>
                    <p><ImSearch/></p>
                </div>
            </div>
        </div>
        
        <Link to="/about" className="link">About</Link>
    </div>
    )
}

export default Navigation;


