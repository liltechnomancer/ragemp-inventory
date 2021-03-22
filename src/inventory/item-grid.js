import React, { useState } from "react";

const Item = ({ item, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className="h-20 w-20 shadow-md relative m-2 rounded-md justify-between"
    >
      <div
        className="absolute h-full w-full bg-gradient-to-tl from-gray-700 to-gray-900 rounded-md"
        style={{ opacity: "35%" }}
      />
      <div className="h-20 w-20">
        <img
          src={item.img}
          className="h-20 w-20 object-cover rounded-md"
          alt=""
        />
      </div>
      <span className="absolute bottom-0 font-semibold text-xs text-gray-100 py-1 px-2">
        {item.weight}
      </span>
      <span className="absolute bottom-0 right-0 font-semibold text-xs text-gray-100 py-1 px-2">
        x{item.count}
      </span>
      <div className="absolute inset-x-6 w-full top-0 text-gray-100">
        <span className="font-semibold text-xs text-gray-100">{item.name}</span>
      </div>
    </div>
  );
};

const ItemGrid = ({ items, onSelect }) => {
  return (
    <div className="h-2/3 grid grid-flow-row grid-cols-3 mx-2 overflow-auto no-scrollbar">
      {items.map((item) => (
        <Item item={item} onSelect={() => onSelect(item)} />
      ))}
    </div>
  );
};

export default ItemGrid;
