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

const Item = ({ item }) => {
  return (
    <div className="h-20 w-20 shadow-md relative m-2 rounded-md justify-between">
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
