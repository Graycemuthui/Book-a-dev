import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const AddBooking = () => {
  const params = useParams();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [city, setCity] = useState("");
  return (
    <div className="reserved-dev">
      <h2 className="text-center opacity-100">Reserve a developer</h2>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="input-group mb-3 w-75 my-1">
          <label className="input-group-text" for="inputGroupSelect01">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3 w-75 my-1">
          <label className="input-group-text" for="inputGroupSelect01">
            Time
          </label>
          <input
            type="time"
            className="form-control"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3 w-75 my-1">
          <label className="input-group-text" for="inputGroupSelect01">
            City
          </label>
          <input
            type="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="form-control"
            placeholder="Your city"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <button
          className="btn btn-primary w-75 my-1"
          onClick={(e) => {
            e.preventDefault();
            fetch("/api/v1/bookings", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                date: date,
                time: time,
                city: city,
                developer_id: Number(params.id),
              }),
            }).then((response) => response.json());

            toast.success("You have succesfully booked this developer", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }}
        >
          Add Booking
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddBooking;
