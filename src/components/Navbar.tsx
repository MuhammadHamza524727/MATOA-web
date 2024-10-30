import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className=" md:container sm:w-full sm:h-[50px] md:mx-auto md:my-0  ">
      <div className=" md:w-full    sm:h-full md:h-28 md:gap-5 sm:w-[320px]   md:mx-auto md:my-0  flex justify-between items-center">
        <div className="  sm:gap-[220px]  md:h-full  flex justify-between items-center ">
          <div>
            <Image
              src={"/image5.png"}
              alt="logo"
              width={178}
              height={22}
              className="sm:h-[12px]  sm:w-[80px] md:h-[22px] md:w-[178px] sm:ml-[20px] "
            />
          </div>

          <div className=" sm:hidden   md:block  ">
            <ul className="flex justify-between items-center md:gap-[40px] md:ml-[50px] text-hamzablack3-100 ">
              <li>
                <Link
                  href="/"
                  className="text-hamzabrown-100 taviraj text-[20px]"
                >
                  Watches
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-hamzabrown-100 taviraj text-[20px]"
                >
                  Eyewear
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-hamzabrown-100 taviraj text-[20px]"
                >
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-hamzabrown-100 taviraj text-[20px]"
                >
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* hamburgur */}
          <Sheet>
            <SheetTrigger className="sm:block md:hidden">
              <CiMenuFries className="sm:flex md:hidden sm:[h-10px] sm:w-[30px]" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
              <Image
              src={"/image5.png"}
              alt="logo"
              width={178}
              height={22}
              className="sm:h-[12px] sm:block md:hidden sm:w-[80px] md:h-[22px] md:w-[178px] sm:ml-[0px]"
            />
                <SheetDescription>
                <div className=" sm:flex justify-start items-start flex-col md:hidden  ">
            <ul className="flex justify-between items-start  text-hamzablack3-100 sm:flex gap-5 mt-8 flex-col md:hidden  ">
              <li>
                <Link
                  href="/"
                  className="text-hamzabrown-100 nunito text-[20px]"
                >
                  Watches
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-hamzabrown-100 nunito text-[20px]"
                >
                  Eyewear
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-hamzabrown-100 nunito text-[20px]"
                >
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-hamzabrown-100 nunito text-[20px]"
                >
                  News
                </Link>
              </li>
            </ul>
          </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <div className=" sm:hidden md:flex flex justify-between  items-center  md:w-[230px] ">
            <Image
              src={"/searchcopy.png"}
              alt="shape-icon"
              width={32}
              height={32}
            />

            <div className="flex justify-center items-center gap-2">
              <Image src={"/user.png"} alt="path-icon" width={24} height={24} />
              <p className=" sm:hidden md:block text-lg taviraj mt-1">Log In</p>
            </div>

            <div className=" sm:hidden md:flex  rounded-full h-[46px] w-[46px] bg-amber-100 flex justify-center items-center border-none  bg-hamza-100">
              <Image
                src={"/cartcopy.png"}
                alt="shape-icon"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
