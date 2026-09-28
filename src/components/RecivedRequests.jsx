import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestsSlice";

const RecivedRequests = () => {
  const receivedRequests = useSelector((state) => state.requests);
  const dispatch = useDispatch();

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/request/received", {
        withCredentials: true,
      });

      dispatch(addRequests(res?.data?.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!receivedRequests) return;

  return (
    <div>
      <h1 className="text-3xl mb-5">Recevied Requests</h1>
      <ul className="list bg-base-200 rounded-box shadow-md w-4xl">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
          Accept or Reject connection requests
        </li>

        {receivedRequests?.map((element) => {
          return (
            <li key={element._id} className="list-row">
              <div>
                <img
                  className="size-10 rounded-box"
                  alt="Tailwind CSS list item"
                  src={element?.fromUserID.photoURL}
                />
              </div>
              <div>
                <div className="text-lg">
                  {element?.fromUserID?.firstName +
                    " " +
                    element?.fromUserID?.lastName}
                  {/* {connections[0].age && connections[0].gender && (
                <p>
                  {connections[0].age + ", "}
                  {connections[0].gender}{" "}
                </p>
              )} */}
                </div>
                <div className="text  font-light opacity-60">
                  {element?.fromUserID?.about}
                </div>
              </div>
              <button className="btn btn-circle btn-ghost btn-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <button className="btn btn-ghost btn-secondary ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecivedRequests;
