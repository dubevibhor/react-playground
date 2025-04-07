import React, { useState } from "react";

export const ImageCarousel = () => {
  const imgList = [
    "https://assets.benjaminmoore.com/transform/855b0e0a-d749-4b65-a014-78e9d30c326f/Dark-Blue-Paint-Wall-Color-Red-Couch-305x456px",
    "https://assets.benjaminmoore.com/transform/fef6e463-6dbe-4055-861b-54df345c8e23/Great-Room-Green-Ceiling-Trim-White-Paint-305x456px",
    "https://assets.benjaminmoore.com/transform/9220a612-1b96-4c62-82ea-b23ed42f1c92/White-Paint-Staircase-Red-Accent-Wall-305x456px",
  ];
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrevious = () => {
    let nextIndex: number;
    if (currentIndex == 0) nextIndex = imgList.length - 1;
    else nextIndex = currentIndex - 1;
    setCurrentIndex(nextIndex);
  };
  const handleNext = () => {
    let nextIndex: number;
    if (currentIndex == imgList.length - 1) nextIndex = 0;
    else nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
  };
  return (
    <>
      <div style={{ position: "relative" }} className="carousel-container">
        <button
          style={{
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translateY(-50%)",
          }}
          onClick={handlePrevious}
        >
          &lt;
        </button>
        <img
          style={{ width: "100%", height: "456px", objectFit: "cover" }}
          src={imgList[currentIndex]}
          alt=""
        />
        <button
          style={{
            position: "absolute",
            top: "50%",
            right: "0",
            transform: "translateY(-50%)",
          }}
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </>
  );
};
