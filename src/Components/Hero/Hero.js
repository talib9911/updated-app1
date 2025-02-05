import React from 'react';
import { Link } from 'react-router-dom';
import bgImg from '../../Assets/Images/heroback.svg';
const Hero = () => {
  return (
    <div className="w-[100%] flex-col lg:flex-row" style={{ position: "absolute", top: "0", zIndex: "10", display:"flex" }}>
      <div className="bg-[#212529] w-[100%] lg:w-[50%] ]">
        <h1 className="text-white pl-[50px] xl:pl-[120px] pr-[590px]" style={{fontWeight:"400", fontSize:"64px", marginTop:"550px"}}>Redefining
        Energy</h1>
        <p style={{fontWeight:"300", fontSize:"18px", color:"rgba(255, 255, 255, 1)", marginTop:"20px"}} className='pl-[60px]  pr-11 xl:pr-[280px] xl:pl-[120px]'>As market leaders for 20 years, we are experts in energy efficiency, providing tailored, concrete solutions to meet your needs.</p>
        <Link to="/portfolio" onClick={()=>{window.scrollTo({top:0})}}><button className='py-[13px] px-[30px] bg-white my-11 ml-[60px] xl:ml-[120px] hover:bg-slate-400 hover:text-white' style={{
            color:"rgba(33, 37, 41, 1)", fontWeight:"400", fontSize:"14px", borderRadius:"40px"
        }}>View our Portfolio</button></Link>
      </div>
      <div 
    className="w-[100%] lg:w-[60%] h-[700px]  lg:min-h-[1006px] xl:h-[1039px] bg-center bg-no-repeat bg-cover" 
    style={{ backgroundImage: `url(${bgImg})` }}
  >
  </div>
    </div>
  );
}

export default Hero;
