import React from "react";
import b1 from "../../Assets/Images/Frame 8.svg";
import b2 from "../../Assets/Images/Frame 9.svg";
import rightarrow from "../../Assets/Images/right.svg";
import lefta from "../../Assets/Images/leftVector.svg";
import righta from "../../Assets/Images/rightVector.svg";

const Portfolio2 = () => {
  return (
    <>
      <div className="  px-[30px]  sm:px-[100px] bg-[rgba(244,244,244,1)]  flex flex-col  gap-[300px] mt-[-140px] ">
        <div className="pl-[30px] mb-[60px] mt-[490px]">
          <p className="mt-[48px] max-w-[535px] text-[18px] font-[400] text-[#424649]">
            PORTFOLIO
          </p>
          <h1
            className="text-[50px] sm:text-[64px] leading-[45px] md:leading-[77px]"
            style={{
              fontWeight: "400",
              color: "#212529",
            }}
          >
            Delloite Building, London
          </h1>
          <div className="w-full flex justify-between mt-[40px]">
            <img src={lefta}/>
            <img src={righta}/>
          </div>
        </div>
      </div>
      <div className="mt-[90px]">
        <p
          className="pr-[50px] xl:pr-[112px] pl-[47px] sm:pl-[89px] lg:pl-[620px] "
          style={{
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "25px",
            color: "#424649",
          }}
        >
          Oakland C.E. has been at the forefront of energy transformation and
          sustainability for over two decades. Our commitment to innovation and
          expertise in energy efficiency has allowed us to undertake remarkable
          projects across the globe. One such endeavor that stands as a
          testament to our dedication to sustainable energy solutions is the
          Deloitte Building in the heart of London.
        </p>
      </div>
      <div className="mt-[25px]">
        <p
          className="pr-[50px] xl:pr-[112px] pl-[47px] sm:pl-[89px] lg:pl-[620px]"
          style={{
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "25px",
            color: "#424649",
          }}
        >
          The Deloitte Building, an iconic structure in the bustling financial
          district of London, sought to reduce its carbon footprint and enhance
          its operational efficiency. Deloitte, a global leader in professional
          services, recognized the importance of adopting sustainable practices
          not only as a corporate responsibility but also as a strategic
          advantage. Oakland C.E. was entrusted with the mission to
          revolutionize the building's energy consumption patterns and lighting
          systems, aligning them with a greener and more sustainable future.
        </p>
      </div>
      <div className="mt-[25px]">
        <p
          className="pr-[50px] xl:pr-[112px] pl-[47px] sm:pl-[89px] lg:pl-[620px]"
          style={{
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "25px",
            color: "#424649",
          }}
        >
          Our team of experts meticulously conducted an energy audit,
          scrutinizing every aspect of the Deloitte Building's energy
          consumption. This thorough analysis allowed us to identify areas where
          energy wastage was occurring and formulate a comprehensive energy
          efficiency strategy. Our recommendations ranged from optimizing HVAC
          systems to implementing advanced building management systems that
          dynamically adjusted lighting, temperature, and power usage based on
          occupancy and natural lighting conditions.
        </p>
      </div>
      <div className="flex xl:flex-col">
        <div className="mt-[30px] xl:mt-[70px] pl-[40px]  xl:pl-[130px]">
          <img src={b1} className="w-[1280px]" />
        </div>
        <div className="mt-[30px] pl-[20px] pr-[40px] xl:pl-[900px]">
          <img src={b2} />
        </div>
      </div>
      <div className="mb-[60px] md:mb-0 pt-[40px]  md:pb-[120px] pl-[45px] sm:pl-[60px] 2xl:pl-[120px] pr-[0px] 2xl:pr-[999px]">
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
        <button className="flex items-center gap-[6px] text-[18px] font-normal text-[#212529] mt-[35px]">
          Contact us
          <img src={rightarrow} alt="Arrow" />
        </button>
      </div>
    </>
  );
};

export default Portfolio2;
