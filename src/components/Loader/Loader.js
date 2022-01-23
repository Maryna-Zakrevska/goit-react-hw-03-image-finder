import React from "react";
import { BallTriangle } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {LoaderDivStyled} from "./Loader.styled"

export const Loader = () => {
  return (
    <LoaderDivStyled>
      <BallTriangle color="#a8edea" height={200} width={200} />
    </LoaderDivStyled>
  );
};
