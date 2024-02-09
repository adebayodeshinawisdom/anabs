import { ChevronDown, MenuIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="bg-blue-900 border-b-[4px] border-red-700 w-full ">
      <nav className="mx-8 md:mx-10 flex  items-center py-2 text-slate-100 sm:justify-between gap-20">
        <a href="/" className="flex gap-5">
          {" "}
          <Image src="/images/anabs.png" width={50} height={50} />
          <span className="font-bold text-slate-200 text-2xl md:text-3xl py-2">
            Anabs Autos Ltd
          </span>
        </a>

        <div className="hidden md:flex justify-between mx-[120px] gap-8">
          <a href="/" className="uppercase">
            Home{" "}
          </a>
          <a href="/about" className="uppercase">
            About Us{" "}
          </a>
          <div className="uppercase">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="flex">
                Services <ChevronDown/>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-blue-900 rounded-box w-[300px]"
              >
                <li>
                  <a href="/vehicle">Vehicle Breakdown Assistance/ Recovery Services</a>
                </li>
                <li>
                  <a href="/refresher">Refresher Courses/ Training for Corporate Drivers</a>
                </li>
                <li>
                  <a href="/pre-employment">Pre-Employment Test and Certification of Drivers</a>
                </li>
                <li>
                  <a href="/drivers">Drivers Recruitment, Training and Outsourcing</a>
                </li>
                <li>
                  <a href="/vehicles-haulage">Vehicles Haulage and General Logistics</a>
                </li>
                <li>
                  <a href="/vehicles-tracking">Vehicles Tracking Services</a>
                  <a>Corporate Transport Service (Car Rental Service)</a>
                </li>
              </ul>
            </div>
          </div>
          <a href="/" className="uppercase">
            Updates{" "}
          </a>
          <a href="/" className="uppercase">
            Our Clients{" "}
          </a>
          <a href="/contact" className="uppercase">
            Contact Us
          </a>
        </div>

        <div className="md:hidden">
          <MenuIcon />
        </div>
      </nav>
    </div>
  );
};

export default Header;
