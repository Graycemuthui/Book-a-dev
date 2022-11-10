import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDevelopers } from "../redux/developer";
import { ToastContainer, toast } from "react-toastify";
import "./reserve.css";

import "react-toastify/dist/ReactToastify.css";

function Reserve() {
  const dispatch = useDispatch();
  const developers = useSelector((state) => state.developers.developers);
  useEffect(() => {
    dispatch(fetchDevelopers());
  }, []);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [city, setCity] = useState("");
  const [developerid, setDeveloperid] = useState("");
  return (
    <div className="reserved-dev">
      <h2 className="reserve-heading text-decoration-underline">
        RESERVE A DEVELOPER
      </h2>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h2 className="text-center">Please select a developer</h2>
        <select
          onChange={(e) => setDeveloperid(e.target.value)}
          className="w-75 h-25 form-select my-1"
        >
          {developers.map((developer) => (
            <option key={developer.id} value={developer.id}>
              {developer.name}
            </option>
          ))}
        </select>
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
                developer_id: developerid,
              }),
            })
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
              });

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
}

export default Reserve;
