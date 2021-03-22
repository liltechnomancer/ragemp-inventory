import React from "react";
import DropInput from "./drop-input";
import GiveInput from "./give-input";
import UseInput from "./use-input";
import CashAndWeight from "./cash-and-weight";

const ItemExpanded = ({ item }) => {
  return (
    <div className="background-hexagon shadow-lg px-3 py-3 flex border border-gray-900 rounded-md justify-between">
      <div className="flex-grow">
        <span className="font-bold text-gray-100">{item.name}</span>
        <span className="font-light text-sm text-gray-200 m-2">
          {item.weight}
        </span>
        <div className="leading-none text-sm text-gray-200">
          {item.description}
        </div>
      </div>
      <div className="flex-shrink-0 h-20 w-20 ml-2">
        <img
          src={item.img}
          className="h-20 w-20 object-cover rounded-md"
          alt=""
        />
      </div>
    </div>
  );
};

const InventoryDetails = ({ item, weight, cash, bank }) => {
  return (
    <div className="flex flex-col justify-between flex-grow-0 w-1/2 mt-2">
      <ItemExpanded item={item} />
      <div className="flex w-full justify-between">
        <UseInput />
        <DropInput />
      </div>
      <GiveInput />
      <CashAndWeight weight={weight} cash={cash} bank={bank} />
    </div>
  );
};

export default InventoryDetails;
