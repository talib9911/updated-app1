import React from "react";
const PrivacyPage = () => {
  return (
    <>
      <div className="  px-[30px]  sm:px-[100px] bg-[rgba(244,244,244,1)]  flex flex-col  gap-[300px] mt-[-140px] ">
        <div className="pl-[30px] mb-[60px]">
          <h1
            className="text-[40px] leading-[40px] sm:leading-[76px] sm:text-[64px] mt-[470px]"
            style={{
              fontWeight: "400",
              color: "#212529",
            }}
          >
            Privacy and Cookies Policy
          </h1>
          <p className="mt-[48px] max-w-[535px] leading-[25px] text-[18px] font-[400] text-[#424649]">
            This privacy is designed to inform you about how we collect, use,
            and protect your personal information when you interact with our
            website.
          </p>
        </div>
      </div>
      <div className="mt-[90px]">
        <h2
          className=" pr-[20px] md:pr-[50px] pl-[40px] sm:pl-[80px] md:pl-[120px] mb-[20px] text-[30px] sm:text-[40px]"
          style={{
            fontWeight: "400",
            color: "rgba(33, 37, 41, 1)",
          }}
        >
          1. Information we collect
        </h2>
        <p
          className="pr-[50px] xl:pr-[710px] pl-[40px] sm:pl-[80px] md:pl-[120px]"
          style={{
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "25px",
            color: "#424649",
          }}
        >
          We gather various types of information to enhance and optimize our
          services. This includes personal information such as your name, email
          address, phone number, and mailing address, collected when you
          register for an account, contact us, or use our services. We also
          gather usage information, which encompasses details about your
          interactions with our website and services, including your IP address,
          browser type, device information, pages visited, and actions taken.
        </p>
      </div>
      <div className="mt-[70px]">
        <h2
          className=" pr-[20px] md:pr-[50px] pl-[40px] sm:pl-[80px] md:pl-[120px] mb-[20px] text-[30px] sm:text-[40px]"
          style={{
            fontWeight: "400",
            color: "rgba(33, 37, 41, 1)",
          }}
        >
          2. How we use your information
        </h2>
        <p
          className="pr-[50px] xl:pr-[710px] pl-[50px] sm:pl-[80px] md:pl-[120px]"
          style={{
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "25px",
            color: "#424649",
          }}
        >
          Our utilization of the information we collect serves multiple
          purposes. We use your personal data to furnish requested services,
          such as responding to inquiries, processing orders, and delivering
          newsletters or updates if you opt to receive them. Additionally, we
          analyze usage information to gain insights into how our website and
          services are used, which informs our continuous improvement efforts,
          content customization, and enhancements to user experiences.
        </p>
      </div>
      <div className="mt-[70px]">
        <h2
          className=" pr-[20px] md:pr-[50px] pl-[40px] sm:pl-[80px] md:pl-[120px] mb-[20px] text-[30px] sm:text-[40px]"
          style={{
            fontWeight: "400",
            color: "rgba(33, 37, 41, 1)",
          }}
        >
          3. Communication
        </h2>
        <p
          className="pr-[50px] xl:pr-[710px] pl-[40px] sm:pl-[80px] md:pl-[120px]"
          style={{
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "25px",
            color: "#424649",
          }}
        >
          We may employ your contact information to communicate with you
          concerning our services, provide updates, and convey important
          notices. You have the option to opt out of marketing communications at
          any time.
        </p>
      </div>
      <div className="mt-[70px]">
        <h2
          className=" pr-[20px] md:pr-[50px] pl-[40px] sm:pl-[80px] md:pl-[120px] mb-[20px] text-[30px] sm:text-[40px]"
          style={{
            fontWeight: "400",
            color: "rgba(33, 37, 41, 1)",
          }}
        >
          4. Cookies and Tracking Technologies
        </h2>
        <p
          className="pr-[50px] xl:pr-[710px] pl-[40px] sm:pl-[80px] md:pl-[120px]"
          style={{
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "25px",
            color: "#424649",
          }}
        >
          To better understand your browsing behavior and improve your website
          experience, we utilize cookies and similar tracking technologies.
          Cookies are small data files stored on your device that facilitate our
          comprehension of your preferences. By utilizing our website, you
          implicitly consent to our use of cookies, as detailed in our Cookies
          Policy. You maintain the ability to manage your cookie preferences
          through your browser settings.
        </p>
      </div>
      <div className="mt-[70px] mb-[120px]">
        <h2
          className=" pr-[20px] md:pr-[50px] pl-[40px] sm:pl-[80px] md:pl-[120px] mb-[20px] text-[34px] sm:text-[40px]"
          style={{
            fontWeight: "400",
            color: "rgba(33, 37, 41, 1)",
          }}
        >
          5. Security
        </h2>
        <p
          className="pr-[50px] xl:pr-[710px] pl-[40px] sm:pl-[80px] md:pl-[120px]"
          style={{
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "25px",
            color: "#424649",
          }}
        >
          We prioritize data security and employ reasonable measures to
          safeguard your information from unauthorized access, disclosure,
          alteration, or destruction. While we diligently strive to protect your
          data, it's important to acknowledge that no method of transmission
          over the internet or electronic storage is entirely secure.
          Consequently, we cannot provide absolute security guarantees.
        </p>
      </div>
    </>
  );
};

export default PrivacyPage;
