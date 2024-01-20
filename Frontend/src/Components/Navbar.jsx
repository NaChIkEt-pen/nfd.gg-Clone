import React from "react";
import "../CSS/navbar.css";
import NfdLogo from "./NavbarComponents/NfdLogo";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NfdLogo />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse NavbarDiv"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#" aria-current="page">
                  Aggregator
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#" aria-current="page">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " href="#" aria-current="page">
                  Roadmap
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active "
                  href="#"
                  tabindex="-1"
                  aria-current="page"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
