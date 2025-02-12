import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import car from "../../Assets/Images/car.svg";
import icon1 from  "../../Assets/Images/Group 3.svg"
import icon2 from  "../../Assets/Images/Group 4.svg"
import icon3 from  "../../Assets/Images/Group 5.svg"
import img1 from  "../../Assets/Images/img1.svg"
import img2 from  "../../Assets/Images/img2.svg"
import img3 from  "../../Assets/Images/img3.svg"
import img4 from  "../../Assets/Images/img4.svg"
import img5 from  "../../Assets/Images/img5.svg"
import img6 from  "../../Assets/Images/img6.svg"
import rightarrow from "../../Assets/Images/right.svg";
const Portfolio = () => {
    const portfolioItems = [
        {
          id: 1,
          title: "Deloitte Building, London",
          category: ["Energy Efficiency", "LED Lighting"],
          image: img1,
        },
        {
          id: 2,
          title: "Car Chargers, Oakland",
          category: ["Electric Mobility"],
          image: img2,
        },
        {
          id: 3,
          title: "Amazon Headquarters, UK",
          category: ["LED Lighting"],
          image: img3,
        },
        {
          id: 4,
          title: "AstraZeneca Lab Facilities, Nevada",
          category: ["LED Lighting"],
          image: img4,
        },
        {
          id: 5,
          title: "Gordon’s BBQ, Las Vegas",
          category: ["Energy Efficiency", "LED Lighting"],
          image: img5,
        },
        {
          id: 6,
          title: "Car Chargers, Portugal",
          category: ["Electric Mobility"],
          image: img6,
        },
      ];
      const categories = ["All", "LED Lighting", "Energy Efficiency", "Electric Mobility"];
      const [selectedCategory, setSelectedCategory] = useState("All");

      const filteredItems =
        selectedCategory === "All"
          ? portfolioItems
          : portfolioItems.filter((item) => item.category.includes(selectedCategory));
  return (
    <div className="w-[100%] " style={{ zIndex: "10", marginTop: "-140px" }}>
      <div className="pt-[400px] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${car})` }}>
        <h1
          className="text-[#212529] pl-[45px] sm:pl-[60px] lg:pl-[120px] pr-[590px] mt-[100px]"
          style={{
            fontWeight: "400",
            fontSize: "64px",
            color:"white",
          }}
        >
          Portfolio
        </h1>
        <p
          style={{
            fontWeight: "300",
            fontSize: "18px",
            color: "white",
            marginTop: "20px",
            marginBottom: "70px",
            paddingBottom: "50px",
            lineHeight:"25px",
          }}
          className="pl-[45px] sm:pl-[60px] xl:pl-[120px] pr-11 2xl:pr-[1180px] lg:pl-[120px]"
        >
         Explore our portfolio of remarkable projects where innovation and sustainability converge.
        </p>
      </div>
      <div className="bg-white pl-[45px] sm:pl-[60px] lg:pl-[120px] xl:pr-[590px]">
        <h3
          style={{
            fontWeight: "400",
            fontSize: "40px",
            color: "#424649",
          }}
        >
                  <h1
          className="text-[#212529] pl-[8px] pr-[40px] md:pr-[0px] xl:pr-[90px] text-[37px] sm:text-[40px]"
          style={{
            fontWeight: "400",
            paddingTop: "50px",
            color:"#212529",
          }}
        >
 The distinction that sets us Apart in the industry
        </h1>
        <p
          style={{
            fontWeight: "300",
            fontSize: "18px",
            color: "#424649",
            marginTop: "20px",
            marginBottom: "70px",
            paddingBottom: "10px",
            lineHeight:"25px",
          }}
          className=" pr-11 2xl:pr-[380px] lg:pl-[8px]"
        >
        In a highly competitive industry, what distinguishes a company is not just its offerings but its unwavering commitment to excellence and innovation. At Oakland C.E., we understand that to rise above the competition, we must constantly strive for distinction in every aspect of our business. Our journey in the energy sector has been defined by innovation and expertise.
        </p>
        </h3>
      </div>
      <div className="grid gap-[80px] md:grid-cols-2 xl:grid-cols-3  2xl:gap-[0px] items-center justify-center md:pl-[120px] xl:pr-[470px]">
        <div className="flex gap-6">
            <img src={icon1}/>
            <h4     style={{
            fontWeight: "400",
            fontSize: "32px",
            color: "#212529",
          }}>Inovation</h4>
        </div>
        <div className="flex gap-6">
            <img src={icon2}/>
            <h4     style={{
            fontWeight: "400",
            fontSize: "32px",
            color: "#212529",
          }}>Expertise</h4>
        </div>
        <div className="flex gap-6">
            <img src={icon3}/>
            <h4     style={{
            fontWeight: "400",
            fontSize: "32px",
            color: "#212529",
          }}>Quality</h4>
        </div>
      </div>  
      <div className="flex flex-col pl-[10px] sm:pl-[40px] lg:pl-[50px] xl:pl-[120px] xl:pr-[120px] py-[50px] bg-[#F4F4F4] mt-[90px]">
      {/* Filter Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-7 pl-[65px] sm:pl-[0px] mb-6 pr-[100px] 2xl:pr-[800px] ">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`min-w-[75px] px-[6px] py-[5px] lg:px-[40px] flex items-center justify-center justify-items-center lg:py-[16px] rounded-full text-[10px] md:text-[18px] font-normal text-nowrap ${
              selectedCategory === category ? "bg-[#A6A6AB] text-white" : "bg-white"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* image Grid */}
      <div className="grid grid-cols-1 items-center justify-center sm:grid-cols-2 lg:grid-cols-3 gap-[0px] ">
        {filteredItems.map((item) => (
          <div key={item.id} className="rounded-lg p-4">
            <Link to="/portfolio2" onClick={()=>window.scrollTo({top:0, behavior:"smooth"})}> <img src={item.image} className="w-[830px] h- object-cover rounded-lg" /></Link>
            <h3 className="text-lg font-semibold mt-3">{item.title}</h3>
            <p className="text-gray-500">{item.category.join(",")}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-[16px] justify-end mr-[25px] xl:mr-[16px] mt-[30px]">
      <li className="list-none text-[#212529] text-[18px] font-[400]">1</li>
      <li className="list-none text-gray-400 text-[18px] font-[400]">2</li>
      <li className="list-none text-gray-400 text-[18px] font-[400]">3</li>
      <li className="list-none text-gray-400 text-[18px] font-[400]">Próximo</li>
      </div>
    </div>
    <div className="mb-[60px] md:mb-0 pt-[40px]  md:pb-[120px] pl-[45px] sm:pl-[60px] xl:pl-[120px] pr-[0px] xl:pr-[999px]">
        <h2 className="py-[20px] text-[40px] font-normal text-[#212529]">
          Get in touch with us
        </h2>
        <p className="text-[18px] leading-[25px] text-[#424649]">
          If you're ready to explore how our expertise in energy efficiency, LED
          lighting, photovoltaic energy, and electric mobility can benefit your
          projects, don't hesitate to reach out. We're here to listen,
          collaborate, and provide you with tailored solutions that align with
          your specific needs and goals.
        </p>
        {/* Button */}
        <Link to="/contact" onClick={()=>window.scrollTo({top:0})}><button className="flex items-center gap-[6px] text-[18px] font-normal text-[#212529] mt-[35px]">
        Contact us
          <img src={rightarrow} alt="Arrow" />
        </button></Link>
      </div>
    </div>
  );
};

export default Portfolio;