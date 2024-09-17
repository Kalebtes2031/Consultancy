import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { MdAttachEmail, MdAddCall } from "react-icons/md";

const Footer = () => {
  return (
    <section className=" text-white bg-gray-900 px-10 pb-2">
      <div className="flex flex-row justify-center pt-10">
        <div className="flex-1 flex-col">
          <h1 className="roboto-medium text-2xl">Links</h1>
          <hr className="w-12 mt-2 mb-5 border-2 rounded" />
          <ul className="ml-3 space-y-2">
            {[
              { href: "#about", label: "About us" },
              { href: "#service", label: "Services" },
              { href: "#process", label: "Process" },
              { href: "#contact", label: "Contact us" },
            ].map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="poppins-light text-slate-300 text-lg transition-all duration-300 ease-in-out hover:ml-2 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 flex-col">
          <h1 className="roboto-medium text-2xl">Contacts</h1>
          <hr className="w-12 mt-2 mb-5 border-2 rounded" />
          <div className="flex flex-row items-center gap-3 poppins-light text-slate-300 text-lg transition-all duration-300 ease-in-out hover:ml-2 hover:text-white">
            <MdAttachEmail className="text-2xl" />
            <p>kalebconsultancy@gmail.com</p>
          </div>
          <div className="flex flex-row items-center gap-3 poppins-light text-slate-300 text-lg transition-all duration-300 ease-in-out hover:ml-2 hover:text-white">
            <MdAddCall className="text-2xl" />
            <p>+251 942190828</p>
          </div>
        </div>
        <div className="flex-1 flex-col">
          <h1 className="roboto-medium text-2xl">Follow Us</h1>
          <hr className="w-12 mt-2 mb-5 border-2 rounded" />
          <div className="flex flex-row text-5xl">
            <FaFacebookF className="mr-8 bg-gray-600 rounded-full p-2 hover:bg-white hover:text-black" />
            <FaTwitter className="mr-8  bg-gray-600 rounded-full p-2 hover:bg-white hover:text-black" />
            <FaInstagram className="mr-8  bg-gray-600 rounded-full p-2 hover:bg-white hover:text-black" />
            <FaLinkedin className="mr-8  bg-gray-600 rounded-full p-2 hover:bg-white hover:text-black"/>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-row items-center justify-center ">
        <img src="logos.png" className="w-8 h-8 object-cover" />
        <p className="ml-2">Kaleb Consultancy</p>
      </div> */}
      <p className="text-center mt-6 poppins-light">
        Copyright © {new Date().getFullYear()} Kaleb Consultancy. All rights
        reserved.
      </p>
    </section>
  );
};

export default Footer;
