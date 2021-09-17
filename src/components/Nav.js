import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="nav">
        <div className="nav__column">
          <i className="fas fa-bars"></i>
        </div>
        <div className="nav__column">
          <ul className="nav__list">
            <li className="nav__btn">
              <Link to="/today">Today</Link>
            </li>
            <li className="nav__btn">
              <Link to="/shopping">Shopping</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
