"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaRegCopyright,
} from "react-icons/fa";

const Footer = () => {
  const pathname = usePathname();
  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  console.log(pathname);
  return (
    <footer className="flex gap-4 w-screen px-9 flex-wrap justify-between items-start me-20 mt-28 md:mt-52 py-16 bg-footer-black">
      <div className="my-4">
        <div className="flex items-center gap-1">
          <h4 className="text-2xl md:text-3xl my-2 font-bold">KAISER</h4>
          <Image
            alt="kaiser cloud"
            src={"/images/kaiser-cloud.png"}
            width={52.95}
            height={34}
          />
        </div>
        <div className="flex flex-col md:text-xl mt-5">
          <a href="tel:123-456-7890">123-456-7890</a>
          <a href="mailto:Info@mysite.com">Info@mysite.com</a>
          <address>
            <span>500 Terry Francois St</span>
            <br />
            <span>San Francisco, CA 94158</span>
          </address>
        </div>
      </div>
      <div className="my-4">
        <h4 className="text-2xl md:text-3xl my-2">Pages</h4>
        <ul className="md:text-xl mt-5">
          <li
            className={`${pathname === "/" ? "text-2xl font-bold" : ""} my-4`}
          >
            <Link href="/">Home</Link>
          </li>
          {["roadmap", "vision", "contact"].map((item) => (
            <li
              key={item}
              className={`${
                pathname === item ? "text-xl md:text-2xl font-bold" : ""
              } my-4`}
            >
              <Link href={`/${item}`}>
                {/*to capitalize first letter*/}
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="my-4">
        <h4 className="text-2xl md:text-3xl my-2">Subscribe to our newslater</h4>
        <form
          className="flex flex-col gap-4 md:gap-11 mt-5 items-start"
          onSubmit={formSubmitHandler}
        >
          <input
            type="email"
            placeholder="Email..."
            className="p-4 bg-transparent border border-[#D6D6D6] placeholder:text-[#D6D6D6] rounded-lg w-[83vw] md:w-96 h-14"
          />
          <input
            type="submit"
            value={"Subscribe"}
            name="subscribe"
            className="bg-gray rounded-lg w-full md:w-44 h-12 p-2"
          />
        </form>
      </div>
      <div className="my-4 flex md:block items-start justify-between w-full md:w-auto mr-0 md:mr-16">
        <div>
          <h4 className="text-2xl md:text-3xl my-2">Follow Us On</h4>
          <ul className="flex md:gap-4 my-5">
            {[FaLinkedinIn, FaFacebookF, FaInstagram].map((SocialIcon) => (
              <li
                key={SocialIcon.toString()}
                className="w-7 h-7 md:w-12 md:h-12 mr-3 md:mr-0 bg-white rounded-full flex flex-wrap justify-center items-center text-black text-xl md:text-2xl"
              >
                <Link href="/">
                  <SocialIcon />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="flex items-center gap-1 mt-4 md:mt-8 text-sm">
          <FaRegCopyright /> 2023 KAISER
        </p>
      </div>
    </footer>
  );
};

export default Footer;
