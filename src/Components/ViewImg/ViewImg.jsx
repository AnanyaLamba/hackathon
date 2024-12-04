import React, { useState } from "react";
import "./ViewImg.css";
import { getRetries, setRetries } from "../../services/localstorage";
import Loader from "../Loader/Loader";

const ViewImg = ({ name, count, Img_array }) => {
  const [showLoader, setShowLoader] = useState(false);

  const fullImages = [...Img_array];
  while (fullImages.length < 4) {
    fullImages.push({ src: "", ready: false, error: false });
  }

  // Check if any image has an error
  const hasError = fullImages.some((image) => image.error);
  const retries = getRetries();

  console.log("Retries from localStorage:", retries);

  // Retry logic
  if (hasError && retries > 0) {
    console.log(`Retrying... Remaining retries: ${retries}`);
    setRetries(retries - 1);
    setShowLoader(true);

    setTimeout(() => {
      window.location.reload();
    }, 5000);
  } else {
    console.log("No retries left or no error.");
  }

  // Helper function to get the image status for the tooltip
  const getImageStatus = (image) => {
    if (image.error) return "Error";
    if (image.ready) return "Ready";
    return "Pending";
  };

  return (
    <div>
      <Loader show={showLoader} />
      <div className="image-grid">
        {fullImages.map((image, index) => (
          <div
            key={index}
            className="image-slot"
            title={`Status: ${getImageStatus(image)}`}
          >
            {image.ready ? (
              <img src={image.src} alt={`Image ${index + 1}`} />
            ) : image.error ? (
              <div className="error-icon">⚠️</div>
            ) : (
              <div className="placeholder">+</div>
            )}
          </div>
        ))}
      </div>

      {/* Show the additional large error icon if any image has an error */}
      {hasError && <div className="error-icon2">⚠️</div>}
    </div>
  );
};

export default ViewImg;
