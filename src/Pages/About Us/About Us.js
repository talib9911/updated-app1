import React from "react";
import meeting from "../../Assets/Images/image 2.svg";
import future from "../../Assets/Images/Frame 20.svg";
const About_Us = () => {
  return (
    <div className="w-[100%] " style={{ zIndex: "10", marginTop: "-120px" }}>
      <div className="bg-[#f4f4f4] pt-[400px]">
        <h1
          className="text-[#212529] pl-[40px] sm:pl-[65px] lg:pl-[120px] xl:pr-[590px] mt-[100px]"
          style={{
            fontWeight: "400",
            fontSize: "64px",
            
          }}
        >
          About us
        </h1>
        <p
          style={{
            fontWeight: "300",
            fontSize: "18px",
            color: "#424649",
            marginTop: "20px",
            marginBottom: "70px",
            paddingBottom: "50px",
          }}
          className="pl-[45px] sm:pl-[65px] pr-11 2xl:pr-[1180px] lg:pl-[120px]"
        >
          Learn more about Oakland C.E. and our commitment to excellence,
          innovation, and sustainability.
        </p>
      </div>
      <div className="bg-white pl-[45px] sm:pl-[65px] lg:pl-[120px] xl:pr-[590px] text-[36px] sm:text-[40px]">
        <h3
          style={{
            fontWeight: "400",
            color: "#424649",
          }}
        >
          Innovation.
          <br /> Guiding our journey from the start.
        </h3>
      </div>
      <div className="flex items-center flex-col-reverse lg:flex-row justify-end px-[40px] mt-[30px] sm:mt-[90px] xl:mt-[80px] lg:mt-0 lg:pl-[0px] xl:pr-[160px]">
      <div className="flex justify-end w-full mt-[10px] lg:mt-[540px] lg:pr-[19px]">
  <p
    className="w-[190px] text-right mr-[8px]"
    style={{
      fontWeight: "400",
      fontSize: "14px",
      color: "#A6A6AB",
    }}
  >
    Executive Board members  
    <br />
    Oakland. 2023
  </p>
</div>

              <img src={meeting} className="w-[700px] sm:w-[5400px] xl:w-[800px]" />
            </div>
      <div className="mt-[70px] xl:mt-[90px] pl-[40px] pr-[40px] 2xl:pl-[120px] 2xl:pr-[690px]">
        <p style={{
            fontWeight: "400",
            fontSize: "18px",
            color: "#424649",
            lineHeight:"25px"
          }}>Innovation has been at the heart of our journey right from the beginning. At Oakland C.E., we believe that staying at the forefront of technology and sustainable practices is essential. We've consistently sought innovative solutions in energy efficiency, LED lighting, photovoltaic energy, and electric mobility to shape a brighter and greener future.</p>
                  <p style={{
            fontWeight: "400",
            fontSize: "18px",
            color: "#424649",
            lineHeight:"25px",
            marginTop:"40px",
          }}>Our commitment to innovation drives us to continually explore new avenues, refine our processes, and deliver pioneering results for our clients. Join us in embracing innovation as we chart a course towards a more sustainable and efficient energy landscape.</p>
      </div>
      <div className="mt-[50px] px-[40px] ">
        <img src={future} className="mx-auto"/>
      </div>
      <div className="mt-[70px] xl:mt-[80px] mb-[120px] pl-[40px] pr-[40px] 2xl:pl-[990px] 2xl:pr-[190px]">
        <p style={{
            fontWeight: "400",
            fontSize: "18px",
            color: "#424649",
            lineHeight:"25px"
          }}>From our company's inception, innovation has been ingrained in our DNA. It's not just a buzzword; it's the driving force behind everything we do. Our founders were visionaries who understood that to make a real impact in the energy sector, we needed to lead with innovation.</p>
                  <p style={{
            fontWeight: "400",
            fontSize: "18px",
            color: "#424649",
            lineHeight:"25px",
            marginTop:"40px",
          }}>This commitment to cutting-edge solutions has allowed us to consistently push the boundaries of what's possible in energy efficiency, LED lighting, photovoltaic energy, and electric mobility. We've fostered a culture that encourages creativity, embraces change, and thrives on challenges. As we continue to grow, our dedication to innovation remains unwavering, ensuring that we remain a trailblazer in the industry.</p>
      </div>
    </div>
  );
};

export default About_Us;