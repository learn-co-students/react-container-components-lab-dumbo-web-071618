import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '&api-key=f9c530696d1a4d20b7cd1ee31f4dc2b9';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

    constructor(){
        super()
        this.state = {
            reviews: [],
			searchTerm: ''
        }
    }

    getReviews = () => {
        fetch(URL + this.state.searchTerm + NYT_API_KEY)
		.then(res => res.json() )
		.then(response => {
			this.setState({
				reviews: response.results,
				searched: true
			}, () => {
				console.log(this.state)
				this.renderReviews()
			})
		})
	}

	renderReviews = () => {
		return (
			<div>
				<MovieReviews reviews={this.state.reviews}/>
			</div>
		)
	}

	handleChange = (e) => {
		this.setState({
			searchTerm: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.getReviews()
	}
	
	renderSearchForm = () => {
		return (
			<div>
				<form onSubmit={this.handleSubmit} >
					<label>Make search query for reviews:</label>
					<br />
					<input type="text" onChange={this.handleChange} /> 
					<br />
					<input type="submit" />
				</form>
			</div>
		)
	}

    render(){
        return(
            <div className="searchable-movie-reviews">
				{this.renderSearchForm()}
				{this.renderReviews()}
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer