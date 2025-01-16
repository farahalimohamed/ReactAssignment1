import { NavLink } from "react-router-dom";
import { Collapse, initTWE } from "tw-elements";

export default function Navbar() {
  initTWE({ Collapse });
  return (
    <>
      {/* Main navigation container */}
      <nav
        className="relative flex w-full flex-nowrap items-center justify-between bg-[#2C3E50] shadow-dark-mild hover:text-neutral-700 focus:text-neutral-700  lg:flex-wrap lg:justify-start lg:py-8"
        data-twe-navbar-ref
      >
        <div className="container">
          <div className="flex w-full flex-wrap items-center justify-between px-3">
            <div className="ms-2">
              <NavLink
                className="text-3xl text-black dark:text-white uppercase font-bold"
                to=""
              >
                Start Framework
              </NavLink>
            </div>
            {/* Hamburger button for mobile view */}
            <button
              className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
              type="button"
              data-twe-collapse-init
              data-twe-target="#navbarSupportedContent3"
              aria-controls="navbarSupportedContent3"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {/* Hamburger icon */}
              <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
            {/* Collapsible navbar container */}
            <div
              className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
              id="navbarSupportedContent3"
              data-twe-collapse-item
            >
              {/* Left links */}
              <div
                className="list-style-none ms-auto flex flex-col ps-0 lg:mt-1 lg:flex-row"
                data-twe-navbar-nav-ref
              >
                {/* Home link */}
                <div
                  className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2"
                  data-twe-nav-item-ref
                >
                  <NavLink
                    className={({ isActive }) =>
                      `uppercase font-bold text-white lg:px-2 ${
                        isActive ? "bg-[#1ABC9C] rounded py-2" : ""
                      }`
                    }
                    aria-current="page"
                    to="about"
                    data-twe-nav-link-ref
                  >
                    About
                  </NavLink>
                </div>
                {/* Features link */}
                <div
                  className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                  data-twe-nav-item-ref
                >
                  <NavLink
                    className={({ isActive }) =>
                      `uppercase font-bold text-white lg:px-2 ${
                        isActive ? "bg-[#1ABC9C] rounded py-2" : ""
                      }`
                    }
                    to="portfolio"
                    data-twe-nav-link-ref
                  >
                    portfolio
                  </NavLink>
                </div>
                {/* Pricing link */}
                <div
                  className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                  data-twe-nav-item-ref
                >
                  <NavLink
                    className={({ isActive }) =>
                      `uppercase font-bold text-white lg:px-2 ${
                        isActive ? "bg-[#1ABC9C] rounded py-2" : ""
                      }`
                    }
                    to="contact"
                    data-twe-nav-link-ref
                  >
                    contact
                  </NavLink>
                </div>
              </div>
              {/* Left links */}
            </div>
            {/* Collapsible wrapper */}
          </div>
        </div>
      </nav>
    </>
  );
}
