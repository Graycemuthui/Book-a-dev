import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AddDev = () => {
  const [developerName, setDeveloperName] = useState("");
  const [developerEmail, setDeveloperEmail] = useState("");
  const [developerStack, setDeveloperStack] = useState("");
  const [developerBio, setDeveloperBio] = useState("");
  const [developerPhoto, setDeveloperPhoto] = useState("");
  const [developerCity, setDeveloperCity] = useState("");
  const [developerPhone, setDeveloperPhone] = useState("");
  const [developerGithub, setDeveloperGithub] = useState("");

  const uploadImage = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "e2e6z2lx");
    fetch("https://api.cloudinary.com/v1_1/dakiak4mc/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setDeveloperPhoto(data.secure_url);
      });
  };

  return (
    <div class="page-wrapper bg-gra-01 p-t-50 p-b-50 font-poppins">
      <div class="wrapper wrapper--w780">
        <div class="card card-3">
          <div class="card-heading"></div>
          <div class="card-body">
            <h2 class="title">Add Developer</h2>
            <form>
              <div class="input-group">
                <input
                  type="file"
                  id="file-selector"
                  class="input--style-3"
                  onChange={(e) => {
                    uploadImage(e.target.files);
                  }}
                />
              </div>
              <div class="input-group">
                <input
                  class="input--style-3"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={developerName}
                  onChange={(e) => {
                    setDeveloperName(e.target.value);
                  }}
                />
              </div>
              <div class="input-group">
                <input
                  class="input--style-3"
                  type="text"
                  name="stack"
                  placeholder="Stack"
                  value={developerStack}
                  onChange={(e) => {
                    setDeveloperStack(e.target.value);
                  }}
                />
              </div>
              <div class="input-group">
                <input
                  class="input--style-3"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={developerEmail}
                  onChange={(e) => {
                    setDeveloperEmail(e.target.value);
                  }}
                />
              </div>
              <div class="input-group">
                <input
                  class="input--style-3"
                  type="text"
                  name="bio"
                  placeholder="Bio"
                  value={developerBio}
                  onChange={(e) => {
                    setDeveloperBio(e.target.value);
                  }}
                />
              </div>
              <div class="input-group">
                <input
                  class="input--style-3"
                  type="text"
                  name="city"
                  placeholder="City"
                  value={developerCity}
                  onChange={(e) => {
                    setDeveloperCity(e.target.value);
                  }}
                />
              </div>
              <div class="input-group">
                <input
                  class="input--style-3"
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={developerPhone}
                  onChange={(e) => {
                    setDeveloperPhone(e.target.value);
                  }}
                />
              </div>
              <div class="input-group">
                <input
                  class="input--style-3"
                  type="text"
                  name="github"
                  placeholder="GitHub"
                  value={developerGithub}
                  onChange={(e) => {
                    setDeveloperGithub(e.target.value);
                  }}
                />
              </div>
              <div class="p-t-10">
                <button
                  class="add-btnno"
                  onClick={(e) => {
                    e.preventDefault();
                    fetch("/api/v1/developers", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        name: developerName,
                        email: developerEmail,
                        stack: developerStack,
                        photo: developerPhoto,
                        bio: developerBio,
                        city: developerCity,
                        github: developerGithub,
                        phone: developerPhone,
                      }),
                    })
                      .then((response) => response.json())
                      .then((data) => {
                        dispatch(fetchDevelopers());
                      });
                      toast.success("You have succesfully added developer.", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      });

                      setDeveloperBio("");
                      setDeveloperCity("");
                      setDeveloperEmail("");
                      setDeveloperGithub("");
                      setDeveloperName("");
                      setDeveloperPhone("");
                      setDeveloperPhoto("");
                      setDeveloperStack("");

                  }}
                >
                  Add Developer
                </button>
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDev;
