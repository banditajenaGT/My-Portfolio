import { Html } from "@react-three/drei";
import React from "react";

const Loader = () => {
  return (
    <Html>
      <div  className="absolute top-[-4rem] left-[-1.8rem]">
        <div className="w-20 h-20 border-2 border-opacity-50 border-black-100 border-t-black-500 rounded-full animate-spin" />
      </div>
    </Html>
  );
};

export default Loader;
