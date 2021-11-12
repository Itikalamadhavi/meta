import React from "react";
import "../assets/index.css";
/* eslint-disable jsx-a11y/anchor-is-valid */

/**
 * This code is for the login page
 */

export default function Loginpage() {
  return (
    <>
      <body>
        <header>
          <div class="container">
            <div class="content">
              <img
                src="https://yt3.ggpht.com/AAnXC4o1n8BKDsO5l6Uc71rf7WOJjm2-aUHzkvyp9vGYB5F4UtXWTecVzvPOBCFK0bNYsZlD7Hk=s900-c-k-c0x00ffffff-no-rj"
                alt="Facebook Logo"
                height="80"
                width="80"
              />
              <button>
                <a href="/signup">Create New Account</a>
              </button>
            </div>
          </div>
        </header>
        <main>
          <div class="container">
            <section class="login-form">
              <h1>Login to Facebook</h1>
              <form>
                <input type="text" placeholder="email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Log In</button>
                <a href="/signup">Forgotten Account?</a>
                <p>
                  <span>or</span>
                </p>
              </form>
              <button class="create-account">
                <a href="/signup">Create New Account</a>
              </button>
              <br />
              <button class="btn btn-primary back">
                <a href="/">Back</a>
              </button>
            </section>
          </div>
        </main>
        <footer>
          <div class="container">
            <ul class="languages">
              <li>
                <a href="#">English (UK)</a>
              </li>
              <li>
                <a href="#">বাংলা</a>
              </li>
              <li>
                <a href="#">हिन्दी</a>
              </li>
              <li>
                <a href="#"> اردو</a>
              </li>
              <li>
                <a href="#">नेपाली</a>
              </li>
              <li>
                <a href="#">ଓଡ଼ିଆ</a>
              </li>
              <li>
                <a href="#">Español</a>
              </li>
              <li>
                <a href="#">Português (Brasil)</a>
              </li>
              <li>
                <a href="#">Français (France)</a>
              </li>
              <li>
                <a href="#">Deutsch</a>
              </li>
              <li>
                <a href="#">Italiano</a>
              </li>
              <button>
                <i>+</i>
              </button>
            </ul>
            <hr />
            <ul class="tags">
              <li>
                <a href="#">Sign up</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Messenger</a>
              </li>
              <li>
                <a href="#">Facebook Lite</a>
              </li>
              <li>
                <a href="#">Watch</a>
              </li>
              <li>
                <a href="#">People</a>
              </li>
              <li>
                <a href="#">Profiles</a>
              </li>
              <li>
                <a href="#">Pages</a>
              </li>
              <li>
                <a href="#">Page Categories</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Places</a>
              </li>
              <li>
                <a href="#">Games</a>
              </li>
              <li>
                <a href="#">Locations</a>
              </li>
              <li>
                <a href="#">Marketplace</a>
              </li>
              <li>
                <a href="#">Groups</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Local</a>
              </li>
              <li>
                <a href="#">Fundraisers</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Create Ad</a>
              </li>
              <li>
                <a href="#">Create Page</a>
              </li>
              <li>
                <a href="#">Developers</a>
              </li>
            </ul>

            <p>Facebook © 2019</p>
          </div>
        </footer>
      </body>
    </>
  );
}
