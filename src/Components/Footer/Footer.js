import React, { useState } from "react";
import { Link } from "react-router-dom";
import fLogo from "../../Assets/Images/Frame 54.svg";
const Footer = () => {
  return (
      <div className="flex flex-col gap-[95px] px-[160px] pt-[90px] pb-[50px]  w-full bg-[#212529]">
       <div className="flex flex-wrap justify-between"><span className="grid gap-[60px] md:gap-[140px] md:grid-cols-2 lg:grid-cols-3"><div> <ul>
       <li className="text-white" style={{fontWeight:"300",fontSize:"21px"}}>Pages</li>
       <Link to="/services" onClick={()=>window.scrollTo({top:0, behavior:"smooth"})}><li className="text-white hover:text-gray-500" style={{fontWeight:"200",fontSize:"18px", marginTop:"4px"}}>Services</li></Link>
       <Link to="/about_us" onClick={()=>window.scrollTo({top:0, behavior:"smooth"})}><li className="text-white hover:text-gray-500" style={{fontWeight:"200",fontSize:"18px", marginTop:"4px"}}>About us</li></Link>
       <Link to="/portfolio" onClick={()=>window.scrollTo({top:0, behavior:"smooth"})}><li className="text-white hover:text-gray-500" style={{fontWeight:"200",fontSize:"18px", marginTop:"4px"}}>Portfolio</li></Link>
       <Link to="/contact" onClick={()=>window.scrollTo({top:0, behavior:"smooth"})}><li className="text-white hover:text-gray-500" style={{fontWeight:"200",fontSize:"18px", marginTop:"4px"}}>Contact us</li></Link>
        </ul>
        </div>
        <div> <ul>
            <li style={{fontWeight:"300",fontSize:"21px",color:"white"}}>Social Media</li>
            <li style={{fontWeight:"200",fontSize:"18px",color:"white", marginTop:"4px"}}>Facebook</li>
            <li style={{fontWeight:"200",fontSize:"18px",color:"white", marginTop:"4px"}}>LinkedIn</li>
        </ul>
        </div>
        <div> <ul>
            <li style={{fontWeight:"300",fontSize:"21px",color:"white"}}>Legal</li>
               <Link to="/privacy" onClick={()=>window.scrollTo({top:0, behavior:"smooth"})}><li className="text-white hover:text-gray-500" style={{fontWeight:"200", fontSize:"18px", marginTop:"4px"} }>Privacy and Cookies Policy</li></Link>
               <Link to="/portfolio2" onClick={()=>window.scrollTo({top:0, behavior:"smooth"})}><li className="text-white hover:text-gray-500" style={{fontWeight:"200",fontSize:"18px", marginTop:"4px"}}>Termos e Condições</li></Link>
        </ul>
        </div>
        </span>
        <div className="mt-[50px] 2xl:mt-0">
            <img src={fLogo}/>
        </div>
        </div>
        <div className="flex flex-wrap justify-between ">
            <p style={{fontWeight:"300", fontSize:"13px", color:"white"}}>Oakland -Energy Consulting ©</p>
            <p style={{fontWeight:"300", fontSize:"13px", color:"white"}}>Design by Ferréh</p>
        </div>
      </div>
  );
};

export default Footer;
