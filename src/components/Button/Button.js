import React from 'react';

export const Button = ({ type = 'button', loadMoreImages, ...props }) => (
    <button type={type} onClick={loadMoreImages} {...props} />
  );