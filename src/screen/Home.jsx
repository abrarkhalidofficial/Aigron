import { useEffect, useState } from "react";
import Homesection from "../assets/home.png";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home__container">
          <div className="home__container__img">
            <img src={Homesection} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
