import React from "react";


export const ImageGalleryItem = ({
  image: { webformatURL, largeImageURL, tags },
  openModal,
}) => {
  return (
    <li>
      <img src={webformatURL} alt={tags} openModal={openModal} />
    </li>
  );
};
