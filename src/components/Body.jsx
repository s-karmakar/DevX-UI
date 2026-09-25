import axios from "axios";
import NavBar from "./NavBar";
import { Outlet, useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";
import Footer from "./Footer";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const restoreUser = async () => {
    try {
      if (user) return;
      const url = BASE_URL + "/myProfile/view";
      const res = await axios.get(url, { withCredentials: true });

      const userData = res?.data;
      // console.log(userData);
      // console.log("restore user called");
      dispatch(addUser(userData));
    } catch (err) {
      if (err.status === 401) {
        navigate("/login");
      }
      console.error(err);
    }
  };

  useEffect(() => {
    restoreUser();
  }, []);

  return (
    <div>
      <div className="flex min-h-screen flex-col">
        <NavBar />

        <main className="flex flex-1 items-center justify-center">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Body;
