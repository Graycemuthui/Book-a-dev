import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDevelopers } from "../redux/developer";
import { ToastContainer, toast } from "react-toastify";
import "./DeleteDev.css";

import "react-toastify/dist/ReactToastify.css";

function DeleteDevelopers() {
  const dispatch = useDispatch();
  const [fetchedDevelopers, setFetchedDevelopers] = useState([]);
  const developers = useSelector((state) => state.developers.developers);

  useEffect(() => {
    dispatch(fetchDevelopers());
    setFetchedDevelopers(developers);
  }, []);
  console.log(developers);
  const displayDevelopers = fetchedDevelopers.map((developer) => (
    <li key={developer.id} class="cards_item">
      <div class="del-card">
        <div class="card_image"><img src={developer.photo} /></div>
        <div class="card_content">
          <h2 class="del-card_title">{developer.name}</h2>
          <p class="del-card_text">{developer.bio}</p>
          <button
            class="del-btn card_btn"
            onClick={(e) => {
              e.preventDefault();
              fetch(`/api/v1/developers/${developer.id}`, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
              })
                .then((res) => res.json())
                .then((data) => {
                  setFetchedDevelopers(data);
                });

              toast.success("You have succesfully deleted developer.", {
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
            Delete
          </button>
          <ToastContainer />
        </div>
      </div>
    </li>
  ));

  return (
    <div class="del-main">
      <ul class="del-cards">
        {displayDevelopers}
      </ul>
    </div>
  );
}

export default DeleteDevelopers;
