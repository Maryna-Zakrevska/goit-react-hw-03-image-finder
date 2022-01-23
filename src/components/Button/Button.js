import { PropTypes } from "prop-types";
import React from "react";
export const Button = ({ type = "button", onLoadMoreImages, hasNextPage, ...props }) => {
  if (hasNextPage) {
    return <button type={type} onClick={onLoadMoreImages} {...props} />;
  }
  return null;
};

Button.propTypes = {
  type: PropTypes.string,
  hasNextPage: PropTypes.bool,
  onLoadMoreImages: PropTypes.func.isRequired,
};
