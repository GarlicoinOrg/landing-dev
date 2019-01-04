import React from 'react';
import { Link } from 'gatsby';

import Logo from 'src/components/svg/Logo';

export default () => (
  <footer>
    <div className="mainFooter">
      <div className="emailSignup">
        <div className="emailOverlay">
          <span>
            Newsletter subscription <br /> not available.
          </span>
        </div>
        <div className="emailPlaceholder">Email Address</div>
        <button className="btn-blue" name="subscribe">
          Sign Up
        </button>
      </div>
      <Link
        to="/"
        className="footerIcon"
        aria-label="Garlicoin logo: link to home page">
        <Logo />
      </Link>
      <div className="footerCols">
        <ul className="col">
          <li>Resources</li>
          <li>
            <a href="https://insight.garli.co.in/">Explorer</a>
          </li>
          <li>
            <a href="https://guide.garli.co.in">Garlic Recipes</a>
          </li>
        </ul>
        <ul className="col">
          <li>Community</li>
          <li>
            <a
              href="https://garlicoin.reddit.com"
              target="_blank"
              rel="noopener noreferrer">
              Reddit
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg/nZWHe33"
              target="_blank"
              rel="noopener noreferrer">
              Discord Server
            </a>
          </li>
        </ul>
        <ul className="col">
          <li>Help</li>
          <li>
            <Link to="/resources">Get Started</Link>
          </li>
          <li>
            <a href="mailto:garlicoindevs@gmail.com">garlicoindevs@gmail.com</a>
          </li>
          <li>FAQ (coming soon.)</li>
        </ul>
      </div>
    </div>
    <div className="copyright">
      <span>© 2018 by Garlicoin Org. All rights reserved</span>
      <span className="copyrightLinks">
        <Link to="#">Terms of Use</Link>
        <Link to="#">Privacy Policy </Link>
        <Link to="#">DMCA Policy </Link>
        <Link to="#">Disclaimer</Link>
      </span>
    </div>
  </footer>
);
