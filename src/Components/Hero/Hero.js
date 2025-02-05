import React from 'react';
import { Link } from 'react-router-dom';
import bgImg from '../../Assets/Images/heroback.svg';
const Hero = () => {
  return (
    <div className="w-[100%] flex-col lg:flex-row" style={{ position: "absolute", top: "0", zIndex: "10", display:"flex" }}>
      <div className="bg-[#212529] w-[100%] lg:w-[50%] ]">
        <h1 className="text-white" style={{fontWeight:"400", fontSize:"64px", marginTop:"550px", padding:"0px 590px 0px 120px"}}>Redefining
        Energy</h1>
        <p style={{fontWeight:"300", fontSize:"18px", color:"rgba(255, 255, 255, 1)", marginTop:"20px"}} className='pl-[120px] pr-11 xl:pr-[280px] lg:pl-[120px]'>As market leaders for 20 years, we are experts in energy efficiency, providing tailored, concrete solutions to meet your needs.</p>
        <Link to="/portfolio" onClick={()=>{window.scrollTo({top:0})}}><button className='py-[13px] px-[30px] bg-white my-11 ml-[120px] hover:bg-slate-400 hover:text-white' style={{
            color:"rgba(33, 37, 41, 1)", fontWeight:"400", fontSize:"14px", borderRadius:"40px"
        }}>View our Portfolio</button></Link>
      </div>
      <div style={{backgroundImage: `url(${bgImg})`,  height:"1006px",backgroundRepeat:"no-repeat", backgroundPosition:"center",backgroundSize:"cover" }}
      className='w-[100%] lg:w-[50%]'>
      </div>
    </div>
  );
}

export default Hero;
