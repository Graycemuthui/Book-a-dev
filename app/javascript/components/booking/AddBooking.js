import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import { code } from "./assets/images/code.jpg";
import { ToastContainer, toast } from "react-toastify";


function AddBooking() {
  const params = useParams();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [city, setCity] = useState("");
  return (
        <div className="booking-form">
          <div className="booking-titles">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <label htmlFor="time">Time</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <label htmlFor="city">City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button
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
                });
              }}
            >
              Add Booking
            </button>
          </div>
        </div>
  );
}

export default AddBooking;
