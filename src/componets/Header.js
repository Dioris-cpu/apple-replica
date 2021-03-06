import React from "react";
// import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = () => {
  return (
    <header>
      <div class="container">
        <nav class="nav">
          <ul class="nav-list nav-list-mobile">
            <li class="nav-item">
              <div class="moble-menu">
                <span class="line line-top"></span>
                <span class="line line-bottom"></span>
              </div>
            </li>
            <li class="nav-item">
              <a href="index.html" class="nav-link nav-link-apple"></a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link nav-link-bag"></a>
            </li>
          </ul>
          <ul class="nav-list nav-list-larger">
            <li class="nav-item nav-item-hidden">
              <a href="index.html" class="nav-link nav-link-apple"></a>
            </li>

            <li class="nav-item">
              <a href="#" class="nav-link">
                Mac
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                iPad
              </a>
            </li>

            <li class="nav-item">
              <a href="#" class="nav-link">
                iPhone
              </a>
            </li>

            <li class="nav-item">
              <a href="#" class="nav-link">
                Watch
              </a>
            </li>

            <li class="nav-item">
              <a href="#" class="nav-link">
                TV
              </a>
            </li>

            <li class="nav-item">
              <a href="#" class="nav-link">
                Music
              </a>
            </li>

            <li class="nav-item">
              <a href="#" class="nav-link">
                Support
              </a>
            </li>

            <li class="nav-item">
              <a href="#" class="nav-link nav-link-search"></a>
            </li>

            <li class="nav-item-hidden">
              <a href="#" class="nav-link nav-link-bag"></a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
