import React from "react";
import Image from "next/image";

const Social = () => {
  return (
    <div className="  sm:w-full md:container mx-auto sm:h-full md:h-[430px] my-0   flex justify-center items-center">
      <div className="sm:h-full md:w-[80%]    mx-auto my-0  ">
        <h1 className=" taviraj sm:text-lg md:text-[36px] font-medium text-hamzabrown-100 sm:mt-[10px] md:mt-[50px]">
        
          Instagram / Gallery
        </h1>
        <div className="border border-hamzablack-100 sm:w-[60px] md:w-[120px] "></div>



        
        <div data-aos="fade-up" className="sm:flex-col md:flex-row md:flex  mt-[30px] sm:w-full md:h-[200px] sm:h-full">
          <Image
            src={"/rectangle38.png"}
            alt="rectangle38"
            width={200}
            height={200}
            
            
          />
          <Image
            src={"/rectangle39.png"}
            alt="rectangle38"
            width={200}
            height={200}
          />
          <Image
            src={"/rectangle40.png"}
            alt="rectangle38"
            width={200}
            height={200}
          />
          <Image
            src={"/rectangle41.png"}
            alt="rectangle38"
            width={200}
            height={200}
          />
          <Image
            src={"/rectangle42.png"}
            alt="rectangle38"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default Social;


