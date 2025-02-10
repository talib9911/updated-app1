import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import logo from "../../Assets/Images/Logo Variations.svg";
import logo2 from "../../Assets/Images/aboutlogo.svg"
import bars from "../../Assets/Images/hamburger.svg";
import { Link, useLocation } from "react-router-dom"; 
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const oaklandTextColor = location.pathname === "/about_us" || location.pathname==="/contact" || location.pathname==="/privacy" || location.pathname==="/portfolio2" ? "text-black" : "text-white";
  const listTextColor = location.pathname === "/about_us" || location.pathname==="/contact" || location.pathname==="/privacy" || location.pathname==="/portfolio2" ? "text-black" : "text-white";
  const buttonTextColor = location.pathname === "/about_us" ? "text-white" : "text-black";
  const buttonbackColor = location.pathname === "/about_us" || location.pathname==="/contact" || location.pathname==="/privacy" || location.pathname==="/portfolio2" ? "bg-[#212529]" : "bg-[#8FA0AA]";
  const logosrc = location.pathname === "/about_us" ? logo2 : logo;
  const handleHamburger = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div>
      <div className="flex justify-around md:gap-[40px] xl:gap-[75px]  2xl:gap-[695px] py-7 z-20 relative w-full">
      <Link to="/" className=" hover:text-gray-500"> <div className="flex">
          <img src={logosrc} className="mr-5 " />
          <span style={{ paddingTop: "8px" }}>
          <h2 className={`font400 fSize ${oaklandTextColor}`}>Oakland</h2>
            <h2
              style={{ marginTop: "-9px", whiteSpace: "nowrap" }}
              className="font300 foSize text-[#A6A6AB;]"
            >
               Energy Consulting
            </h2>
          </span>
        </div></Link>
        <span>
          <ul
            className={`hidden md:flex gap-[32px] justify-center items-center ${listTextColor}`}
            style={{ fontWeight: "400", fontSize: "18px" }}
          >
  <li>
  <Link to="/about_us" className=" hover:text-gray-500">
    About Us
  </Link></li>
            <li>  <Link to="/services" className=" hover:text-gray-500">
            Services
  </Link></li>
  
            <li>  <Link to="/portfolio" className=" hover:text-gray-500">
            Portfolio
  </Link></li>
            <Link to="/contact"><button
              style={{
                padding: "13px 40px",
                borderRadius: "40px",
                opacity: "32px",
              }}
              className={`${buttonbackColor} text-white hover:bg-black`}
            >
              Contect us
            </button></Link>
          </ul>
          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-white text-3xl bg-[#646669] flex w-11 h-11 items-center justify-center"
            onClick={handleHamburger}
            style={{ borderRadius: "40px" }}
          >
            {isOpen ? <FontAwesomeIcon icon={faXmark} style={{ width: "20px", height: "20px" }}/> :  <img src={bars} style={{ width: "20px", height: "20px" }} />}
          </button>
          {/* mobile drop down */}
          {isOpen && (
            <>
              <div className="absolute top-20 left-0 w-full bg-[#212529] text-white text-lg py-6 flex flex-col items-center md:hidden">
                <ul>
                  <Link to="/about_us" className=" hover:text-gray-500" onClick={()=>setIsOpen(false)}><li style={{margin:"10px 0px"}}>About us</li></Link>
                  <Link to="/services" className=" hover:text-gray-500" onClick={()=>setIsOpen(false)}><li>Services</li></Link>
                  <Link to="/portfolio" className=" hover:text-gray-500" onClick={()=>setIsOpen(false)}><li style={{margin:"10px 0px"}}>Portfolio</li></Link>
                  <Link to="/contact" className=" hover:text-gray-500" onClick={()=>setIsOpen(false)}><button
                    style={{
                      padding: "10px 30px",
                      borderRadius: "40px",
                      backgroundColor: "#8fa0aa",
                      opacity: "32px",
                      marginLeft:"-37px"
                    }}
                    className="text-white"
                  >
                    Contact Us
                  </button></Link>
                </ul>
              </div>
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export default NavBar;
