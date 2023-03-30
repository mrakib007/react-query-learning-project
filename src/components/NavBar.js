import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/super-heroes">TraditionalSuperHeroes</Link>
          </li>
          <li>
            <Link to="/rq-super-heroes">RQSuperHeroes</Link>
          </li>
          {/* <li>
            <Link to="/test">Test</Link>
          </li> */}
          <li>
            <Link to="/rq-parallel">ParallelQueries</Link>
          </li>
          <li>
            <Link to="/rq-dynamic-parallel">DynamicParallelQueries</Link>
          </li>
          <li>
            <Link to="/rq-dependent">DependentQueries</Link>
          </li>
          <li>
            <Link to="/rq-paginated">PaginatedQueries</Link>
          </li>
          <li>
            <Link to="/rq-infinite">InfiniteQueries</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
