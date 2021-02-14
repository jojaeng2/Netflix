import React, { Component } from "react";
import searchYoutube from 'youtube-api-v3-search';
import "./Detail.css";
class Detail extends Component{
    componentDidMount(){
        const {location,history} = this.props;
        if (location.state === undefined){
            history.push("/");
        }
    }
    render(){
        const {state} = this.props.location;
        if (state){
            return (
                <div className="detail">
                    <img src={state.poster} alt={state.title} title={state.title}/>
                    <div className="detail-text">
                        <div className="detail-text__title">
                            <p className="text-title">{state.title}</p>
                            <p className="text-year">{state.year}</p>
                        </div>
                        <ul className="text-ul">
                            {state.genres.map(genre => 
                                <li>{genre}</li>)}
                        </ul>
                        <div>{state.summary}</div>
                    </div>
                </div>
            )
        }else{
            return null;
        }
    }
}

export default Detail;