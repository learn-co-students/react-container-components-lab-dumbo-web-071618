import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
require('es6-promise').polyfill();
require('isomorphic-fetch');

const NYT_API_KEY = 'f9c530696d1a4d20b7cd1ee31f4dc2b9';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {

    constructor(){
        super()
        this.state ={
            reviews: []
        }
	}
	
	componentDidMount() {
		this.fetchData()
	}
	

    fetchData = () => {
        fetch(URL)
        .then( res => res.json())
        .then( response => {
			this.setState({
                reviews: response.results
			})
        })
        
    }

    render() {
        return(
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default LatestMovieReviewsContainer