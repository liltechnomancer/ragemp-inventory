import React from "react";

const GiveInput = () => (
  <div className="flex items-center justify-between">
    <div className="relative">
      <label
        className="text-gray-300 font-semibold absolute top-0 bg-gray-900 -my-2 pr-1 ml-1"
        style={{ lineHeight: 1 }}
      >
        Recipient
      </label>
      <input
        name="field_name"
        class="w-32 rounded px-4 py-4 h-10 bg-gray-900 text-gray-500 border border-2 border-gray-600"
        type="text"
        placeholder="Russel Jones"
      />
    </div>
    <div className="flex items-center">
      <div className="relative">
        <label
          className="text-gray-300 font-semibold absolute top-0 bg-gray-900 -my-2 pr-1 ml-1"
          style={{ lineHeight: 1 }}
        >
          Amount
        </label>
        <input
          name="field_name"
          class="w-32 rounded-l px-4 py-2 h-10 bg-gray-900 text-gray-500 border border-2 border-gray-600"
          type="text"
          placeholder="250,000,000"
        />
      </div>
      <button className="w-24 my-2 px-3 py-2 bg-gradient-to-tl from-blue-600 to-indigo-800 rounded-r text-white font-semibold shadow">
        Give
      </button>
    </div>
  </div>
);

export default GiveInput;
