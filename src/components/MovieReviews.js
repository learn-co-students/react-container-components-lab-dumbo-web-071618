// Code MovieReviews Here
import React from 'react'

const renderReviews = (reviews) => {
    return reviews.map( review => {
        return (
            <div className="review">
				<h1>Headline: {review.headline}</h1>
                <h2>Display Title: {review.display_title}</h2>
                <h3>MPAA Rating: {review.mpaa_rating}</h3>
                <h4>Critics Pick: {review.critics_pick}</h4>
                <p>Byline: {review.byline}</p>
            </div>
        )
    })
}

const MovieReviews = props => {
    return (
        <div className="review-list">
            {renderReviews(props.reviews)}
        </div>
    )
}

export default MovieReviews