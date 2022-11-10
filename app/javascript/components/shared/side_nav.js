import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./side_nav.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../redux/users";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";

const SideNav = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <nav className="sidenav">
      <img
        src="https://th.bing.com/th/id/OIP.5Gn2Q1GP_6LtqjQeHt8fLAHaEo?pid=ImgDet&rs=1"
        alt="logo"
        className="logo "
      />
      <NavLink to="/" activeClassName="selected">
        DEVELOPERS
      </NavLink>
      <NavLink to="/reserve" activeClassName="selected">
        RESERVE
      </NavLink>
      <NavLink to="/bookings" activeClassName="selected">
        MY RESERVATIONS
      </NavLink>
      {user.role === "admin" ? (
        <div>
          <NavLink to="/add-developer" activeClassName="selected">
            ADD DEVELOPERS
          </NavLink>
          <NavLink to="/delete-developers" activeClassName="selected">
            REMOVE DEVELOPERS
          </NavLink>
        </div>
      ) : null}
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
