import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { IoIosShareAlt } from "react-icons/io";
import { MdOutlineInsertComment } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
// import dayjs from "dayjs";
import { getUserData, likeAPost } from "../redux/DashboardSlice";
import { useState } from "react";
const Stamps = ({ likes, comments, id }) => {
  const dispatch = useDispatch();
  const [forLike, setForLike] = useState(false);
  // const formatDate = dayjs(nextTime).format("ddd DD/MM hh:mm");
  const getLike = (id) => {
    setForLike((prev) => !prev);
    dispatch(likeAPost(id)).then(() => {
      dispatch(getUserData());
      if (!limit) return;
      toast.error(
        `You have reached your 100 likes daily limit! Come back at ${formatDate}`
      );
    });
  };

  const disLikeVideo = (id) => {
    console.log(forLike);
    if (forLike) {
      dispatch(likeAPost(id));
      setForLike(false);
    } else {
      return;
    }
  };
  return (
    <div className="absolute bottom-[60px] right-3 flex flex-col items-center gap-4 text-white z-10">
      <div onClick={() => getLike(id)} className="flex flex-col items-center">
        {forLike && <FiThumbsUp size={28} color="#fff" fill="#2a84bf" />}
        {!forLike && <FiThumbsUp size={28} color="#fff" />}
        <span className="text-sm font-semibold">{likes}</span>
      </div>
      <div className="flex flex-col items-center">
        <FiThumbsDown size={28} color="#fff" onClick={() => disLikeVideo(id)} />
        <span className="text-sm font-semibold">Dislike</span>
      </div>
      <div className="flex flex-col items-center">
        <MdOutlineInsertComment size={28} color="#fff" />
        <span className="text-sm font-semibold">{comments}</span>
      </div>
      <div className="flex flex-col items-center">
        <IoIosShareAlt size={28} color="#fff" />
        <span className="text-sm font-semibold">Share</span>
      </div>
      <BsThreeDots size={28} color="#fff" />
    </div>
  );
};

export default Stamps;
