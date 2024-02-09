import { FacebookIcon, FactoryIcon, Instagram, LinkIcon } from "lucide-react";
import React from "react";

const footer = () => {
  return (
    <div className="bg-blue-950">
      <div className="grid grid-cols-1 md:grid-cols-6 px-10 py-10 text-white gap-10">
        <div className="col-span-2">
          <h3 className="text-2xl font-bold text-white">Anabs Autos</h3>
          <p className="text-white">
            2nd Floor, Lobic Motors, Near Di- rectorate of Road Traffic Servic-
            es, Mabushi, Abuja (Kugym Cargo Service Office)
          </p>
          <p>08037379931, 09040040458</p>
        </div>

        <div>
            <h3 className="text-2xl font-bold">Social Media</h3>
          
           <div className="flex gap-3 py-3">
           <FacebookIcon/>
           <Instagram/>
           <LinkIcon/>
           </div>
          
        </div>
        <div>
            <h3 className="text-2xl font-bold">Useful Links</h3>
          
           <div className="flex flex-col gap-3 py-3">
           <a>About Us</a>
           <a>Our Services</a>
           <a>Contact Us</a>
           </div>
          
        </div>
        <div>
            <h3> &copy; All Rights Reserved - Anabs Autos -  2024</h3>
          
        </div>
      </div>
    </div>
  );
};

export default footer;
