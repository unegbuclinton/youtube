import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dashboardlayout from "../components/Dashboardlayout";
import VideoCard from "../components/VideoCard";
import { ImSpinner2 } from "react-icons/im";
import { uploadProfiles } from "../redux/DashboardSlice";

const Dashboard = () => {
  const listener = useRef(true);
  const { isLoading, pageNumber, profiles } = useSelector(
    (state) => state.dashboard
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (listener.current) {
      listener.current = false;
      dispatch(uploadProfiles(pageNumber));
    }
    const timer = setTimeout(() => {}, 1000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Dashboardlayout>
      {profiles?.map(
        ({ URL, id, profileName, caption, profileImage, likes }, idx) => {
          return (
            <VideoCard
              key={idx}
              src={URL}
              id={id}
              profileImage={profileImage}
              caption={caption}
              profileName={profileName}
              likes={likes}
            />
          );
        }
      )}
      <div className="flex justify-center">
        {isLoading && <ImSpinner2 className="mb-5 animate-spin" />}
      </div>
    </Dashboardlayout>
  );
};

export default Dashboard;

// import React, { useEffect, useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import SyncLoader from "react-spinners/SyncLoader";
// import Dashboardlayout from "../components/Dashboardlayout";
// import VideoCard from "../components/VideoCard";
// import {
//   pageCounter,
//   updateProfilesList,
//   uploadProfiles,
// } from "../redux/DashboardSlice";

// const Dashboard = () => {
//   const [isFetching, setIsFetching] = useState(false);
//   const listener = useRef(true);
//   const { isLoading, pageNumber, profiles } = useSelector(
//     (state) => state.dashboard
//   );

//   const dispatch = useDispatch();
//   const increase = () => {
//     dispatch(pageCounter());
//     setIsFetching(false);
//   };
//   useEffect(() => {
//     if (listener.current) {
//       listener.current = false;
//       dispatch(uploadProfiles(pageNumber));
//     }
//     const timer = setTimeout(() => {}, 1000);
//     return () => clearTimeout(timer);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const divRef = useRef(null);
//   const handleScroll = () => {
//     const container = divRef.current;
//     const scrollTop = container.scrollTop;
//     const clientHeight = container.clientHeight;
//     const scrollHeight = container.scrollHeight;
//     const isAtBottom = scrollTop + clientHeight + 500 >= scrollHeight - 30;
//     if (isAtBottom && !isLoading) {
//       increase();
//       dispatch(updateProfilesList(pageNumber));
//     }
//   };
//   return (
//     <Dashboardlayout>
//       {isLoading ? (
//         <div className="flex flex-col justify-center h-screen">
//           <SyncLoader color="#af00ff" loading={true} size={10} />
//         </div>
//       ) : (
//         <div
//           ref={divRef}
//           onScroll={handleScroll}
//           className="mb-[3rem] overflow-auto"
//         >
//           <VideoCard videos={profiles} />
//         </div>
//       )}
//     </Dashboardlayout>
//   );
// };

// export default Dashboard;
