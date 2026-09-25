import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";

const NavBar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      navigate("/login");
    } catch (error) {
      //error logic
      console.error("Logout failed:", error.response?.data || error.message);
    }
  };

  return (
    <div className="navbar bg-base-300 shadow-sm font-mono">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-2xl">
          👫 Dev X
        </Link>
      </div>
      {user && (
        <div className="flex gap-2">
          <p className="mt-2">Welcome {user?.firstName}</p>
          <div className="dropdown dropdown-end mx-4 ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="user photo in Navbar" src={user?.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a to="/login" onClick={handleLogout}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
