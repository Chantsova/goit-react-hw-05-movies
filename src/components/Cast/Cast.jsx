import './Cast.css';
import { useEffect, useState } from 'react';
import { getMovieCast } from '../../services/moviesAPI';
import PropTypes from 'prop-types';

export default function Cast({ id }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(id).then(resp => setCast(resp.data.cast));
  }, [id]);

  return (
    <div className="cast">
      <h1 className="cast__title">Cast</h1>
      <ul className="cast__list">
        {cast.length ? (
          cast.map(actor => (
            <li className="cast__item" key={actor.id}>
              {actor.profile_path !== null ? (
                <img
                  className="cast__img"
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                />
              ) : (
                <img
                  className="cast__img"
                  src={`https://i.pinimg.com/originals/0a/dc/3b/0adc3b547b004c41d57f7a6902fa50bd.jpg`}
                  alt={actor.name}
                />
              )}
              <h3 className="cast__subtitle">{actor.name}</h3>
            </li>
          ))
        ) : (
          <li>Reviews is not defined</li>
        )}
      </ul>
    </div>
  );
}

Cast.propTypes = {
  cast: PropTypes.string,
};
