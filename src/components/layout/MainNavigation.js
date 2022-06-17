import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}> My App</div>

      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetups</Link>
          </li>{" "}
          <li>
            <Link to="/favourite">My Favourite </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
