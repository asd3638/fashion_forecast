import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav class="nav">
        <div class="nav__column">
          <i class="fas fa-bars"></i>
        </div>
        <div class="nav__column">
          <ul class="nav__list">
            <li class="nav__btn">
              <Link to="/today">Today</Link>
            </li>
            <li class="nav__btn">
              <Link to="/shopping">Shopping</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
