import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div data-aos="fade-up" className="md:flex-row sm:flex-col    sm:bg-hamzablack3-100 sm:w-full md:container md:mx-auto md:my-0 flex justify-center items-center">
      <Image
        src={"/image5.png"}
        alt="logo"
        width={250}
        height={42}
          
        className="sm:block md:hidden h-[15px] w-[100px] mt-[10px] m-[20px] "
      />
      <p    className="sm:block md:hidden text-hamzabg-100 text-[12px] mt-[-22px]">
        code by Muhammad Hamza
      </p>

      <div className=" sm:hidden md:flex mx-auto  my-0  bg-hamzabg4-100 sm:w-full  md:h-[573px] flex justify-center items-center  flex-col ">
        <div className=" bg-hamzabg4-100  flex justify-center items-center flex-col">
          <div className="flex sm:hidden md:flex sm:flex-col md:flex-row bd:justify-between md:gap-[40px] ">
            <Image
              src={"/image25.png"}
              alt="image25"
              width={100}
              height={100}
            />

            <Image
              src={"/image26.png"}
              alt="image25"
              width={100}
              height={100}
            />

            <Image
              src={"/image27.png"}
              alt="image25"
              width={100}
              height={100}
            />

            <Image
              src={"/image28.png"}
              alt="image25"
              width={100}
              height={100}
            />

            <Image
              src={"/image29.png"}
              alt="image25"
              width={100}
              height={100}
            />
          </div>

          <div className="flex sm:hidden md:flex sm:flex-col md:flex-row md:justify-between md:gap-[40px] ">
            <Image
              src={"/image32.png"}
              alt="image25"
              width={100}
              height={100}
            />

            <Image
              src={"/image33.png"}
              alt="image25"
              width={100}
              height={100}
            />

            <Image
              src={"/image34.png"}
              alt="image25"
              width={100}
              height={100}
            />

            <Image
              src={"/image35.png"}
              alt="image25"
              width={100}
              height={100}
            />

            <Image
              src={"/image36.png"}
              alt="image25"
              width={100}
              height={100}
            />
          </div>
        </div>

        <footer className="bg-[#e64e2b] sm:w-full  md:w-[100%] text-white md:mx-auto md:my-0  md:h-[400px] flex  justify-center items-center ">
          <div className="  md:w-[80%] md:mx-auto md:my-0 flex  justify-center items-center sm:hidden md:flex  gap-8">
            {/* Company Info */}
            <div>
              <h2 className=" md:text-lg font-bold mt-[30px]">
                <div className="  flex justify-start items-start   ">
                  <Image
                    src={"/image30.png"}
                    alt="image25"
                    width={178}
                    height={22}
                  />
                </div>
              </h2>
              <address className="not-italic text-hamzawhite-100 mt-[60px] taviraj">
                Address
              </address>
              <address className="not-italic text-hamzawhite-100 taviraj">
                Store & Office
                <br />
                Jl. Setrasari Kulon III, No. 10-12,
                <br />
                Sukarasa, Sukasari, Bandung,
                <br />
                Jawa Barat, Indonesia 40152
              </address>
              <p className="mt-4 text-hamzawhite-100 taviraj">
                <strong>Office Hour</strong>
                <br />
                Monday - Sunday
                <br />
                10.00 - 18.00
              </p>
            </div>

            {/* Contact Info */}
            <div className="sm:hidden md:block">
              <h2 className="text-lg text-hamzawhite-100 text-[24px] taviraj font-semibold ">
                Get in touch
              </h2>
              <div className=" border border-hamzawhite-100 w-[50px]"></div>
              <p className="text-hamzawhite-100 mt-[58px] taviraj font-medium ">
                Phone <span className="ml-[50px]"> 022-20277564</span>
              </p>
              <p className="text-hamzawhite-100 mt-[10px] taviraj font-medium">
                Service <span className="ml-[40px]"> 0811- 233-8899 </span>
                <br /> Center{" "}
              </p>
              <p className="text-hamzawhite-100 taviraj font-medium">
                Customer <span className="ml-[25px]">0811-235-9988</span> <br />{" "}
                Service{" "}
              </p>
              <div className="mt-4 flex space-x-4 taviraj">
                {/* Social Media Icons */}
                <a href="#" aria-label="Instagram">
                  <Image
                    src="/Facebook.png"
                    alt="Instagram"
                    className="w-6 h-6"
                  />
                </a>
                <a href="#" aria-label="Facebook">
                  <Image
                    src="/Instagram.png"
                    alt="Facebook"
                    className="w-6 h-6"
                  />
                </a>

                <a href="#" aria-label="Twitter">
                  <Image src="/Twitter.png" alt="Twitter" className="w-6 h-6" />
                </a>
                <a href="#" aria-label="YouTube">
                  <Image src="/Youtubee.png" alt="YouTube" className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Useful Links */}
            <div className="sm:hidden md:block">
              <h2 className="text-lg text-hamzawhite-100 text-[24px] taviraj font-semibold ">
                Useful Link
              </h2>
              <div className=" border border-hamzawhite-100 w-[50px]"></div>

              <ul className="mt-[56px]">
                <li>
                  <a
                    href="#"
                    className="hover:underline text-hamzawhite-100 taviraj"
                  >
                    Warranty & Complaints
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline text-hamzawhite-100 taviraj"
                  >
                    Order & Shipping
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline text-hamzawhite-100 taviraj"
                  >
                    Tracking Order
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline text-hamzawhite-100 taviraj"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline text-hamzawhite-100 taviraj"
                  >
                    Repair
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline text-hamzawhite-100 taviraj"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline text-hamzawhite-100 taviraj"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Campaign Links */}
            <div className="sm:hidden md:block">
              <h2 className="text-lg  text-hamzawhite-100 text-[24px] taviraj font-semibold">
                Campaign
              </h2>
              <div className=" border border-hamzawhite-100 w-[50px]"></div>

              <ul className="mt-[56px]">
                <li>
                  <a
                    href="#"
                    className="hover:underline text-hamzawhite-100 taviraj"
                  >
                    Mengenal Arti Cukup
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline text-hamzawhite-100 taviraj"
                  >
                    Tell Your Difference
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline text-hamzawhite-100 taviraj"
                  >
                    Waykambas
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline text-hamzawhite-100 taviraj"
                  >
                    Rebrand
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline text-hamzawhite-100 taviraj"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline text-hamzawhite-100 taviraj"
                  >
                    Singo
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline text-hamzawhite-100 taviraj"
                  >
                    Rakai
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
