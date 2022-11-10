import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { Splide, SplideSlide,SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

import { useSelector, useDispatch } from "react-redux";
import { fetchDevelopers } from "../redux/developer";
function MainPage() {
  const dispatch = useDispatch();
  const developers = useSelector((state) => state.developers.developers);
  useEffect(() => {
    dispatch(fetchDevelopers());
  }, [dispatch]);

  const displayDevelopers = developers.map((developer) => (
    <SplideSlide key={developer.id}>
      <div className="mainpage">
        <div key={developer.id}>
          <div className="image-div">
            <img src={developer.photo} alt="new" className="image" />
          </div>
          <div className="dev-info">
            <Link to={`/developers/${developer.id}`}>
              <h2>{developer.name}</h2>
            </Link>
            <p>{developer.bio}</p>
            <div className="icons">
              <Link className="icon-items">
                <BsFacebook />
              </Link>
              <Link className="icon-items">
                <BsTwitter />
              </Link>
              <Link className="icon-items">
                <BsInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SplideSlide>
  ));

  return (
    <div className="mainpage-items">
      <div className="mainpage-heading">
        <h1>Developers</h1>
        <p className="main-para">Please select a developer of your choice.</p>
      </div>
      <div className="splide"></div>
      <Splide hasTrack={ false }
        options={{
          perPage: 3,
          arrows: true,
          pauseOnHover: true,
          pauseOnFocus: true,
          pagination: true,
          autoplay: true,
          speed: 6000,
          type: "loop",
          interval: 4000,
          rewindByDrag: true,
          drag: "free",
          gap: "1rem",
        }}
      >
         <SplideTrack>
        {displayDevelopers}
        </SplideTrack>
        <div className="splide__progress">
           <div className="splide__progress__bar" />
        </div>

        
      </Splide>
    </div>
  );
}

export default MainPage;
