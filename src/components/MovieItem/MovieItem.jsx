import './MovieItem.css';
import PropTypes from 'prop-types';

export default function MovieItem({ movie }) {
  const genres = movie.genres;

  return (
    <div className="movie">
      <div className="movie__content">
        {movie.backdrop_path !== null ? (
          <img
            className="movie__img"
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.original_title}
          />
        ) : (
          <img
            className="movie__img"
            src={`https://i.pinimg.com/originals/a9/12/19/a91219938f5c74a5d73a6568e8638e95.jpg`}
            alt={movie.original_title}
          />
        )}
        <div className="movie__textBox">
          <h1 className="movie__title">
            {movie.original_title} ({movie.release_date.slice(0, 4)})
          </h1>
          <div>
            <h2>Genres:</h2>
            <ul>
              {movie &&
                genres.map(genre => (
                  <li className="movie__text" key={genre.id}>
                    {genre.name}
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h2>Overviews:</h2>
            <p className="movie__text">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

MovieItem.propTypes = {
  genres: PropTypes.string,
};
