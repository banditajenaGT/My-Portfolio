import React from "react";

const Alert = ({ type, text }) => {
  return (
    <div className="fixed top-10 left-0 right-0 flex justify-center items-center">
      <div
        className={`${
          type === "danger" ? "bg-red-800" : "bg-green-800"
        } p-2 text-indigo-100 leading-none lg:rounded-full sm:rounded-md flex lg:inline-flex`}
        role="alert"
      >
        <p
          className={`${
            type === "danger" ? "bg-red-600" : "bg-green-500"
          } flex rounded-full uppercase px-2 py-1 font-semibold mr-3 text-xs`}
        >{`${type === "danger" ? "Failed" : "Success"}`}</p>
        <p className="mr-2 text-left flex items-center">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
