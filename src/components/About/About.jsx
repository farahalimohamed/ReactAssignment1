import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div className="bg-[#1ABC9C] text-white flex flex-col items-center justify-center h-[80vh]">
      <h1 className="uppercase text-4xl font-bold text-center">
        about component
      </h1>
      <div className="mt-5 relative flex items-center text-center">
        <span className="before:content-[''] before:block before:w-20 before:h-[4px] before:bg-white before:mr-2"></span>
        <FontAwesomeIcon icon={faStar} className="text-2xl" />
        <span className="after:content-[''] after:block after:w-20 after:h-[4px] after:bg-white after:ml-2"></span>
      </div>
      <div className="mt-5 gap-x-5 flex container">
        <p>
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
        <p>
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
      </div>
    </div>
  );
}
