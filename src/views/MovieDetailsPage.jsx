import {
  useRouteMatch,
  useHistory,
  Route,
  Switch,
  useLocation,
} from 'react-router';
import { NavLink, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieById } from '../services/moviesAPI';
import MovieItem from '../components/MovieItem/MovieItem';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';
import GoBackBtn from '../components/GoBackBtn/GoBackBtn';
import DetailsBtns from '../components/DetailsBtns/DetailsBtns';
import Notiflix from 'notiflix';

export default function MovieDetailsPage() {
  const params = useParams();
  const match = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const cast = 'Cast';
  const reviews = 'Reviews';

  Notiflix.Notify.init({
    width: '400px',
    position: 'right-top',
    fontSize: '17px',
  });

  useEffect(() => {
    getMovieById(params.movieId)
      .then(resp => {
        setMovie(resp.data);
      })
      .catch(error =>
        Notiflix.Notify.failure(
          'There is something wrong with the movie card. We are working on it now. Please, try it later!',
          {
            timeout: 6000,
          },
        ),
      );
  }, [params, location]);

  const handleGoBack = e => {
    history.push(location.state.from, { query: location.state.query });
  };

  return (
    <>
      <GoBackBtn handleGoBack={handleGoBack} />
      {movie && <MovieItem movie={movie} />}

      <div>
        <NavLink
          to={{
            pathname: match.url + '/cast',
            state: { from: location.state.from, query: location.state.query },
          }}
        >
          <DetailsBtns text={cast} />
        </NavLink>
        <NavLink
          to={{
            pathname: match.url + '/reviews',
            state: { from: location.state.from, query: location.state.query },
          }}
        >
          <DetailsBtns text={reviews} />
        </NavLink>
      </div>

      <Switch>
        <Route exact path={`${match.path}/cast`}>
          <Cast id={params.movieId} />
        </Route>
        <Route exact path={`${match.path}/reviews`}>
          <Reviews id={params.movieId} />
        </Route>
      </Switch>
    </>
  );
}
