import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HiOutlineCamera } from "react-icons/hi";
import { RxMagnifyingGlass } from "react-icons/rx";

const Notification = () => {
  const { userData } = useSelector((state) => state.dashboard);
  const { email, balance } = userData;
  const navigate = useNavigate();
  const checkout = () => {
    navigate("/checkout");
  };
  return (
    <div className="fixed h-[54px] top-0 z-20 w-full flex bg-transparent justify-end gap-[75px] text-white items-center pr-5 py-3 mx-2">
      <div className="flex items-center gap-3">
        <RxMagnifyingGlass size={25} />
        <HiOutlineCamera color="#fff" size={25} />
      </div>
    </div>
  );
};

export default Notification;
