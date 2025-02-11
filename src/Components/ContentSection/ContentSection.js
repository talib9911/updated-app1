import React from "react";
import img1 from "../../Assets/Images/Frame 11 (1).svg";
import img2 from "../../Assets/Images/Frame 14.svg";
import img3 from "../../Assets/Images/Frame 15.svg";
import img4 from "../../Assets/Images/Frame 16.svg";
import building from "../../Assets/Images/image 3.svg";
import rightarrow from "../../Assets/Images/right.svg";
import { Link } from "react-router-dom";
const ContentSection = () => {
  const images = [img1, img2, img3, img4];
  const imgLabels=['Energy Efficiency','LED Lighting','Photovoltaic Energy','Electric Mobility'];
  return (
    <div>
      <h2
        className="mt-[1699px] lg:mt-[1269px] pr-[20px] md:pr-[50px] pl-[60px] xl:pl-[120px] mb-[20px]"
        style={{
          fontWeight: "400",
          fontSize: "40px",
          color: "rgba(33, 37, 41, 1)",
        }}
      >
        Areas of Expertise
      </h2>
      <p
        className="pr-[50px] 2xl:pr-[950px] pl-[60px] xl:pl-[120px]"
        style={{
          fontWeight: "400",
          fontSize: "18px",
          lineHeight: "25px",
          color: "#424649",
        }}
      >
        Whether for small or large-scale projects, we are committed to
        delivering cutting-edge results, contributing to a more sustainable and
        innovative energy future.
      </p>
      {/* Image map */}
      <div
  className="flex gap-[20px] lg:gap-[95px] items-center pl-[60px] md:pr-[45px] lg:pr-[10px] xl:pl-[120px] mt-[40px] overflow-x-auto relative"
>
  {images.map((img, index) => (
    <div key={index} className="relative flex-shrink-0">
      <img src={img} className="w-[378px] md:w-[210px] lg:w-[310px]" />
      <span className="absolute bottom-[30px] left-6 font-[300] text-[18px] text-white">
        {imgLabels[index]}
      </span>
    </div>
  ))}
</div>

      <p
        className="pl-[60px] pr-[45px] 2xl:pl-[820px] 2xl:pr-[280px] mt-[56px] xl:mt-[120px]"
        style={{
          fontWeight: "400",
          fontSize: "18px",
          lineHeight: "25px",
          color: "#424649",
        }}
      >
        Leading the market for two decades, we have been experts in energy
        efficiency. With an unwavering commitment to innovation, we offer
        tailored solutions for projects of all sizes. From LED lighting to
        photovoltaic energy and electric mobility, our dedicated team works
        tirelessly to deliver cutting-edge results. We are committed to shaping
        a more sustainable and efficient energy future.
      </p>
      <div className="bg-[#f4f4f4] relative mt-[55px] md:mt-[200px] flex flex-col lg:flex-row px-[50px] md:px-[130px] items-center">
        {/* Image Section */}
        <div className="flex justify-center lg:justify-start lg:w-1/2">
          <img
            src={building}
            className="relative top-[30px]  md:top-[-89px] max-w-full"
          />
        </div>
        {/* Text Section */}
        <div className="lg:w-1/2 pt-[30px] md:pt-0 md:mt-0 lg:mt-[20px] xl:pt-[40px] pb-[50px] xl:pb-[100px] ml-0 lg:ml-0 xl:pl-0 pr-0 xl:pr-[28px]">
          <h2 className="py-[20px] text-[40px] font-normal text-[#212529] ">
            Deep knowledge in the field
          </h2>
          <p className="text-[18px] leading-[25px] text-[#424649]">
            Our extensive experience and deep expertise in the energy sector
            have positioned us as leaders in the industry. With two decades of
            market leadership, we have honed our knowledge in energy efficiency,
            LED lighting, photovoltaic energy, and electric mobility to a level
            that sets us apart. Our team's profound understanding of these
            domains enables us to provide innovative, tailored solutions that
            not only meet but exceed the expectations of our clients.
          </p>
          {/* Button */}
          <button className="flex items-center gap-[6px] text-[18px] font-normal text-[#212529] mt-[35px]">
            Learn more
            <img src={rightarrow} alt="Arrow" />
          </button>
        </div>
      </div>
      <div className="mb-[60px] md:mb-0 pt-[40px]  md:pb-[120px] pl-[50px] xl:pl-[120px] pr-[0px] 2xl:pr-[999px]">
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

export default ContentSection;
