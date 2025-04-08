import React, { useState } from "react";

export const ThumbnailCarousel = () => {
  const [imagesIndex, setImagesIndex] = useState<number>(0);
  const imagesArr = [
    "https://assets.benjaminmoore.com/transform/855b0e0a-d749-4b65-a014-78e9d30c326f/Dark-Blue-Paint-Wall-Color-Red-Couch-305x456px",
    "https://assets.benjaminmoore.com/transform/fef6e463-6dbe-4055-861b-54df345c8e23/Great-Room-Green-Ceiling-Trim-White-Paint-305x456px",
  ];
  const handleImageChange = (selectedIndex: number) => {
    setImagesIndex(selectedIndex);
  };
  return (
    <>
      <div className="carousel-container">
        <div className="carousel-main-wrapper">
          <img src={imagesArr[imagesIndex]} />
        </div>
        <div className="carousel-thumbnail-wrapper">
          {imagesArr.map((e, i) => {
            return (
              <a onClick={() => handleImageChange(i)}>
                <img src={e} alt="" />
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};
