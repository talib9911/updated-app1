import React from 'react';
import { Link } from 'react-router-dom';
import bgImg from '../../Assets/Images/heroback.svg';
const Hero = () => {
  return (
    <div className="w-[100%] flex-col lg:flex-row" style={{ position: "absolute", top: "0", zIndex: "10", display:"flex" }}>
      <div className="bg-[#212529] w-[100%] lg:w-[50%] ]">
        <h1 className="text-white pl-[50px] text-[45px] md:text-[64px] lg:pl-[80px] xl:pl-[125px] xl:pr-[70px] mt-[500px] lg:mt-[820px] xl:mt-[820px] 2xl:mt-[940px]" style={{fontWeight:"400"}}>Redefining
         Energy</h1>{/*pr-[590px] */}
        <p style={{fontWeight:"300", fontSize:"18px", color:"rgba(255, 255, 255, 1)", marginTop:"34px"}} className='pl-[60px]  pr-11  2xl:pr-[270px] lg:pl-[80px] xl:pl-[120px]'>As market leaders for 20 years, we are experts in energy efficiency, providing tailored, concrete solutions to meet your needs.</p>
        <Link to="/portfolio" onClick={()=>{window.scrollTo({top:0})}}><button className='py-[13px] px-[30px] bg-white my-11 ml-[60px] mt-[60px] lg:ml-[80px] xl:ml-[120px] hover:bg-slate-400 hover:text-white' style={{
            color:"rgba(33, 37, 41, 1)", fontWeight:"400", fontSize:"14px", borderRadius:"40px"
        }}>View our Portfolio</button></Link>
      </div>
      <div 
    className="w-[100%] lg:mt-[-200px] lg:w-[60%] h-[700px]  lg:min-h-[1529px] xl:h-[1510px] bg-center bg-no-repeat bg-cover" 
    style={{ backgroundImage: `url(${bgImg})` }}
  >
  </div>
    </div>
  );
}

export default Hero;
