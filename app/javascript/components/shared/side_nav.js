import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../developer/footer";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../redux/users";

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
      <Footer />
    </nav>
  );
};

export default SideNav;
