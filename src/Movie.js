import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie(props){
    Movie.propTypes = {
        title: PropTypes.string.isRequired
        ,poster: PropTypes.string.isRequired
    };
    return (
        <div>
            <MoviePoster poster={props.poster}/>
            <h1>hello this is a {props.title}</h1>
        </div>
    );
}

function MoviePoster(props){
    Movie.propTypes = {
        poster: PropTypes.string.isRequired
    };

    return (
        <img src={props.poster} />
    );
}

export default Movie;