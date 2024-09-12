import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  // Change navbar background color on scroll
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  const lists = [
    { id: "about", title: "Introduction" },
    { id: "service", title: "Services" },
    { id: "process", title: "Process" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-20 top-0 py-5 ${
        scrollNav ? "bg-zinc-600" : "bg-transparent"
      } transition-colors duration-300`}
    >
      <div className="flex w-full justify-between items-center max-w-7xl mx-auto">
        <Link className="flex items-center gap-2">
          <img
            src="logos.png"
            className="w-12 h-12 object-cover rounded-full"
            alt="logo"
          />
          <p className="text-[18px] text-white font-bold cursor-pointer">
            Consultancy
          </p>
        </Link>
        <ul className="hidden sm:flex list-none flex-row gap-10">
          {lists.map((list) => (
            <li
              key={list.id}
              className="text-[18px] text-white font-medium cursor-pointer"
            >
              <a href={`#${list.id}`}>{list.title}</a>
            </li>
          ))}
        </ul>
        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div
            className="text-white w-[28px] h-[28px]"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <IoClose /> : <AiOutlineMenu />}
          </div>
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-5 absolute top-12 right-2 bg-red-300 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col gap-4">
              {lists.map((list) => (
                <li
                  key={list.id}
                  className="font-medium cursor-pointer text-[16px] text-white"
                >
                  <a href={`#${list.id}`}>{list.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;