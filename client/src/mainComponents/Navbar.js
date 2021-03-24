import React, { useState, Fragment } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import logo from "../images/swatek.png";
import "./Navbar.css";

const getMiniBar = (url) => (
  <ul className="mini-bar">
    <Link
      to="/gestion-tech-batiment"
      style={
        url === "/gestion-tech-batiment"
          ? { color: "white", background: "#16a085" }
          : null
      }
    >
      la gestion technique des batiments
    </Link>
    <Link
      to="/sys-embarqué"
      style={
        url === "/sys-embarqué"
          ? { color: "white", background: "#16a085" }
          : null
      }
    >
      les systèmes embarqués
    </Link>
    <Link
      to="/sys-info"
      style={
        url === "/sys-info" ? { color: "white", background: "#16a085" } : null
      }
    >
      les systèmes d'informations
    </Link>
  </ul>
);

const Navbar = (props) => {
  const [miniBarVisible, setMiniBarVisible] = useState(false);
  const [showSideBar, setSideBar] = useState(false);
  const url = useRouteMatch().url;
  return (
    <Fragment>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className={`main-list  ${showSideBar ? "translate" : ""}`}>
          <ul className={`nav-links`}>
            <li>
              <Link
                to="/"
                style={
                  useRouteMatch().url === "/" ? { color: "#16a085" } : null
                }
              >
                Acceuil<i className="fas fa-home"></i>
              </Link>
            </li>

            <li onClick={() => setMiniBarVisible(!miniBarVisible)}>
              <Link to={`${useRouteMatch().url}`}>
                nos prestations{" "}
                {!miniBarVisible ? (
                  <i className="fas fa-caret-down"></i>
                ) : (
                  <i className="fas fa-sort-up"></i>
                )}
              </Link>
            </li>
            <li>
              <Link
                to="/produits"
                style={
                  useRouteMatch().url === "/produits"
                    ? { color: "#16a085" }
                    : null
                }
              >
                nos produits<i className="fab fa-product-hunt"></i>
              </Link>
            </li>
            <li>
              <Link
                to="/partenaires"
                style={
                  useRouteMatch().url === "/partenaires"
                    ? { color: "#16a085" }
                    : null
                }
              >
                partenaires<i className="fas fa-handshake"></i>
              </Link>
            </li>
            <li>
              <Link
                to="/actualités"
                style={
                  useRouteMatch().url === "/actualités"
                    ? { color: "#16a085" }
                    : null
                }
              >
                actualités<i className="fas fa-newspaper"></i>
              </Link>
            </li>
          </ul>
          <div className={`contact`}>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </div>
        </ul>
        <div
          className="menu"
          onClick={() => {
            setSideBar(!showSideBar);
            if (!showSideBar) {
              setMiniBarVisible(false);
            }
          }}
        >
          <div />
          <div />
          <div />
        </div>
      </nav>
      {miniBarVisible && getMiniBar(url)}
      {props.children}
    </Fragment>
  );
};

export default Navbar;
