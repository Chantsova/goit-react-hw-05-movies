import { Switch, Route, Redirect } from 'react-router';
import { lazy, Suspense } from 'react';
import './App.css';
import AppBar from './components/AppBar/AppBar';

const HomePage = lazy(() => import('./views/HomePage'));
const MoviesPage = lazy(() => import('./views/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage'));
const NotFoundView = lazy(() => import('./views/NotFoundView'));

function App() {
  return (
    <>
      <AppBar />
      <main className="main">
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route exact path="/movies">
              <MoviesPage />
            </Route>

            <Route path="/movies/:movieId">
              <MovieDetailsPage />
            </Route>

            <Route exact path="/notFound">
              <NotFoundView />
            </Route>

            <Redirect to="/notFound" />
          </Switch>
        </Suspense>
      </main>
    </>
  );
}

export default App;
