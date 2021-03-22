import React from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

const CashAndWeight = ({ weight = {}, cash, bank }) => (
  <div className="text-right flex justify-between">
    <div className="flex items-end justify-end text-right">
      <div className="h-6 w-6 mx-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="text-gray-500"
          viewBox="0 0 50 50"
        >
          <path d="M 25 2 C 21.148207 2 18 5.1482075 18 9 C 18 10.071802 18.248319 11.089234 18.683594 12 L 8.8203125 12 C 8.3543125 12 7.9507031 12.321391 7.8457031 12.775391 L 0.025390625 46.775391 C -0.042609375 47.072391 0.027796875 47.384047 0.21679688 47.623047 C 0.40579687 47.862047 0.695 48 1 48 L 49 48 C 49.305 48 49.59225 47.861047 49.78125 47.623047 C 49.97025 47.385047 50.042609 47.072391 49.974609 46.775391 L 42.154297 12.775391 C 42.049297 12.321391 41.645688 12 41.179688 12 L 31.316406 12 C 31.751681 11.089234 32 10.071802 32 9 C 32 5.1482075 28.851793 2 25 2 z M 25 4 C 27.768207 4 30 6.2317925 30 9 C 30 10.140164 29.607697 11.164359 28.966797 12 L 21.033203 12 C 20.392303 11.164359 20 10.140164 20 9 C 20 6.2317925 22.231793 4 25 4 z M 15.572266 22.380859 L 17.791016 22.380859 L 17.791016 30.183594 L 17.943359 30.183594 L 21.554688 26.179688 L 24.130859 26.179688 L 20.232422 30.388672 L 24.398438 36 L 21.716797 36 L 18.578125 31.789062 L 17.791016 32.578125 L 17.791016 36 L 15.572266 36 L 15.572266 22.380859 z M 29.115234 26.003906 C 30.447234 26.003906 31.609484 26.664516 32.146484 27.728516 L 32.298828 27.728516 L 32.298828 26.164062 L 34.435547 26.164062 L 34.435547 35.980469 C 34.435547 38.242469 32.629344 39.664062 29.777344 39.664062 C 27.264344 39.664062 25.619453 38.557 25.439453 36.875 L 27.667969 36.875 C 27.811969 37.546 28.5975 37.974609 29.8125 37.974609 C 31.3325 37.974609 32.21875 37.259156 32.21875 36.035156 L 32.21875 34.183594 L 32.066406 34.183594 C 31.503406 35.230594 30.439078 35.802734 29.080078 35.802734 C 26.612078 35.802734 25.074219 33.888266 25.074219 30.947266 C 25.074219 27.951266 26.620234 26.003906 29.115234 26.003906 z M 29.775391 27.888672 C 28.228391 27.888672 27.353516 29.077266 27.353516 30.947266 C 27.353516 32.815266 28.228391 33.996094 29.775391 33.996094 C 31.322391 33.996094 32.253906 32.815266 32.253906 30.947266 C 32.253906 29.078266 31.313391 27.888672 29.775391 27.888672 z" />
        </svg>
      </div>
      <h3 className="text-md bg-clip-text text-transparent bg-gradient-to-l from-gray-600 to-gray-400 font-semibold leading-tight">
        {weight.current + "/" + weight.max}
      </h3>
    </div>
    <div>
      <div className="flex items-center justify-end text-right">
        <div className="h-6 w-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="text-green-500"
          >
            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <h3 className="text-3xl bg-clip-text text-transparent bg-gradient-to-l from-green-600 to-green-400 font-semibold leading-tight">
          {formatter.format(cash)}
        </h3>
      </div>
      <div className="flex items-center justify-end text-right">
        <div className="h-6 w-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="text-indigo-500"
            fill="currentColor"
          >
            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
            <path
              fill-rule="evenodd"
              d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <h3 className="text-3xl bg-clip-text text-transparent bg-gradient-to-l from-indigo-600 to-indigo-400 font-semibold leading-tight">
          {formatter.format(bank)}
        </h3>
      </div>
    </div>
  </div>
);

export default CashAndWeight;
