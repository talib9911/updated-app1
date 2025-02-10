import React from "react";
import { Link } from "react-router-dom";
import fan from "../../../../Assets/Images/image 21.svg"
import dArrow from "../../../../Assets/Images/down.svg"
import rightarrow from "../../../../Assets/Images/right.svg";
import { useState } from "react";
const Services = () => {
    const items = [
        "Illumination",
        "Sustainable Energy",
        "Electric Mobility",
        "Consulting"
      ];
  const [openIndex, setOpenIndex] = useState(null);
  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="w-[100%] " style={{ zIndex: "10", marginTop: "-120px" }}>
      <div className="bg-[#212529] pt-[400px]">
        <h1
          className="text-white pl-[65px] xl:pl-[120px] pr-[590px]"
          style={{
            fontWeight: "400",
            fontSize: "64px",
            paddingTop: "150px",
          }}
        >
          Services
        </h1>
        <p
          style={{
            fontWeight: "300",
            fontSize: "18px",
            color: "#FFFFFF",
            marginTop: "20px",
            marginBottom: "70px",
            paddingBottom: "50px",
            lineHeight:"25px"
          }}
          className="pl-[65px] xl:pl-[120px] pr-11 2xl:pr-[1180px] "
        >
Discover our comprehensive range of services tailored to meet your energy efficiency, LED lighting, photovoltaic energy, and much more.
        </p>
      </div>
      <div className="bg-white pl-[65px] xl:pl-[120px] pr-[44px] lg:pr-[170px]">
      {items.map((item, index) => (
        <div key={index}>
          <button
            className="w-full flex justify-between items-center text-left pt-3 b-#A6A6AB border-t-2 text-[30px] md:text-[48px] hover:bg-gray-200"
            style={{
                fontWeight: "400",
                color: "#212529",
                marginTop: "19px",
              }}
            onClick={() => handleClick(index)}
          >
            {item}
            <img src={dArrow} className={`transition-transform ${openIndex === index ? "rotate-180" : "rotate-0"}`} />
          </button>
          {openIndex === index && (
            <div className="p-3 bg-white border-b">Content for {item}</div>
          )}
        </div>
      ))}
      </div>
      <div className="flex items-center flex-col lg:flex-row justify-end px-[40px] mt-[-390px] lg:mt-[70px] lg:pl-[0px] lg:pr-[140px]">
        <p
          style={{
            fontWeight: "400",
            fontSize: "14px",
            color: "#A6A6AB",
            marginTop: "470px",
          }}
        >
          <div>Executive Board members
            <br />
            Oakland. 2023</div>
        </p>
        <img src={fan} className="w-[700px]" />
      </div>
      <div className="mb-[60px] md:mb-0 pt-[40px]  md:pb-[120px] pl-[40px] xl:pl-[120px] pr-[0px] 2xl:pr-[999px]">
              <h2 className="py-[20px] text-[40px] font-normal text-[#212529]">
              Proudly helping businesses
              </h2>
              <p className="text-[18px] leading-[25px] text-[#424649]">
              Explore our portfolio of remarkable projects where innovation and sustainability converge. Discover how we've transformed energy landscapes and elevated standards in the industry.
              </p>
              {/* Button */}
              <Link to="/portfolio" className=" hover:text-gray-500" onClick={()=>window.scrollTo({top:0})}><button className="flex items-center gap-[6px] text-[18px] font-normal text-[#212529] mt-[35px]">
              View our Portfolio
                <img src={rightarrow}  />
              </button></Link>
            </div>
    </div>
  );
};

export default Services;