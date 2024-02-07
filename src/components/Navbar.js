import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Navbar = () => {
  const [show, setShow] = useState(false)

  return (
      <nav className="nav">
        <div className="nav__container">
          <div className="nav__logo">
            <StaticImage className="logo" src="../assets/images/logo.jpg" alt="University of Toronto logo" />
            <div>
              <h3 className="nav__header">PIANO PEDAGOGY</h3>
              <p className="nav__sub">University of Toronto</p>
            </div>
          </div>
          <ul className="nav__items">
            <li className="nav__item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav__item"><Link className="nav-link" to="/degrees">Degrees</Link></li>
            <li className="nav__item"><Link className="nav-link" to="/practicum">Practicum</Link></li>
            <li className="nav__item"><Link className="nav-link" to="/faculty">Faculty</Link></li>
            <li className="nav__item"><Link className="nav-link" to="/teachers">Teachers</Link></li>
          </ul>
          <button className="button__toggle" onClick={() => setShow(!show)}>
            <span
              className={
                show
                  ? "button__toggle__bar bar--open"
                  : "button__toggle__bar bar--close"
              }
            ></span>
            <span
              className={
                show
                  ? "button__toggle__bar bar--open"
                  : "button__toggle__bar bar--close"
              }
            ></span>
            <span
              className={
                show
                  ? "button__toggle__bar bar--open"
                  : "button__toggle__bar bar--close"
              }
            ></span>
          </button>
        </div>
        <ul
          className={
            show ? "mobile--nav-items show-items" : "mobile--nav-items"
          }
        >
          <li className="mobile--nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="mobile--nav-item"><Link className="nav-link" to="/degrees">Degrees</Link></li>
          <li className="mobile--nav-item"><Link className="nav-link" to="/practicum">Practicum</Link></li>
          <li className="mobile--nav-item"><Link className="nav-link" to="/faculty">Faculty</Link></li>
          <li className="mobile--nav-item"><Link className="nav-link" to="/teachers">Teachers</Link></li>
        </ul>
      </nav>
  )
}

export default Navbar
