import React from "react";

const FeedUserCard = ({ feedUserDetails }) => {
  const { firstName, lastName, age, gender, photoURL, about, skills } =
    feedUserDetails;
  return (
    // <div className="card card-lg h-[45rem] w-96 shrink-0 overflow-hidden bg-base-300 shadow-sm">
    <div className="card card-xl h-[45rem] w-96 shrink-0 bg-base-300 font-thin shadow-gray-400 shadow-md">
      <figure className="h-96 w-full shrink-0 overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={photoURL}
          alt={`${firstName} ${lastName}`}
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title font-sans">{firstName + " " + lastName} </h3>
        {age && gender && <p>{age + ", " + gender}</p>}
        {about && <p>{about}</p>}
        <div className="card-actions justify-between mt-15">
          <button className="btn btn-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              className="size-[1.2em]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
            Ignore
          </button>
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
