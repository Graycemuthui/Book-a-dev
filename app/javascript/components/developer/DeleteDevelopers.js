import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDevelopers } from "../redux/developer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteDevelopers = () => {
  const dispatch = useDispatch();
  const [fetchedDevelopers, setFetchedDevelopers] = useState([]);
  const developers = useSelector((state) => state.developers.developers);

  useEffect(() => {
    dispatch(fetchDevelopers());
    setFetchedDevelopers(developers);
  }, []);

  const displayDevelopers = fetchedDevelopers.map((developer) => (
    <div className="delete-page">
      <div key={developer.id}>
        <h3>{developer.name}</h3>
        <button
          className="btn btn-danger"
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
            toast.success("You have succesfully deleted this developer", {
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
  ));

  return <div>{displayDevelopers}</div>;
};

export default DeleteDevelopers;
