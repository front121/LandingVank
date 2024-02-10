import React, { useState } from "react";
import Language from "../../../assets/Language";
import Menu from "../../../assets/Menu";
import Indicador from "../../../assets/Indicador";
import VankLogo from "../../../assets/VankLogo";

import { Link } from "react-scroll";
import Close from "../../../assets/Close";
import Person from "../../../assets/Person";
import Suitcase from "../../../assets/Suitcase";
import Card from "../../../assets/Card";
import Company from "../../../assets/Company";
import Contact from "../../../assets/Contact";

const Header = ({ handleSetActive, activeSection }) => {
  const [isMenu, setIsMenu] = useState(false);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const [indicatorPosition, setIndicatorPosition] = useState(null);

  const toogleMenu = () => {
    setIsMenu(!isMenu);
  };

  const handleMouseEnter = (index, width) => {
    setIndicatorPosition(index);
    setIndicatorWidth(width);
  };

  const handleMouseLeave = () => {
    setIndicatorPosition(null);
    setIndicatorWidth(0);
  };

  return (
    <div
      className={`${
        activeSection === "section0"
          ? "bg-white bg-opacity-85"
          : " bg-white shadow-2xl"
      }  text-black fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
    >
      <div className="px-7 min-h-[56px] flex justify-between items-center  xl:pl-20 2xl:pl-32 2xl:px-12">
        <VankLogo />
        <ul className="relative lg:flex justify-center items-center text-lg 2xl:mr-28 hidden transition-all duration-300 ">
          <li
            className="font-medium text-[#000000] opacity-100 z-50 my-7 md:my-0 md:ml-2 text-sm lg:text-base flex flex-col items-center min-w-[84px] cursor-pointer"
            onMouseEnter={(e) => handleMouseEnter(0, e.target.offsetWidth)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              activeClass="active"
              to="section0"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={handleSetActive}
            >
              Personas
            </Link>
            <Indicador
              className={`${
                indicatorPosition === 0 ? `w-[100%]` : `w-0 h-0`
              } transition-all duration-300`}
            />
          </li>
          <li
            className="font-normal text-[#000000] my-7 md:my-0 md:ml-2 text-sm lg:text-base flex flex-col items-center  min-w-[84px] cursor-pointer"
            onMouseEnter={(e) => handleMouseEnter(1, e.target.offsetWidth)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              onSetActive={handleSetActive}
            >
              Negocios
            </Link>
            <Indicador
              className={`${
                indicatorPosition === 1 ? `w-[100%]` : `w-0 h-0`
              } transition-all duration-300`}
            />
          </li>
          <li
            className="ont-normal text-[#000000] my-7 md:my-0 md:ml-2 text-sm lg:text-base flex flex-col items-center min-w-[84px] cursor-pointer"
            onMouseEnter={(e) => handleMouseEnter(2, e.target.offsetWidth)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              onSetActive={handleSetActive}
            >
              VankCard
            </Link>
            <Indicador
              className={`${
                indicatorPosition === 2 ? `w-[100%]` : `w-0 h-0`
              } transition-all duration-300`}
            />
          </li>
          <li
            className="font-normal text-[#000000] my-7 md:my-0 md:ml-2 text-sm lg:text-base flex flex-col items-center min-w-[84px] cursor-pointer"
            onMouseEnter={(e) => handleMouseEnter(3, e.target.offsetWidth)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              onSetActive={handleSetActive}
            >
              VankVersity
            </Link>
            <Indicador
              className={`${
                indicatorPosition === 3 ? `w-[100%]` : `w-0 h-0`
              } transition-all duration-300`}
            />
          </li>
          <li
            className="font-normal text-[#000000] my-7 md:my-0 md:ml-2 text-sm lg:text-base flex flex-col items-center min-w-[84px] cursor-pointer"
            onMouseEnter={(e) => handleMouseEnter(4, e.target.offsetWidth)}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#">Compañia</a>
            <Indicador
              className={`${
                indicatorPosition === 4 ? `w-[100%]` : `w-0 h-0`
              } transition-all duration-300`}
            />
          </li>
          <li
            className="font-normal text-[#000000] my-7 md:my-0 md:ml-2 text-sm lg:text-base flex flex-col items-center min-w-[84px] cursor-pointer"
            onMouseEnter={(e) => handleMouseEnter(5, e.target.offsetWidth)}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#">Contacto</a>
            <Indicador
              className={`${
                indicatorPosition === 5 ? `w-[100%]` : `w-0 h-0`
              } transition-all duration-300`}
            />
          </li>
        </ul>
        {/* menu icon */}
        <div className="text-white md:flex md:gap-12 items-center hidden">
          <div className="w-full flex items-center justify-center gap-3">
            <a
              href="#"
              className="text-white max-h-[31px] rounded-[24px] text-sm py-1 px-12 mr-2 bg-[#000000]"
            >
              Iniciar sesión
            </a>
            <a href="#" className="py-2  mr-2 text-black">
              Regístrate
            </a>
          </div>
          <Language className="lg:flex hidden" />
        </div>

        {/* mobile menu */}
        <div className="lg:hidden cursor-pointer" onClick={toogleMenu}>
          <Menu />
        </div>
      </div>
      <div
        className={`inset-0 z-50 bg-gray-800 bg-opacity-50  fixed top-0 left-0 w-full  ${
          isMenu ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute w-9/12 sm:w-1/2 right-0 h-full p-2   bg-white transition-all duration-700 ${
            isMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div
            className="absolute -left-4 cursor-pointer w-[40px] h-[40px] p-1 flex justify-center items-center bg-[#eee] rounded-[40px]"
            onClick={toogleMenu}
          >
            <Close className="w-full h-full" />
          </div>
          <ul
            className={`text-lg block space-y-4 px-4 py-6 transition-colors duration-300 mt-7 ${
              isMenu ? "" : ""
            }`}
          >
            <li className="font-semibold  flex items-center gap-x-2 h-11  w-full py-3 px-4 md:my-0 md:ml-8 text-sm lg:text-base rounded-[7px]  bg-[#EDEDED] hover:border-b-2 border-[#FFED00] cursor-pointer group">
              <Person className="h-6 " />
              <a href="#">Personas</a>
            </li>
            <li className="font-semibold  flex items-center gap-x-2 h-11  w-full  py-3 px-4 md:my-0 md:ml-8 text-sm lg:text-base rounded-[7px] bg-[#EDEDED] hover:border-b-2 border-[#FFED00] cursor-pointer">
              <Suitcase className="h-6 " />
              <a href="#">Negocios</a>
            </li>
            <li className="font-semibold  flex items-center gap-x-2 h-11  w-full py-3 px-4 md:my-0 md:ml-8 text-sm lg:text-base rounded-[7px] bg-[#EDEDED] hover:border-b-2 border-[#FFED00] cursor-pointer">
              <Card className="h-6" />
              <a href="#">VankCard</a>
            </li>
            <li className="font-semibold  flex items-center gap-x-2 h-11  w-full py-3 px-4 md:my-0 md:ml-8 text-sm lg:text-base rounded-[7px] bg-[#EDEDED] hover:border-b-2 border-[#FFED00] cursor-pointer">
              <Card className="h-6" />
              <a href="#">VankVersity</a>
            </li>
            <li className="font-semibold  flex items-center gap-x-2 h-11  w-full py-3 px-4 md:my-0 md:ml-8 text-sm lg:text-base rounded-[7px] bg-[#EDEDED] hover:border-b-2 border-[#FFED00] cursor-pointer">
              <Company className="h-6" />
              <a href="#">Compañia</a>
            </li>
            <li className="font-semibold  flex items-center gap-x-2 h-11  w-full py-3 px-4 md:my-0 md:ml-8 text-sm lg:text-base rounded-[7px] bg-[#EDEDED] hover:border-b-2 border-[#FFED00] cursor-pointer">
              <Contact className="h-6" />
              <a href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
