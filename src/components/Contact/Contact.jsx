import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div className="text-[#2C3E50] flex flex-col items-center pt-6 mb-10 h-screen">
      <h1 className="uppercase text-4xl font-bold text-center">
        contact section
      </h1>
      <div className="mt-5 relative flex items-center text-center">
        <span className="before:content-[''] before:block before:w-20 before:h-[4px] before:bg-[#2C3E50] before:mr-2"></span>
        <FontAwesomeIcon icon={faStar} className="text-xl" />
        <span className="after:content-[''] after:block after:w-20 after:h-[4px] after:bg-[#2C3E50] after:ml-2"></span>
      </div>
      <div className="mt-20 container flex justify-center flex-col w-1/2">
        <div class="mb-10">
          <input
            type="text"
            className="peer block w-full border-b-2 border-gray-300 bg-transparent px-3 py-2 text-gray-900 placeholder:text-neutral-600  focus:outline-none focus:ring-0"
            id="exampleFormControlInput1"
            placeholder="UserName"
          />
        </div>
        <div class="mb-10">
          <input
            type="text"
            className="peer block w-full border-b-2 border-gray-300 bg-transparent px-3 py-2 text-gray-900 placeholder:text-neutral-600  focus:outline-none focus:ring-0"
            id="exampleFormControlInput1"
            placeholder="UserAge"
          />
        </div>
        <div class="mb-10">
          <input
            type="email"
            className="peer block w-full border-b-2 border-gray-300 bg-transparent px-3 py-2 text-gray-900 placeholder:text-neutral-600  focus:outline-none focus:ring-0"
            id="exampleFormControlInput1"
            placeholder="UserEmail"
          />
        </div>
        <div class="mb-10">
          <input
            type="password"
            className="peer block w-full border-b-2 border-gray-300 bg-transparent px-3 py-2 text-gray-900 placeholder:text-neutral-600  focus:outline-none focus:ring-0"
            id="exampleFormControlInput1"
            placeholder="UserPassword"
          />
        </div>
      </div>
      <button
        type="button"
        class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal bg-[#1ABC9C] text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
      >
        Send Message
      </button>
    </div>
  );
}
