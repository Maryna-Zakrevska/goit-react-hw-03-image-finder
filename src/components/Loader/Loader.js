import React from "react";
import { BallTriangle } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const Loader = () => {
  return (
    <div>
      <BallTriangle color="#00BFFF" height={80} width={80} />
    </div>
  );
};
