import React from 'react';
import { Link } from 'gatsby';
import '../../static/styles/layout.scss';

export default function Layout({ children }) {
  return (
    <div className="page">
      <header className="navigation-bar">
        <div className="navigation-bar--content">
          <div className="app-title">
            <span id="title-name">Gurupungav N.</span>
          </div>
          <nav className="navigation-bar--links">
            <Link className="navigation-bar--link" activeClassName="navigation-bar--link--selected" to="/">About</Link>
            <Link className="navigation-bar--link" activeClassName="navigation-bar--link--selected" to="/experience">Experience</Link>
            <Link className="navigation-bar--link" activeClassName="navigation-bar--link--selected" to="/blog">Blog</Link>
          </nav>
        </div>
      </header>
      <div className="page--content">
        {children}
      </div>
      <footer className="page--footer mdc-typography--caption">
        &copy; Copyright 2021 Gurupungav Narayanan
      </footer>
    </div>
  );
}
