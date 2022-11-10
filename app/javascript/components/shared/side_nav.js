import React from "react";
// import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./side_nav.css";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";
import Micro from "./micronauts.png"

const SideNav = () => {
  return (
    <nav className="sidenav">
      <img src={Micro} alt="logo" className="logo " />
      <NavLink to="/" activeClassName="selected">DEVELOPERS</NavLink>
      <NavLink to="/reserve" activeClassName="selected">RESERVE</NavLink>
      <NavLink to="/bookings" activeClassName="selected">MY RESERVATIONS</NavLink>
      <NavLink to="/add-developer" activeClassName="selected">ADD DEVELOPERS</NavLink>
      <NavLink to="/delete-developers" activeClassName="selected">REMOVE DEVELOPERS</NavLink>
      <div

        className="d-flex flex-column align-items-center justify-content-center social-cont"
        style={{ height: "50%" }}
        data-test="navigationLinks"
      >
        <p className="social-wraper">
          <a
            href="https://www.twitter.com"
            className="twitter social text-black-50 px-1"
          >
            <FontAwesomeIcon icon={faTwitter} fontSize="23px" />
          </a>
          <a
            href="https://www.facebook.com"
            className="facebook social text-black-50 px-1"
          >
            <FontAwesomeIcon icon={faFacebook} fontSize="23px" />
          </a>
          <a
            href="https://www.google.com"
            className="googleplus social text-black-50 px-1"
          >
            <FontAwesomeIcon icon={faGooglePlus} fontSize="23px" />
          </a>
          <a
            href="https://www.youtube.com"
            className="youtube social text-black-50 px-1"
          >
            <FontAwesomeIcon icon={faYoutube} fontSize="23px" />
          </a>

          <a
            href="http://www.instagram.com"
            className="instagram social text-black-50 px-1"
          >
            <FontAwesomeIcon icon={faInstagram} fontSize="23px" />
          </a>
        </p>
        <div data-test="copyRightText"> &copy; 2022 Micronauts Inc.</div>
      </div>
    </nav>
  );
};


export default SideNav;
