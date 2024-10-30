import React from "react";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


const Feed = () => {
  return (
    <div className=" md:container sm:w-full sm:mt-[20px]   sm:h-full  md:h-[900px] mx-auto my-0 flex  items-start  justify-center ">
      <div className="sm:w-[320px] md:w-[80%]  md:ml-[0px] sm-h-[500px] md:h-full  border-hamzaorange-100 sm:flex-col-reverse md:flex-row flex sm:justify-start md:justify-center sm:items-start md:items-center md:gap-[20px] ">
        <div className="sm:h-full  md:h-[400px]  w-[320px]  flex justify-start flex-col items-start sm:p-[20px]">
          <h1 className= "text-sm md:text-[36px]  text-hamzabrown-100 taviraj sm:w-full   sm:mt-[20px]" >Recent News</h1>
          <div className="border border-hamzabrown-100 sm:w-[50px] md:w-[110px] md:mt-[10px]"></div>
          <div>
           
            <div className=" text-hamzablack3-100 w-[120px]"></div>
          </div>

          <p className=" sm:tsxt-sm taviraj md:text-[20px] text-hamzablack2-100 sm:mt-[30px] md:mt-[120px]">
            Where To Travel
          </p>
          <h2 className="taviraj sm:text-sm md:text-[36px] md:mt-[20px]  text-hamzabrown-100">
            Matoa Where To 
            
          </h2>
          <h2 className="taviraj sm:text-sm md:text-[25px] md:mt-[20px]  text-hamzabrown-100">
          Travel? Yogyakarta
            
          </h2>

          <div data-aos="zoom-out-right" className=" border sm:ml-[100px] sm:h-[40px] sm:w-[100px] md:h-[28px] md:w-[80px] text-[16px] text-hamzaorange-100 border-hamzaorange-100 mt-[40px] md:ml-[0px] text-center  font-medium">
        
            <AlertDialog>
  <AlertDialogTrigger> Discover</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>This Is Muhammad Hamza</AlertDialogTitle>
      <AlertDialogDescription>
      Don t watch the clock; do what it does. Keep going.🏆
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>



          </div>
        </div>
        <div className="sm:h-full sm:w-full md:h-[500px] md:w-[680px]  ">
          <div className="md:h-[458px] md:w-[630px] bg-hamza-100 sm:hidden md:block md:ml-[180px] "></div>
          <Image
            src={"/Vector6.png"}
            alt="Vector6.png"
            width={736}
            height={264}
            data-aos="fade-left"
            className="mt-[-500px] ml-[130px] sm:hidden md:block"
          />

          <Image
            src={"/Vector7.png"}
            alt="Vector7.png"
            width={736}
            height={264}
            data-aos="fade-left"
            className="mt-[-210px] ml-[130px] sm:hidden md:block"
          />

          <Image
            src={"/Vector8.png"}
            alt="Vector7.png"
            width={736}
            height={264}
            data-aos="fade-left"
            className="mt-[-230px] ml-[130px] sm:hidden md:block"
          />

          <Image
            src={"/Vector10.png"}
            alt="Vector10.png"
            width={399}
            height={216}
            data-aos="fade-left"
            className="mt-[-10px] ml-[410px] sm:hidden md:block"
          />

          <Image
            src={"/Vector11.png"}
            alt="Vector11.png"
            width={413}
            height={226}
            data-aos="fade-left"
            className="mt-[-180px] ml-[395px] sm:hidden md:block"
          />

          <Image
            src={"/MaskGroup4.png"}
            alt="Vector11.png"
            width={610}
            height={484}
            data-aos="fade-left"
            className="sm:mt-[20px] md:mt-[-540px] sm:h-[170px] sm:w-[320px] md:h-[484px] md:w-[610px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Feed;
