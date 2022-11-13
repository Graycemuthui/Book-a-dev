import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBookings } from "../redux/bookings";
import { fetchDevelopers } from "../redux/developer";

const Bookings = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookings.bookings);
  const developers = useSelector((state) => state.developers.developers);
  useEffect(() => {
    dispatch(fetchBookings());
    dispatch(fetchDevelopers());
  }, []);
  const displayBookings =
    bookings.length !== 0 ? (
      bookings.map((booking) => (
        <div className="reserve-dev">
          <div key={booking.id}>
            {developers.map(
              (developer) =>
                developer.id === booking.developer_id && (
                  <h3>Developer: {developer.name}</h3>
                )
            )}
            <h4>{booking.city}</h4>
            <p>{booking.date}</p>
            <p>{booking.time}</p>
            <button
              className="btn btn-danger"
              onClick={(e) => {
                e.preventDefault();
                fetch(`api/v1/bookings/${booking.id}`, {
                  method: "DELETE",
                  headers: {
                    "Content-Type": "application/json",
                  },
                });
                dispatch(fetchBookings());
              }}
            >
              Cancel Booking
            </button>
          </div>
        </div>
      ))
    ) : (
      <div>
        <h4 className="reservations">No bookings.</h4>
      </div>
    );

  return (
    <div>
      <h1 className="reservation-heading">Bookings</h1>
      <div className="display-reservations">{displayBookings}</div>
    </div>
  );
};

export default Bookings;
