import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionsSlice";

const MyConnections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((state) => state.connections);

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/request/myConnections", {
        withCredentials: true,
      });

      // console.log(res.data.data);
      dispatch(addConnection(res?.data?.data));
      //   console.log(connections);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;

  return (
    <div>
      <h1 className="text-3xl mb-5">Connections</h1>
      <ul className="list bg-base-200 rounded-box shadow-md w-4xl">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
          View Your Connections
        </li>

        {connections?.map((connection) => {
          return (
            <li key={connection._id} className="list-row">
              <div>
                <img
                  className="size-10 rounded-box"
                  alt="Tailwind CSS list item"
                  src={connection?.photoURL}
                />
              </div>
              <div>
                <div className="text-lg">
                  {connection?.firstName + " " + connection?.lastName}
                  {/* {connections[0].age && connections[0].gender && (
                <p>
                  {connections[0].age + ", "}
                  {connections[0].gender}{" "}
                </p>
              )} */}
                </div>
                <div className="text  font-light opacity-60">
                  {connection?.about}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MyConnections;
