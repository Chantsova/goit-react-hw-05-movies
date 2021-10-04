import './MoviesList.css';
import { NavLink } from 'react-router-dom';

export default function MoviesList({ movies, route, query }) {
  return (
    <ul className="movies__list">
      {movies.map(movie => (
        <li className="movies__item" key={movie.id}>
          <NavLink
            to={{
              pathname: '/movies/' + movie.id,
              state: { from: route, query: query },
            }}
          >
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
            <div className="movies__title">{movie.title}</div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

MoviesList.defaultProps = {
  route: '/',
};
