import React, { Component } from "react";
import axios from "axios";
import Movie from "../components/Movie.js";
import Navigation from "../components/Navigation.js";
import "./Home.css";

class App extends Component{
    state={
        isLoading:true,
        movies:[],
        userInput:''
    };

    handleInput = (e) => {
        this.setState({
            userInput: e.target.value
        })
    }

    getMovies = async () => {
        const {data:{data:{movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
        this.setState({movies:movies,isLoading:false});
    }
    componentDidMount(){
        this.getMovies();
    }
    render(){
        const {handleInput} = this;
        const {isLoading,movies,userInput} = this.state;
        const filteredMovie = movies.filter((movies) => {
            return movies.title.toLowerCase().includes(userInput);
        })
        return (
        <div className="wrapper">
            {isLoading
            ?
            <div></div>
            :
            <Navigation handleChange={handleInput}/>
            }
            <div className="container">
                {isLoading 
                ? 
                <div className="loader">
                    <span className="loader-loading">Loading...</span>
                </div> 
                :   (
                    filteredMovie.map(movie => (
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
            </div>
        )
    }
}

export default App;
