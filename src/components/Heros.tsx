import React from "react";
import Image from "next/image";

const Heros = () => {
  return (
    <div className="sm:w-[320px]  md:w-full md:container sm:h-full md:h-[600px] md:mx-auto md:my-0  flex justify-center items-center ">
      <div className="sm:w-full md:w-[80%] flex justify-center items-center sm:flex sm:justify-center  sm:flex-col md:flex-row">
        <div className="sm:w-full  md:w-[52%] ">
        <h1 className=" sm:block sm:ml-[20px] md:hidden taviraj font-medium sm:text-lg md:text-[36px] text-hamzabrown-100 md:mt-[150px] ">
            Testimonials
          </h1>
          <div className=" sm:block md:hidden border border-b-hamzablack-100 sm:w-[80px] md:w-[120px] sm:ml-[20px] "></div>
          <div  data-aos="fade-right" className="sm:w-full md:w-[515px] sm:h-full md:h-[300px] bg-hamza-100 mt-[150px] sm:ml-[0] md:ml-[-130px]"></div>
          <Image
            src={"/vector15.png"}
            alt="vector15"
            width={433.5}
            height={216}
             data-aos="fade-right"
            className="mt-[-400px] ml-[-130px] sm:hidden md:block"
          />

          <Image
            src={"/vector16.png"}
            alt="vector16"
            width={440}
            height={226}
             data-aos="fade-right"
            className="mt-[-175px] ml-[-130px] sm:hidden md:block"
          />

          <Image
            src={"/vector17.png"}
            alt="vector17"
            width={440}
            height={249}
             data-aos="fade-right"
            className="mt-[-180px] ml-[-130px] sm:hidden md:block"
          />

          <Image
            src={"/heroimage.png"}
            alt="heroimage"
            width={511}
            height={321}
             data-aos="fade-right"
            className="md:mt-[-185px] sm:mt-[-120px] sm:w-[250px] sm:h-[120px]  md:w-[551px] md:h-[321px] sm:ml-[40px]"
          />

          <div className="flex  sm:justify-center md:justify-start">
            {/* aero */}
            <Image
              src={"/left.png"}
              alt="left.png"
              width={64}
              height={64}
              
              
            />

            {/* aero */}
            <Image
              src={"/right.png"}
              alt="right.png"
              width={64}
              height={64}
              
            />
          </div>
        </div>
        <div className="sm:h-full md:h-[580px]  sm:w-full md:w-[48%] flex justify-start items-start  flex-col md:pl-[50px]  md:pt-[20px] ">
          <h1 data-aos="fade-left" className="sm:hidden md:block md:ml-[20px] taviraj font-medium sm:text-lg md:text-[36px] text-hamzabrown-100 mt-[150px]  ">
            Testimonials
          </h1>
          <div data-aos="fade-left" className="border sm:hidden md:block md:ml-[20px] border-b-hamzablack-100 sm:w-[80px] md:w-[120px] "></div>
          <h2 className=" sm:block md:hidden taviraj text-[24px] text-hamzabrown-100 font-medium  pl-[20px]">
            Gita Savitri
          </h2>
          <p className="sm:block md:hidden taviraj text-[16px] text-hamzablack2-100 pl-[20px]">
            Content Creator/Influencer
          </p>
          <p data-aos="fade-left" className="nunito sm:text-sm md:text-[16px] text-hamzabrown-100 md:mt-[50px] sm:p-[20px]">
            Loving my new KAILI watch from @matoa_id, the first ever <br />{" "}
            Indonesian watch local brand that uses wood as their main <br />
            material. Like any other Matoa products, KAILI is inspired by <br />{" "}
            Indonesian heritage.
          </p>
          <h2 data-aos="fade-left" className="md:ml-[20px] sm:hidden md:block taviraj text-[24px] text-hamzabrown-100 font-medium mt-[50px]">
            Gita Savitri
          </h2>
          <p data-aos="fade-left" className=" md:ml-[20px] sm:hidden md:block taviraj text-[16px] text-hamzablack2-100 ">
            Content Creator/Influencer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Heros;


