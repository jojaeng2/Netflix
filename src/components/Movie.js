import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({year,title,poster,summary,genres}) {
    return (
        <Link to={{
            pathname:"/movie-detail",
            state:{
                year,
                title,
                summary,
                poster,
                genres
            }
        }}>
        <div className="movie">
            <img src={poster} alt={title} title={title}/>
            <div className="movie-data">
                <h3 className="movie-title">{title}</h3>
            </div>
        </div>
    </Link>
    )
}


Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired 
}

export default Movie;