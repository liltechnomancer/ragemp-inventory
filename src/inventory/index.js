import React, { useState, useEffect } from "react";
import ItemGrid from "./item-grid";
import InventoryDetails from "./inventory-details";

const Inventory = ({ data }) => {
  const [selectedItem, selectItem] = useState(data[0]);
  useEffect(() => {
    // ...
    // ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // return () => {
    //   ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    // };
  });
  return (
    <div className="background-topology dark max-w-3xl p-2 pb-4 m-auto my-10 border rounded-md">
      <div className="flex justify-between mx-6 items-center">
        <h1 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-l from-gray-400 to-gray-200 font-semibold leading-tight">
          Inventory
        </h1>
        <div class="modal-close cursor-pointer z-50">
          <svg
            class="fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 18 18"
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </svg>
        </div>
      </div>
      <div className="flex justify-between mx-2" style={{ maxHeight: "350px" }}>
        <ItemGrid items={data} onSelect={selectItem} />
        <InventoryDetails
          item={selectedItem}
          weight={{ max: 500, current: 125 }}
          cash={540.45}
          bank={530223889.15}
        />
      </div>
    </div>
  );
};

export default Inventory;
