import React from "react";

const FeedUserCard = ({ feedUserDetails }) => {
  const { firstName, lastName, age, gender, photoURL, about, skills } =
    feedUserDetails;
  return (
    <div className="card card-lg bg-base-300 w-96 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName} </h2>
        {age && gender && (
          <p>
            {" "}
            {age} {" - "} {gender}
          </p>
        )}
        {about && <p>{about}</p>}
        <div className="card-actions justify-between mt-15">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">
            Like{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="size-[1.2em]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedUserCard;
