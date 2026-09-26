import React, { useState } from "react";
import FeedUserCard from "./FeedUserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setfirstName] = useState(user.firstName);
  const [lastName, setlastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender?.toLowerCase() ?? "");
  const [photoURL, setPhotoURL] = useState(user.photoURL);
  //   const [skills, setSkills] = useState(user.skills);
  const [about, setAbout] = useState(user.about);
  const dispatch = useDispatch();
  const [showToast, setshowToast] = useState(false);

  const updateProfile = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/myProfile/edit",
        {
          firstName: firstName,
          lastName: lastName,
          age: age,
          gender: gender,
          photoURL: photoURL,
          about: about,
        },
        { withCredentials: true },
      );
      console.log(res);
      dispatch(addUser(res?.data?.updatedProfile));
      setshowToast(true);
      setTimeout(() => setshowToast(false), 3000);
      //   alert(res.data.message);
    } catch (err) {
      console.error(
        err.response?.status + "  this error   " + err.response?.data,
      );
    }
  };

  return (
    <>
      <div className="flex items-center justify-center gap-8">
        <div className="card card-xl h-[45rem] w-96 shrink-0 bg-base-300 font-mono shadow-sm border rounded-box">
          <div className="card-body items-center ">
            {showToast && (
              <div className="toast toast-top toast-center">
                <div className="alert alert-success">
                  <span>User Updated Successfully</span>
                </div>
              </div>
            )}
            <h2 className="card-title sticky top-0 z-10 bg-base-300">
              Edit Profile
            </h2>
            <div>
              <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-xs p-4 ">
                {/* <legend className="fieldset-legend">Enter Your Credentias</legend> */}
                <label className="label  text-accent ">First Name</label>
                <input
                  type="text"
                  className="input validator "
                  required
                  value={firstName}
                  onChange={(e) => setfirstName(e.target.value)}
                />
                <label className="label text-accent">Last Name</label>
                <input
                  type="text"
                  className="input validator"
                  required
                  value={lastName}
                  onChange={(e) => setlastName(e.target.value)}
                />
                <label className="label text-accent">Photo URL</label>
                <input
                  type="url"
                  className="input validator"
                  required
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                />
                <label className="label text-accent ">Gender</label>
                <select
                  className="select"
                  value={gender ?? ""}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="" disabled>
                    Choose gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <label className="label text-accent">Age</label>
                <input
                  type="Number"
                  className="input validator"
                  required
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
                <label className="label text-accent ">About</label>
                <textarea
                  placeholder=""
                  className="textarea "
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                ></textarea>

                {/* <label className="label text-accent">Skills</label>
            <input
              type="text"
              className="input validator"
              required
              value={skills}
              onChange={(e) => e.target.value}
            /> */}
                {/* Email */}
                <button
                  className="btn bg-amber-100 text-black border-[#e5e5e5] mt-8f"
                  onClick={updateProfile}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="size-5"
                  >
                    <path d="m2.695 14.762-1.262 3.155a.5.5 0 0 0 .65.65l3.155-1.262a4 4 0 0 0 1.343-.886L17.5 5.501a2.121 2.121 0 0 0-3-3L3.58 13.419a4 4 0 0 0-.885 1.343Z" />
                  </svg>
                  Update Profile
                </button>
              </fieldset>
            </div>
          </div>
        </div>
        <FeedUserCard
          feedUserDetails={{
            firstName,
            lastName,
            age,
            gender,
            photoURL,
            about,
          }}
        />
      </div>
    </>
  );
};

export default EditProfile;
