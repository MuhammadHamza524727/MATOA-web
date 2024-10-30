import React from "react";
import Image from "next/image";
import Link from "next/link";




const Header = () => {
  return (
    <div className="md:container   mx-auto my-0    flex sm:justify-center md:justify-center  ">
      {/* header */}
      <div className="  sm:flex-col  md:flex-row sm:w-[320px] md:w-[80%]   sm:h-[450px] md:h-[505px]  bg-hamza-100 flex sm:justify-start md:justify-center items-center  md:mt-[70px] md:gap-[40px]">
      
        <div className=" md:mt-[260px]  sm:h-full md:h-[500px] sm:w-full md:w-[800px] flex justify-center items-center">
          <Image
            src={"/image6.png"}
            alt="watch-image"
            width={325}
            height={467}
            className="sm:h-[120px] sm:mt-[10px] sm:mb-[-10px]  sm:w-[100px] md:h-[467px] md:w-[325px]"
            
          />
        </div>

        <div className="   flex flex-col  sm:h-[400px] md:h-[400px] sm:w-full md:w-[700px] ">
          <div className=" flex flex-col sm:p-[20px] gap-4">
            <p className="md:text-[60px] sm:text-[30px]   font-medium  taviraj">WAY KAMBAS </p>

            <p className="md:text-[60px] sm:text-[30px] sm:mt-[-10px]  mt-[-30px] md:font-medium  taviraj">
              MINI EBONY
            </p>

            <div className="w-[100px] border border-hamzabrown-100  md:mt-[-20px] sm:mt-[-10px]"></div>

            <p className="sm:text-sm md:text-[16px]  nunito">
              MATOA Way Kambas - This wood is chosen to represent the <br />
              Sumatran Rhino  skin which is designed with an overlap effect on
              its <br />
              strap to represent Rhino  skin.
            </p>

            <Link href="/" className="taviraj text-[16px] font-medium text-hamzablack2-100">
              Discover
            </Link>
            <div className="border border-hamzablack-100  w-[64px] mt-[-20px] "></div>
          </div>

          <div className="sm:p-[20px] sm:flex md:flex sm:h-full md:h-[62px] sm:w-full md:w-[380px] gap-2  items-center sm:mt-[-30px] md:mt-[0px]">
            
            <div data-aos="fade-down" className=" flex justify-center h-[62px] md:h-[62px]  sm:h-[32px] sm:w-[150px] md:w-[208px] gap-2 items-center    bg-hamzaorange-100 border-none text-white">

              <div className="h-[32px] w-[32px] flex justify-center items-center ">
                <Image
                  src={"/add-cart.png"}
                  alt="cart"
                  width={32}
                  height={32}
                />
              </div>
            


              <button  className="  text-hamzawhite-100">Add to cart</button>
              
              
            </div>
            <button className="  flex justify-center sm:h-[32px] sm:w-[150px] md:h-[62px] md:w-[140px] items-center ">
              <Image
                src={"/Page1.png"}
                alt="btn"
                width={56.25}
                height={32.23}

              />
            </button>



          </div>

          <Image
            src={"/vector12.png"}
            alt="btn"
            width={613}
            height={500}
            className="mt-[-450px] ml-[200px] sm:hidden md:block"

          />
          <Image
            src={"/vector13.png"}
            alt="btn"
            width={613}
            height={500}
            className="mt-[-120px] ml-[200px] sm:hidden md:block"

          />
          <Image
            src={"/vector14.png"}
            alt="btn"
            width={613}
            height={500}
            className="mt-[-140px] ml-[200px] sm:hidden md:block"

          />


          <div data-aos="fade-down"  className="flex  ml-[500px] mt-[200px]   h-[60px] w-[150px] gap-[20px] ">
            <div  className=" sm:hidden md:flex border h-[60px] w-[60px] border-hamzaorange-100 flex justify-center items-center ">
              <Image
                src={"/frame2.png"}
                alt="btn"
                width={32}
                height={32}


              />
            </div>
            <div className="sm:hidden md:flex h-[60px] w-[60px] bg-hamzaorange-100 flex justify-center items-center">
              <Image
                src={"/frame1.png"}
                alt="btn"
                width={32}
                height={32}


              />
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Header;




