import React from "react";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({ images = [{}], openModal }) => {
  return (
    <div>
      <ul className="gallery" >
      {images.map(image => (
        <ImageGalleryItem
        key={image.id}
        image={image}
        openModal={openModal}
      />
      ))}
      </ul>
    </div>
  );
};
