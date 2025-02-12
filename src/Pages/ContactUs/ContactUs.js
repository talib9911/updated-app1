import React from "react";
import { Link } from "react-router-dom";
import wBuilding from "../../Assets/Images/image 3 (1).svg" ;
const contact_us = () => {
  return (
    <>
      <div className="  px-[30px]  sm:px-[100px] bg-[rgba(244,244,244,1)]  flex flex-col  gap-[300px] mt-[-140px] ">
        <div className="pl-[35px] sm:pl-[30px] mb-[60px]">
          <h1 className="text-[64px] mt-[520px]" style={{
            fontWeight: "400",
            fontSize: "64px",
            color: "#212529",
            lineHeight:"77px"
          }}>
            Contact us
          </h1>
          <p className="mt-[48px] max-w-[535px] leading-[25px] text-[18px] font-[400] text-[#424649]">
            Our team is here to assist you on your journey towards a sustainable
            and efficient energy future.
          </p>
        </div>
      </div>
 
      <div className=" px-[30px]  sm:px-[100px] mt-[100px] lg:flex">
        <div className="w-100% pl-[50px] sm:pl-[40px] lg:w-[40%] lg:pl-[42px]">
          <div>
            <h2 className="font-[400] text-[40px] leading-[48.4px] max-w-[148px] text-[#212529]">
              Location
            </h2>
            <p className="mt-[40px] text-[18px] font-[400] leading-[25px] text-[#212529]">
              Avenida Marta Lopes, Nº2 <br></br> 8400-401 Vila Real, Portugal
            </p>
          </div>
          <div className="mt-[50px]">
            <h2 className="font-[400] text-[40px] leading-[48.4px]  text-[#212529]">
              Open hours
            </h2>
            <p className="mt-[40px] text-[18px] font-[400] leading-[25px] text-[#212529]">
              Weekdays - 9:00am to 6:00pm <br></br> Weekends - Closed
            </p>
          </div>
        </div>
        <div className="pl-[35px] lg:w-[60%]">
          <div>
            <h2 className="font-[400] text-[40px] pl-[18px] leading-[48.4px] max-w-[148px] text-[#212529]  lg:mt-[0px] mt-[40px]">
              Form
            </h2>
          </div>
          <div className="mt-[40px] lg:flex lg:flex-wrap">
            <div className="lg:w-[50%] p-[10px]">
              <input
                type="text"
                placeholder="Name"
                className="px-[20px] py-[10px] w-full border border-gray-300 rounded-md focus:border-blue-500"
              />
            </div>
            <div className="lg:w-[50%] p-[10px]">
              <input
                type="text"
                placeholder="Email"
                className="px-[20px] py-[10px] w-full border border-gray-300 rounded-md focus:border-blue-500"
              />
            </div>
            <div className="lg:w-[50%] p-[10px]">
              <input
                type="text"
                placeholder="Phone"
                className="px-[20px] py-[10px] w-full border border-gray-300 rounded-md focus:border-blue-500"
              />
            </div>
            <div className="lg:w-[50%] p-[10px]">
              <input
                type="text"
                placeholder="Address"
                className="px-[20px] py-[10px] w-full border border-gray-300 rounded-md focus:border-blue-500"
              />
            </div>
            <div className="lg:w-[100%] p-[10px]">
              <textarea
                placeholder="Message"
                className="px-[20px] py-[10px] w-full border border-gray-300 rounded-md focus:border-blue-500 resize-none h-[300px]"
              ></textarea>
            </div>
 
            {/* Checkbox */}
            <div className="lg:w-[100%] p-[10px] flex items-center">
              <input type="checkbox" id="agree" className="mr-2 bg-tr" />
              <label htmlFor="agree" className="text-[12px] lg:text-[18px] font-[400] text-[#424649]">
              I consent to Oakland C.E. processing my data for contact purposes.
              </label>
            </div>
            {/* Submit Button */}
            <div className="lg:w-[100%] p-[10px]">
              <button
                type="submit"
                className="bg-[#212529] text-white font-normal text-[18px] px-[40px] py-[12px] rounded-full mt-4 w-full sm:w-auto"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
<div className="px-[40px] md:px-[50px] lg:px-[135px]  flex flex-col md:flex-row mt-[50px] md:mt-[100px] h-auto md:h-[600px] gap-4  mb-[120px]">
  {/* Map Container */}
  <div className="w-full md:w-[70%] h-[300px] md:h-full ">
    <iframe
      width="100%"
      height="100%"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.83988672637!2d-0.2664034848794909!3d51.528739805029666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1738585815841!5m2!1sen!2s"
      allowFullScreen
      className="rounded-md h-full"
      title="Google Map"
    ></iframe>
  </div>

  {/* Image Container */}
  <div className="mt-8 md:mt-0 w-full md:w-[30%] h-[590px] md:h-full ">
    <img src={wBuilding} className="w-full  h-full object-cover rounded-md" alt="Building" />
  </div>
</div>

    </>
  );
};
 
export default contact_us;