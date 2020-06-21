import React, { Component } from "react";
import modelsImg from "./media/tile-models.jpg";
import covidImg from "./media/nav-covid.jpg";
import greyImg from "./media/nav-tilegrey.jpg";
import audilogo from "./media/audilogo.svg";

export class Nav extends Component {
  state = {
    menuOpen: false,
  };

  toggleMenu = () => {
    this.setState((prevState) => ({
      menuOpen: !prevState.menuOpen,
    }));
  };

  render() {
    return (
      <div className="Nav">
        <div
          className="nav-btn-wrapper"
          style={{
            cursor: "pointer",
          }}
          onClick={this.toggleMenu}
        >
          {/*BAR 1*/}
          <div
            className="btn-bar1 bar"
            style={{
              transform: this.state.menuOpen
                ? "translateY(9px) rotate(45deg)"
                : "",
            }}
          ></div>
          {/*BAR 2*/}
          <div
            className="btn-bar2 bar"
            style={{
              opacity: this.state.menuOpen ? "0" : "1",
            }}
          ></div>
          {/*BAR 3*/}
          <div
            className="btn-bar3 bar"
            style={{
              transform: this.state.menuOpen
                ? "translateY(-9px) rotate(-45deg)"
                : "",
            }}
          ></div>
        </div>

        <div className="logo">
          <img
            src={audilogo}
            alt="Audi UK"
            style={{ height: "2rem", zIndex: "10", filter: "invert(1)" }}
          />
        </div>

        <div className={this.state.menuOpen ? "nav-menu open" : "nav-menu"}>
          <div
            className="nav__explore nav-tile"
            style={{ backgroundImage: `url(${modelsImg})` }}
          >
            <h1 className="explore-title">Explore models</h1>
          </div>
          <div
            className="nav__build nav-tile"
            style={{ backgroundImage: `url(${greyImg})` }}
          >
            <h1 className="build-title">Build Your Audi</h1>
          </div>
          <div
            className="nav__covid nav-tile"
            style={{ backgroundImage: `url(${covidImg})` }}
          >
            <h1 className="covid-title">COVID-19 latest</h1>
          </div>
          <div
            className="nav__callback nav-tile"
            style={{ backgroundImage: `url(${greyImg})` }}
          >
            <h1 className="callback-title">Request a callback</h1>
          </div>
          <div className="nav__other nav-tile">
            <ul>
              <li>Owners' Area</li>
              <li>Finance & offers</li>
              <li>Business & Fleet</li>
              <li>About Audi</li>
              <li>Approved Used Audi</li>
              <li>The Home of Electric</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
