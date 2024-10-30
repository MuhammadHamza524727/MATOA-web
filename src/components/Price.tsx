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


const Price = () => {
  return (
    <div className="  md:container p-8   md:mt-[-70px] sm:h-full sm:w-full md:h-[750px] mx-auto my-0 flex justify-center items-center ">

    
      <div className="sm:w-full md:h-full md:w-[80%]     flex sm:flex-col-reverse md:flex-row justify-center ">
        <div className="sm:p-[20px] md:w-full flex justify-center  items-start gap-[20px] flex-col md:p-[20px]">
          <h2 className="taviraj sm:text-sm md:text-[36px] text-hamzabrown-100">
            Maple Series
          </h2>
          <div className="border border-hamzablack-100 sm:w-[40px]
           md:w-[70px] mt-[-20px]"></div>

          {/* Price 1*/}
          <div className="md:h-[131px] sm:w-full sm:h-full md:w-[300px] flex justify-center items-center ">
            <div className="sm:h-full sm:w-full md:h-[131px] md:w-[131px] bg-hamzabg2-100 flex justify-center items-center ">
              <Image
                src={"/image15.png"}
                alt="watch1"
                width={68.07}
                height={100}
                
              />
            </div>
            <div className="flex justify-center items-center flex-col sm:h-full sm:w-full md:h-[131px] md:w-[200px]">
              <p className="sm:text-sm md:text-[24px] taviraj text-hamzabrown-100 ">
                Way Kambas <br /> Maple
              </p>
              <p className="sm:text-sm md:text-[24px] taviraj text-hamzabrown-100 font-medium">
                Rp1.280.000
              </p>
            </div>
          </div>

          {/* Price 2*/}
          <div className="sm:h-full sm:w-full md:h-[131px] md:w-[300px] flex justify-center items-center ">
            <div className="sm:h-full sm:w-full md:h-[131px] md:w-[131px] bg-hamzabg2-100 flex justify-center items-center ">
              <Image
                src={"/image21.png"}
                alt="watch1"
                width={63.12}
                height={100}
              />
            </div>
            <div className="flex justify-center items-start flex-col sm:h-full sm:w-full  md:h-[131px] md:w-[200px]">
              <p className="sm:text-sm md:text-[24px] taviraj text-hamzabrown-100 ml-[20px]">
                Kaili
              </p>
              <p className="sm:text-sm  md:text-[24px] taviraj text-hamzabrown-100 ml-[20px] font-medium">
                Rp 950.000
              </p>
            </div>
          </div>

          {/* Price 3*/}
          <div className="sm:h-full sm:w-full md:h-[131px] md:w-[300px] flex justify-center items-center ">
            <div className=" sm:h-full sm:w-full  md:h-[131px] md:w-[131px] bg-hamzabg2-100 flex justify-center items-center ">
              <Image
                src={"/image16.png"}
                alt="watch1"
                width={68.07}
                height={100}
              />
            </div>
            <div className="flex justify-center items-start flex-col sm:h-full sm:w-full  md:h-[131px] md:w-[200px]">
              <p className="sm:text-sm md:text-[24px] taviraj text-hamzabrown-100 ml-[20px]">
                Sunda
              </p>
              <p className="sm:text-sm  md:text-[24px] taviraj text-hamzabrown-100 font-medium ml-[20px]">
                Rp 1.170.000
              </p>
            </div>
          </div>
        </div>

        {/* second price */}

        <div className=" flex justify-center items-start flex-col p-[20px] gap-[20px] md:pt-[100px]">
          <h2 className=" taviraj sm:text-sm md:text-[36px] text-hamzabrown-100">
            Ebony Series
          </h2>
          <div className="border border-hamzablack-100 sm:w-[40px] md:w-[70px] mt-[-20px]"></div>

          {/* Price 1*/}
          <div className="sm:h-full sm:w-full md:h-[131px] md:w-[300px] flex justify-center items-start  ">
            <div className="sm:h-full sm:w-full md:h-[131px] md:w-[131px] bg-hamzabg2-100 flex justify-center items-center ">
              <Image
                src={"/image20.png"}
                alt="watch1"
                width={65.16}
                height={100}
              />
            </div>
            <div className="flex justify-center items-start flex-col sm:w-full  md:h-[131px] md:w-[200px]">
              <p className="sm:text-sm md:text-[24px] taviraj text-hamzabrown-100 ml-[20px] sm:mt-[10px]">
                Kaili
              </p>
              <p className="taviraj sm:text-sm md:text-[16px] text-hamzablack2-100 ml-[20px] ">
                <del>Rp 1.280.000</del>
              </p>
              <p className=" sm:text-sm md:text-[24px] taviraj text-hamzabrown-100 font-medium ml-[20px]">
                Rp 960.000
              </p>
            </div>
          </div>

          {/* Price 2*/}
          <div className="sm:h-full sm:w-full md:h-[131px] md:w-[300px] flex justify-center items-start ">
            <div className="sm:h-[100px] sm:w-full md:h-[131px] md:w-[131px] bg-hamzabg2-100 flex justify-center items-center ">
              <Image
                src={"/image22.png"}
                alt="watch1"
                width={45.17}
                height={100}
              />
            </div>
            <div className="flex justify-center sm:mt-[30px] items-start flex-col sm:h-full sm:w-full md:h-[131px] md:w-[200px]">
              <p className="sm:text-sm md:text-[24px] taviraj text-hamzabrown-100 ml-[20px]">
                Mori
              </p>
              <p className="sm:text-sm md:text-[24px] taviraj text-hamzabrown-100 font-medium ml-[20px]">
                Rp 950.000
              </p>
            </div>
          </div>

          {/* Price 3 */}

          <div className="md:h-[131px] md:w-[300px] sm:h-full sm:w-full flex justify-center items-center ">
            <div className="md:h-[131px] md:w-[131px] sm:h-full sm:w-full bg-hamzabg2-100 flex justify-center items-center ">
              <Image
                src={"/image23.png"}
                alt="watch1"
                width={62.19}
                height={100}
              />
            </div>
            <div className=" sm:h-full sm:w-full flex justify-center items-start  flex-col  md:h-[131px] md:w-[200px]">
              <p className="sm:text-sm md:text-[24px] taviraj text-hamzabrown-100 ml-[20px] ">
                Alor
              </p>
              <p className=" sm:text-sm md:text-[24px] taviraj text-hamzabrown-100 font-medium ml-[20px]">
                Rp 1.170.000
              </p>
            </div>
          </div>
          <div className=" sm:hidden md:flex border border-hamzaorange-100 h-[66px] w-[272px] text-center flex justify-center items-center taviraj text-[20px] text-hamzaorange-100">
          <AlertDialog>
  <AlertDialogTrigger>Sea More</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle></AlertDialogTitle>
      <AlertDialogDescription>
        Comming Soon!
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Ok</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

          </div>
        </div>

        {/* 3rd Pricing */}
        <div className=" flex justify-center items-start flex-col md:p-[20px] sm:w-full gap-[20px]">
          <h2 className="taviraj sm:text-sm md:text-[36px] text-hamzabrown-100">Featured</h2>
          <div className="border border-hamzablack-100 sm:w-[40px] md:w-[70px] mt-[-20px]"></div>

          {/* Price 1*/}
          <div className=" md:h-[131px] sm:w-full md:w-[300px] flex justify-center items-center ">
            <div className="sm:h-full sm:w-full md:h-[131px] md:w-[131px] bg-hamzabg2-100 flex justify-center items-center ">
              <Image
                src={"/image17.png"}
                alt="watch1"
                width={70.49}
                height={100}
              />
            </div>
            <div className="flex justify-center items-center flex-col  h-[131px] w-[200px]">
              <p className="sm:text-sm md:text-[24px] taviraj text-hamzabrown-100 ml-[20px]">
                Sikka (Ebony & Maple)
              </p>
              <p className="sm:text-sm md:text-[24px] taviraj text-hamzabrown-100 font-medium ml-[20px]">
                Rp 1.198.000
              </p>
            </div>
          </div>

          {/* Price 2*/}
          <div className="sm:h-full sm:w-full md:h-[131px] md:w-[300px] flex justify-center items-center ">
            <div className="sm:h-[100px] sm:w-full md:h-[131px] md:w-[131px] bg-hamzabg2-100 flex justify-center items-center ">
              <Image
                src={"/image18.png"}
                alt="watch1"
                width={113}
                height={55}
              />
            </div>
            <div className="flex justify-center items-center flex-col  h-[131px] w-[200px]">
              <p className="sm:text-sm md:text-[24px] taviraj text-hamzabrown-100 ">
                Lore Walnut
              </p>
              <p className=" sm:text-sm md:text-[24px] taviraj text-hamzabrown-100 font-medium">
                Rp1.280.000
              </p>
            </div>
          </div>

          {/* Price 3*/}
          <div className="sm:h-full sm:w-full md:h-[131px] md:w-[300px] flex justify-center items-center ">
            <div className="sm:h-full sm:w-full md:h-[131px] md:w-[131px] bg-hamzabg2-100 flex justify-center items-center ">
              <Image
                src={"/image19.png"}
                alt="watch1"
                width={57.18}
                height={100}
              />
            </div>
            <div className="flex justify-center items-center flex-col  h-[131px] w-[200px]">
              <p className="sm:text-sm md:text-[22px] taviraj text-hamzabrown-100 ml-[20px]">
                Way Kambas Limited Edition
              </p>
              <p className=" sm:text-sm md:text-[24px] taviraj text-hamzabrown-100 font-medium">
                Rp 1.170.000
              </p>
              
            </div>
          </div>
            <div className=" sm:flex md:hidden border sm:ml-[80px] sm:text-sm  sm:text-center sm:items-center  border-hamzaorange-100 sm:h-[40px] md:h-[66px] sm:w-[100px] md:w-[272px] text-center flex justify-center items-center taviraj text-[20px] text-hamzaorange-100">
            See More
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;

