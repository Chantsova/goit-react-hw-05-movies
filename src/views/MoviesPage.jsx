import { useState, useEffect } from 'react';
import { useRouteMatch, useLocation } from 'react-router';
import { getMoviesByQuery } from '../services/moviesAPI';
import MoviesList from '../components/MoviesList/MoviesList';
import SearchForm from '../components/SearchForm/SearchForm';
import PageName from '../components/PageName/PageName';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const match = useRouteMatch();
  const title = 'Movies Page';

  useEffect(() => {
    if (location.state !== null) {
      getMoviesByQuery(location.state.query).then(resp =>
        setMovies(resp.data.results),
      );
      setQuery(location.state.query);
    }
  }, [location]);

  const handleSetQuery = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    getMoviesByQuery(query).then(resp => setMovies(resp.data.results));
  };

  return (
    <>
      <PageName title={title} />
      <SearchForm
        handleSubmit={handleSubmit}
        handleSetQuery={handleSetQuery}
        query={query}
      />

      {movies && (
        <MoviesList route={match.path} movies={movies} query={query} />
      )}
    </>
  );
}
