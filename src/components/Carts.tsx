import React from "react";
import Image from "next/image";

const Carts = () => {
  return (
    <div className="  md:container md:w-full  sm:w-[320px] md:mx-auto my-0  sm:flex-wrap md:flex flex md:justify-center items-center">
      <div className=" sm:w-[320px] md:w-[80%] md:mx-auto md:my-0 ">
        <h1 className="sm:text-[20px] sm:ml-[20px] md:text-4xl  sm:mt-[20px] md:mt-[50px] taviraj text-hamzablack3-100 ">
          Monthly Deals
        <div className="sm:w-[40px] md:w-[110px] border border-hamzablack-100"></div>
        </h1>

        {/* cart1 */}
        <div className="md:container sm:flex-wrap md:flex-row mx-auto my-0 flex sm:justify-center md:justify-start  items-center sm:gap-[80px] md:gap-[0px]   ">
          <div className=" md:container sm:h-full md:h-[381px] sm:w-[100px] md:w-[255px]  sm:mt-[80px]  md:mt-[100px] bg-hamzawhite-100">
            <div className=" flex justify-center mt-[-40px] ">
              <Image
                src={"/image9.png"}
                alt="watch1"
                width={207}
                height={221}
                data-aos="zoom-out"
              />
            </div>

            <h2 className=" sm:text-sm md:text-[24px] font-medium taviraj sm:pl-[10px] md:ml-4 mt-5">
              Singo Maple
            </h2>
            <p className="sm:text-sm md:text-[16px] text-hamzablack2-100 taviraj sm:pl-[10px] md:ml-4 md:mt-[10px]">
              20% Off
            </p>
            <p className=" sm:text-sm md:text-[16px] text-hamzablack2-100 taviraj sm:pl-[10px] md:ml-4 md:mt-[10px]">
              <del>Rp 1.500.000</del>
            </p>
            <p className="sm:text-sm md:text-[24px] text-hamzablack-100 taviraj sm:pl-[10px] md:ml-4 md:mt-[10px]">
              Rp 1.264.000
            </p>
          </div>

          {/* cart2 */}

          <div className=" sm:h-full md:h-[400px] sm:w-[100px] md:w-[255px]  sm:mt-[70px] md:mt-[80px] bg-hamzawhite-100">
            <div className=" flex justify-center  mt-[-25px] ">
              <Image
                src={"/cart2.png"}
                alt="cart2.png"
                width={207}
                height={221}
                data-aos="zoom-out"
              />
            </div>

            <h2 className="sm:text-sm md:text-[24px] font-medium  taviraj sm:pl-[10px] md:ml-4 sm:mt-[18px] md:mt-6">
              Singo Ebony
            </h2>
            <p className="sm:text-sm md:text-[16px] text-hamzablack2-100 taviraj sm:pl-[10px] md:ml-4 md:mt-[10px]">
              20% Off
            </p>
            <p className="sm:text-sm md:text-[16px] text-hamzablack2-100 taviraj sm:pl-[10px] md:ml-4">
              <del>Rp 1.500.000</del>
            </p>
            <p className="sm:text-sm md:text-[24px] text-hamzablack-100 taviraj sm:pl-[10px] md:ml-4">
              Rp 1.264.000
            </p>

            <div className="sm:hidden md:flex flex justify-center items-center  gap-2 mt-[20px]">
              <div className=" h-[39px] w-[39px] border border-hamzaorange-100  flex justify-center items-center">
                <Image
                  src={"/shapecopy.png"}
                  alt="heart.png"
                  width={24}
                  height={24}
                  data-aos="zoom-out"
                />
              </div>
              <div className="sm:hidden md:flex h-[39px] w-[158px] bg-hamzaorange-100 border-none text-hamzawhite-100 text-center taviraj flex justify-center items-center">
                Add to cart
              </div>
            </div>
          </div>
          {/* cart3 */}

          <div className="sm:h-full md:h-[381px] sm:w-[100px] md:w-[255px]  bg-hamzawhite-100 md:mt-[100px]">
            <div className=" flex justify-center mt-[-40px] ">
              <Image src={"/cart3.png"} alt="watch1" width={207} height={221} data-aos="zoom-out" />
            </div>

            <h2 className="sm:text-sm md:text-[24px] font-medium  taviraj sm:pl-[10px] md:ml-4 mt-5 md:mt-[10px]">
              Rakai Ebony
            </h2>
            <p className="tsm:text-sm md:ext-[16px] text-hamzablack2-100 taviraj sm:pl-[10px] md:ml-4 md:mt-[10px]">
              15% Off
            </p>
            <p className="sm:text-sm md:text-[16px] text-hamzablack2-100 taviraj sm:pl-[10px] md:ml-4 md:mt-[10px]">
              <del>Rp 1.280.000</del>
            </p>
            <p className="sm:text-sm md:text-[24px] text-hamzablack-100 taviraj sm:pl-[10px] md:ml-4 md:mt-[10px]">
              Rp 1.118.000
            </p>
          </div>

          {/* cart4 */}
          <div className="sm:h-full md:h-[381px] sm:w-[100px] md:w-[255px]   bg-hamzawhite-100 md:mt-[100px]">
            <div className=" flex justify-center mt-[-40px] ">
              <Image src={"/cart4.png"} alt="watch1" width={207} height={221} data-aos="zoom-out" />
            </div>

            <h2 className="sm:text-sm md:text-[24px] font-medium taviraj sm:pl-[10px] md:ml-4 mt-5 md:mt-[10px]">
              Way Kambas Mini Maple
            </h2>
            <p className="sm:text-sm md:text-[16px] text-hamzablack2-100 taviraj sm:pl-[10px] md:ml-4 md:mt-[20px]">
              10% Off
            </p>
            <p className="sm:hidden sm:text-sm md:text-[16px] text-hamzablack2-100 taviraj sm:pl-[10px] md:ml-4 md:mt-[10px]">
              <del>Rp 1.200.000</del>
            </p>
            <p className="sm:text-sm md:text-[24px] text-hamzablack-100 taviraj sm:pl-[10px] md:ml-4 md:mt-[10px]">
              Rp 1.024.000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;


