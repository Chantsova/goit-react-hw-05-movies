import './Navigation.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav className="navigation">
    <NavLink exact to="/" className="navigation__logo">
      MOVIES UNIVERSE
    </NavLink>
    <div className="navigation__menu">
      <NavLink
        exact
        to="/"
        className="navigation__name"
        activeClassName="navigation__name--active"
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className="navigation__name"
        activeClassName="navigation__name--active"
      >
        Movies
      </NavLink>
    </div>
  </nav>
);

export default Navigation;
