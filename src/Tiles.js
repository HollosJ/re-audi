import React from "react";

//Importing images for tiles
import discoverImg from "./media/tile-discover.jpg";
import usedImg from "./media/tile-used.jpg";
import modelsImg from "./media/tile-models.jpg";
import aboutImg from "./media/tile-about.jpg";
import electricImg from "./media/tile-electric.jpg";
import fleetImg from "./media/tile-fleet.jpg";

const Tiles = () => {
  return (
    <div id="sec2" className="Tiles">
      {/*MAIN TILES*/}
      <div className="tile__discover tile">
        <div
          className="tile__img"
          style={{ backgroundImage: `url(${discoverImg})` }}
        ></div>
        <div className="tile__text">
          <div className="bar"></div>
          <h1>Audi SUVs</h1>
          <p>See our range of SUVs</p>
        </div>
      </div>
      <div className="tile__used tile">
        <div
          className="tile__img"
          style={{ backgroundImage: `url(${usedImg})` }}
        ></div>
        <div className="tile__text">
          <div className="bar"></div>

          <h1>Audi Approved Used</h1>
          <p>Search used cars with Audi reassurance.</p>
        </div>
      </div>
      <div className="tile__about tile">
        <div
          className="tile__img"
          style={{ backgroundImage: `url(${aboutImg})` }}
        ></div>
        <div className="tile__text">
          <div className="bar"></div>

          <h1>About</h1>
          <p>Find out more about Audi.</p>
        </div>
      </div>
      <div className="tile__electric tile">
        <div
          className="tile__img"
          style={{ backgroundImage: `url(${electricImg})` }}
        ></div>
        <div className="tile__text">
          <div className="bar"></div>

          <h1>The Home of Electric</h1>
          <p>Everything you need to know about going electric.</p>
        </div>
      </div>
      <div className="tile__models tile">
        <div
          className="tile__img"
          style={{ backgroundImage: `url(${modelsImg})` }}
        ></div>
        <div className="tile__text">
          <div className="bar"></div>

          <h1>Explore models</h1>
          <p>Discover the full Audi range to find the perfect car for you.</p>
        </div>
      </div>
      <div className="tile__fleet tile">
        <div
          className="tile__img"
          style={{ backgroundImage: `url(${fleetImg})` }}
        ></div>

        <div className="tile__text">
          <div className="bar"></div>

          <h1>Business & Fleet</h1>
          <p>
            Support for Business and Company car drivers, including Motability
            and Finance.
          </p>
        </div>
      </div>

      {/*BOTTOM TILES*/}
      <div className="tile__build tile tile-bottom">
        <div className="tile__text">
          <div className="bar"></div>
          <h1>Build your Audi</h1>
          <p>Design an Audi that is as individual as you are.</p>
        </div>
      </div>
      <div className="tile__finance tile  tile-bottom">
        <div className="tile__text">
          <div className="bar"></div>

          <h1>Finance your Audi</h1>
          <p>Finance offers to suit you.</p>
        </div>
      </div>
      <div className="tile__book tile  tile-bottom">
        <div className="tile__text">
          <div className="bar"></div>

          <h1>Book a Test Drive</h1>
          <p>Arrange a test drive at a Centre near you.</p>
        </div>
      </div>
      <div className="tile__owners tile  tile-bottom">
        <div className="tile__text">
          <div className="bar"></div>
          <h1>Owners' Area</h1>
          <p>
            Find details of your Audi, arrange a service, MOT, warranty, and
            more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tiles;
