import { Fragment } from "react";
import "./Images.css";

const ImageContainer = () => {
  const imageUrls = [
    "/EventsPage/image1.jpg", 
    "/EventsPage/image2.jpg",
    "/EventsPage/image3.jpg",
    "/EventsPage/image4.jpg",
    "/EventsPage/image5.jpg",
    "/EventsPage/image6.jpg",
    "/EventsPage/image7.jpg",
];

  return (
    <Fragment>
      <div className="image-container">
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </Fragment>
  );
};

export default ImageContainer;
