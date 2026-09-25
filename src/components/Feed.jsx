import axios from "axios";
import FeedUserCard from "./FeedUserCard";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";

const Feed = () => {
  const feed = useSelector((state) => state?.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });
      const feedData = res?.data?.data;
      dispatch(addFeed(feedData));
    } catch (err) {
      //TODO : error logic
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <div className="flex items-center justify-center">
      {feed && <FeedUserCard feedUserDetails={feed[0]} />}
    </div>
  );
};

export default Feed;
