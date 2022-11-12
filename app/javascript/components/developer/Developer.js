import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDevelopers } from "../redux/developer";
import { useParams, Link } from "react-router-dom";
import { GoGear } from "react-icons/go";
import { AiOutlineRightCircle } from "react-icons/ai";
import { BiLeftArrow, BiLeftArrowAlt } from "react-icons/bi";

const Developer = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const developers = useSelector((state) => state.developers.developers);
  useEffect(() => {
    dispatch(fetchDevelopers());
  }, [dispatch]);

  const foundDeveloper = developers.find(
    (developer) => developer.id === parseInt(params.id)
  );

  const displayDeveloper = foundDeveloper ? (
    <div className="developer">
      <div className="image-dev">
        <img src={foundDeveloper.photo} alt="new" className="dev-image" />
        <div className="back">
          <BiLeftArrow className="B" />
        </div>
      </div>
      <div className="info-cont" >
        <div className="info-cont2">
          <h2>{foundDeveloper.name}</h2>
          <p className="p-2 bio">- {foundDeveloper.bio}</p>
        </div>
        <div className="contacts">
          <p className="p-2">Email : {foundDeveloper.email}</p>
          <p className="p-2">City : {foundDeveloper.city}</p>
          <p className="p-2">Phone : {foundDeveloper.phone}</p>
          <a href={foundDeveloper.github} className="p-2 ">
            Github : {foundDeveloper.name}
          </a>
        </div>
        <Link to={`/add-booking/${foundDeveloper.id}`} className="link">
          <button className=" btn ">
            <GoGear /> Book Developer <AiOutlineRightCircle />
          </button>
        </Link>
      </div>
    </div>
  ) : null;

  return <div>{displayDeveloper}</div>;
};

export default Developer;
