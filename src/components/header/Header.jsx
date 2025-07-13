import React from "react";
import logo from "../../images/logo.svg";
import { LINKS } from "../../static/index";
import { FaRegUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <div className="sticky top-0 z-10 bg-white">
      <div className="container flex items-center h-[75px] justify-between">
        <img src={logo} />
        <ul className="flex gap-[55px] max-[700px]:hidden">
          {LINKS.map((item, inx) => {
            return (
              <li key={inx}>
                <a href="#">
                  <span className="font-medium font-[Roboto]">{item}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <div className="flex gap-[20px]">
          <button className="text-[24px]">
            <FaRegUser />
          </button>
          <button className="text-[24px]">
            <FiShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
