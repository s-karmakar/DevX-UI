import Body from "./components/Body";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./components/Login";
import Profile from "./components/Profile";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Feed from "./components/Feed";
import MyConnections from "./components/MyConnections";
import RecivedRequests from "./components/RecivedRequests";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/myconnections" element={<MyConnections />} />
              <Route path="/requests" element={<RecivedRequests />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
