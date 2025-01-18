import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "../assets/Anish_profile.jpg";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const UserProfile = () => {
  const [avatar, setAvatar] = useState(Avatar);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error , setError] = useState("")

  const handelFileChange = (event)=>{
    const file = event.target.files[0]; // get the frist selected file
    if(file) {

      const validExtensions = ["image/png", "image/jpeg", "image/jpg"]; // Allowed MIME types
    if (!validExtensions.includes(file.type)) {
      setError("Please select a valid image file (jpg, jpeg, png).");
      return;
    }

    setError(""); // Clear any previous error

      const reader = new FileReader();
      reader.onload = ()=>{
        setAvatar(reader.result); //set the image url as the result the FileReader
      }

      reader.readAsDataURL(file) // Read the file as the data url
    }
  }

  return (
    <>
      <section className="profile register">
        <div className="container profile_container">
          <Link to={"/myposts/Anish"} className="btn">
            My posts
          </Link>

          <div className="profile_details">
            <div className="avatar_wrapper">
              <div className="profile_avatar">
                <img src={avatar} alt="" />
              </div>
              {/* Form to update avatar */}

              <form action="" className="avatar_form">
                <input
                  type="file"
                  name="avatar"
                  id="avatar"
                  onChange={handelFileChange}
                  accept="png , jpg , jpeg"
                />

                <label htmlFor="avatar">
                  <FaEdit />
                </label>
              </form>
              <button className="profile_avatar-btn">
                <FaCheck />
              </button>
            </div>
          <p className="error_style">{error}</p>
            <h1>Anish Yadav</h1>
            {/* Form to update user details */}

            <form action="" className="form profile_form register_form">
              <p className="form_error-message">User Update Detail</p>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Current password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="New password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm new password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />

              <button type="submit" className="btn primary">
                Update details
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
