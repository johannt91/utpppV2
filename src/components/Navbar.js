import React, { useState } from "react"
import Logo from "../assets/images/logo.jpg"

const Navbar = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <nav className="nav">
        <div className="nav__container">
          <div className="nav__logo">
            <img src={Logo} alt="University of Toronto logo" />
            <div>
              <h3 className="nav__header">PIANO PEDAGOGY</h3>
              <p className="nav__sub">University of Toronto</p>
            </div>
          </div>
          <ul className="nav__items">
            <li className="nav__item">Degrees</li>
            <li className="nav__item">Media</li>
            <li className="nav__item">People</li>
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
          <li className="mobile--nav-item">Degrees</li>
          <li className="mobile--nav-item">Media</li>
          <li className="mobile--nav-item">People</li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
