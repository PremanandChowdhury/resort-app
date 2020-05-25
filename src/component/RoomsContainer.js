// Higher Order Component

import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { withRoomConsumer } from "../Context";
import Loading from "./Loading";

function RoomContainer({ context }) {
  const { rooms, loading, sortedRooms } = context;

  // loading component
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);

// another method

// import React from "react";
// import RoomFilter from "./RoomFilter";
// import RoomList from "./RoomList";
// import { RoomConsumer } from "../Context";
// import Loading from "./Loading";

// export default function RoomContainer() {
//   return (
//     <RoomConsumer>
//       {/* passing value to the function */}
//       {(value) => {
//         // console.log(value); // to check what value are we getting
//         // Destructure the props we need from the values object
//         const { loading, sortedRooms, rooms } = value;

//         // condition rendering for the loading
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             <RoomFilter rooms={sortedRooms} />
//             <RoomList rooms={rooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
