import Link from "next/link";
import React from "react";
import Image from "next/image";

const Header2 = () => {
  return (
    <div className="md:container   md:mx-auto md:my-0 flex sm:flex-col md:flex-row md:justify-center md:h-[400px] md:items-center  md:mt-[150px] ">
      <div className="sm:w-[320px] md:w-[80%] md:mx-auto md:my-0  sm:h-full md:h-[270px]  flex sm:flex-col md:flex-row sm:justify-center md:justify-center gap-[20px]   ">
        <div className="sm:h-full md:h-[270px] sm:w-full md:w-[680px] flex justify-start p-[20px] flex-col gap-[10px]  bg-hamzawhite-100">
          <p className="text-hamzablack-100 text-2xl taviraj">
            <span className="text-hamzablack3-100 ">Luxurious</span> Eyewear
          </p>

          <p className="text-hamzablack2-100 text-base nunito">
            See the beauty of exotic world with the <br /> luxurious glasses
          </p>
          <Link
            href="/"
            className="taviraj text-[16px] font-medium text-hamzablack3-100"
          >
            Discover Now
          </Link>
          <div className=" border w-[100px] mt-[-15px] border-hamzabrown-100"></div>
          <div data-aos="zoom-out">
            <Image
              src={"/image7.png"}
              alt="glasses"
              width={330}
              height={143}
              className="md:ml-[150px] md:mt-[-35px] md:h-[143px] md:w-[330px] sm:h-[100px] sm:w-[220px] sm:ml-[20px] sm:mt-[10px]"
            />
          </div>
        </div>

        <div className="sm:h-full h-[270px]  sm:w-full md:w-[680px] flex justify-start p-[20px] flex-col gap-[10px]  bg-hamzawhite-100">
          <p className="text-hamzablack-100 text-2xl taviraj">
            <span className="text-hamzablack3-100">Comfortable </span> Watches
          </p>

          <p className="text-hamzablack2-100 text-base nunito">
            Feels the balancing function and beauty in <br /> our wooden watches
          </p>
          <Link
            href="/"
            className="taviraj text-[16px] font-medium text-hamzablack3-100"
          >
            Discover Now
          </Link>
          <div className=" border w-[100px] mt-[-15px] border-hamzabrown-100"></div>
          <div>
            <Image
              src={"/image8.png"}
              alt="glasses"
              width={155}
              height={152}
              data-aos="zoom-out"
              className="md:ml-[300px] md:mt-[-35px] md:h-[155px] md:w-[152px] sm:h-[120px] sm:w-[120px] sm:ml-[70px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header2;


