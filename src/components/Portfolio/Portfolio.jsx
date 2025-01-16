import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import image1 from "../../../public/assets/poert1.png";
import image2 from "../../../public/assets/port2.png";
import image3 from "../../../public/assets/port3.png";

export default function Portfolio() {
  const [lightBoxOpen, setLightBoxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [image1, image2, image3, image1, image2, image3];

  const openLightBox = (image) => {
    setCurrentImage(image);
    setLightBoxOpen(true);
  };

  const closeLightBox = () => {
    setLightBoxOpen(false);
    setCurrentImage("");
  };

  return (
    <div className="text-[#2C3E50] flex flex-col items-center pt-6 mb-10 h-screen">
      <h1 className="uppercase text-4xl font-bold text-center">
        portfolio component
      </h1>
      <div className="mt-5 relative flex items-center text-center">
        <span className="before:content-[''] before:block before:w-20 before:h-[4px] before:bg-[#2C3E50] before:mr-2"></span>
        <FontAwesomeIcon icon={faStar} className="text-xl" />
        <span className="after:content-[''] after:block after:w-20 after:h-[4px] after:bg-[#2C3E50] after:ml-2"></span>
      </div>
      <div className="mt-5 container grid grid-cols-3 gap-5">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            onClick={() => openLightBox(image)}
          >
            <img
              src={image}
              alt={`img${index + 1}`}
              className="rounded-md transition-transform duration-300 ease-in-out"
            />
            <div className="absolute inset-0 bg-[#1ABC9C] rounded-md bg-opacity-80 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              <FontAwesomeIcon icon={faPlus} className="text-white text-6xl" />
            </div>
          </div>
        ))}
      </div>

      {lightBoxOpen && (
        <div
          className="fixed inset-0 bg-[#0d6efd] bg-opacity-20 flex items-center justify-center z-50"
          onClick={closeLightBox}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage}
              alt="Lightbox"
              className="w-[60vw] h-[60vh] object-contain rounded-md"
            />
            <button
              onClick={closeLightBox}
              className="absolute top-4 right-44 bg-white rounded-full p-2 px-3.5 text-black text-xl"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
