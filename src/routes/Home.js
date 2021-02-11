import React, { Component } from "react";
import axios from "axios";
import Movie from "../components/Movie.js";
import "./Home.css";

class App extends Component{
    state={
        isLoading:true,
        movies:[]
    };
    getMovies = async () => {
        const {data:{data:{movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
        this.setState({movies:movies,isLoading:false});
    }
    componentDidMount(){
        this.getMovies();
    }

    render(){
        const {isLoading,movies} = this.state;
        return (
        <div className="container">
            {isLoading 
            ? 
            <div className="loader">
                <span className="loader-loading">Loading...</span>
            </div> 
            :(
                movies.map(movie => (
                <div key={movie.id} className="movies">
                    <Movie 
                        title={movie.title}
                        poster={movie.medium_cover_image}
                        year={movie.year}
                        summary={movie.summary}
                        genres={movie.genres}
                    />
                </div>
                ))
            )
            }
        </div>
        )
    }
}

export default App;
