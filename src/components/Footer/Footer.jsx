import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-white text-center text-surface/75 lg:text-left">
      {/* Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. */}
      <div className="container mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* TW Elements section */}
          <div className>
            <h6 className="mb-4 flex items-center justify-center font-semibold text-3xl uppercase md:justify-center">
              Location
            </h6>
            <p className="text-center">2215 John Daniel Drive</p>
            <p className="text-center">Clark, MO 65243</p>
          </div>
          {/* Products section */}
          <div>
            <h6 className="mb-4 flex items-center justify-center font-semibold text-3xl uppercase md:justify-center">
              AROUND THE WEB
            </h6>
            <div className="flex justify-center">
              <div className="rounded-full border-2 border-white p-2 mb-4 w-10 h-10 flex items-center justify-center mx-2">
                <FontAwesomeIcon icon={faFacebook} className="text-white" />
              </div>
              <div className="rounded-full border-2 border-white p-2 mb-4 w-10 h-10 flex items-center justify-center mx-2">
                <FontAwesomeIcon icon={faTwitter} className="text-white" />
              </div>
              <div className="rounded-full border-2 border-white p-2 mb-4 w-10 h-10 flex items-center justify-center mx-2">
                <FontAwesomeIcon icon={faLinkedin} className="text-white" />
              </div>
              <div className="rounded-full border-2 border-white p-2 mb-4 w-10 h-10 flex items-center justify-center mx-2">
                <FontAwesomeIcon icon={faGlobe} className="text-white" />
              </div>
            </div>
          </div>
          {/* Contact section */}
          <div>
            <h6 className="mb-4 flex items-center justify-center font-semibold text-3xl uppercase md:justify-center">
              ABOUT FREELANCER
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start text-center">
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
      {/*Copyright section*/}
      <div className="bg-[#1A252F] p-10 text-center">
        <span>Copyright © Your Website 2021</span>
      </div>
    </footer>
  );
}
