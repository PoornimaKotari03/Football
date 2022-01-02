import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Popup from 'reactjs-popup';
import LeagueDetails from "./LeagueDetails";
import LeagueSeason from './LeagueSeason';

const LeagueComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, image, name, logo, abbr } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={name} />
              </div>
              <div className="content">
                <div className="header">{name}</div>
                <div className="meta ">{logo}</div>
                <div className="meta">{abbr}</div>
              </div>
            </div>
          </div>
        </Link>

        <Popup
    trigger={<button className="button">Details</button>}
    modal
    nested
  >
  <LeagueDetails />
  </Popup>

  <Popup
    trigger={<button className="button">Seasons</button>}
    modal
    nested
  >
  <LeagueSeason />
  </Popup>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default LeagueComponent;

