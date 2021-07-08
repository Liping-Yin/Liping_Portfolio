import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home__img"
          src="https://images-eu.ssl-images-amazon.com/images/G/37/Gateway-New/hero/XCM_Manual_1329825_1695938_NL_nl_gw_pc_tallhero_2x_nl_nl_3860365_1500x600_1X_nl_NL._CB668229129_.jpg"
          alt="advertisement"
        />
        <div className="products-container">
          <div className="home__row">
            <Product
              id="1"
              title="the Lean start-up"
              price={19.9}
              image="https://images-eu.ssl-images-amazon.com/images/G/37/kindle/journeys/MTcwMWMzMmYt/MTcwMWMzMmYt-Y2ViNjRmNGMt-w758._SY608_CB655605761_.jpg"
              rating={4}
            />
            <Product
              id="1"
              title="the Lean start-up"
              price={19.9}
              image="https://images-eu.ssl-images-amazon.com/images/G/37/Gateway-New/OHL/Toys/XCM_Manual_1344171_1757362_NL_nl_gw_pc_single_category_card_2x_nl_nl_3940514_758x608_2X_nl_NL._SY608_CB663845327_.jpg"
              rating={4}
            />
          </div>
          <div className="home__row">
            <Product
              id="1"
              title="the Lean start-up"
              price={19.9}
              image="https://images-na.ssl-images-amazon.com/images/I/71xg0hHtUYS._AC_SL1500_.jpg"
              rating={4}
            />
            <Product
              id="1"
              title="the Lean start-up"
              price={19.9}
              image="https://images-eu.ssl-images-amazon.com/images/G/37/Orange/GW/Q321/GW_Desktop_SH_CC_Rev_2_1x._SY304_CB664864689_.jpg"
              rating={4}
            />
            <Product
              id="1"
              title="COSORI Hot Air Fryer, 5.5 L, XXL, White, Hot Air Fryer, Air Fryer with Digital LED Touch Screen, 11 Programs, Preheat and Keep Heat, Shake Mode, 100 Recipes in German, Without Oil, 1700 W"
              price={129.99}
              image="https://images-na.ssl-images-amazon.com/images/I/71IF0Eo5BKL._AC_SL1500_.jpg"
              rating={4}
            />
          </div>
          <div className="home__row">
            <Product
              id="1"
              title="the Lean start-up"
              price={19.9}
              image="https://images-eu.ssl-images-amazon.com/images/G/37/Orange/GW/Q321/GW_Desktop_SH_CC_Rev_2_1x._SY304_CB664864689_.jpg"
              rating={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
