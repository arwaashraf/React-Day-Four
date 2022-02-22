import React from "react";
import NavTab from "../Shared/NavTab";
import { useSelector } from "react-redux";
import { BsCameraReelsFill } from "react-icons/bs";
function NavBar() {
  const favMovies = useSelector((state) => {
    return state.favouriteArr;
  });

  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Movies Favourites
          </a>
          <button class="navbar-toggler" type="button">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <NavTab path="/">Home</NavTab>
              <NavTab path="/register">Registeration</NavTab>
              <NavTab path="/login">Login</NavTab>
              <NavTab path="/favourite">Favourites</NavTab>

              {/* Day 4 */}
              <button type="button" class="btn btn-link position-relative">
                <BsCameraReelsFill className="fs-4" />
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                  {favMovies.length}
                </span>
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
