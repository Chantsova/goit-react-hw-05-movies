import { useEffect, useState } from 'react';
import { getTrendingMovie } from '../services/moviesAPI';
import MoviesList from '../components/MoviesList/MoviesList';
import PageName from '../components/PageName/PageName';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const title = 'Trending movies';

  useEffect(() => {
    getTrendingMovie().then(resp => setMovies(resp.data.results));
  }, []);

  return (
    <>
      <PageName title={title} />
      <MoviesList movies={movies} />
    </>
  );
}
