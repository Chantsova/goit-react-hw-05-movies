import './Reviews.css';
import { useEffect, useState } from 'react';
import { getMovieReview } from '../../services/moviesAPI';
import PropTypes from 'prop-types';

export default function Reviews({ id }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReview(id).then(resp => setReviews(resp.data.results));
  }, [id]);

  return (
    <div className="reviews">
      <h1 className="reviews__title">Reviews</h1>
      <ul>
        {reviews.length ? (
          reviews.map(review => <li key={review.id}>{review.content}</li>)
        ) : (
          <li>Reviews is not defined</li>
        )}
      </ul>
    </div>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.string,
};
