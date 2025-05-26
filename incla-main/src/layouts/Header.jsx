import React, { useState, useRef, useEffect } from "react";
import PrimaryButton from "@/components/button/PrimaryButton";
import { LoginIcon } from "@/components/icon/login-icon";
import { navLink } from "@/data/nav";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
;
const Header = () => {
  // State to toggle the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Create a ref for the mobile menu to detect clicks outside
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const router = useRouter();
  const handleClick = () => {
    router.push("/userLogin");
  };

  // Close the mobile menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close the menu if the click is outside of both the mobile menu and hamburger button
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false); // Close the menu if click is outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component is unmounted or re-rendered
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="bg-white flex items-center justify-between xl:justify-center"
      style={{
        boxShadow: "0px 4px 4px 0px #00000040",
      }}
    >
      <nav className="h-24 z-10 flex items-center justify-between max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl mx-auto px-3 w-full">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 md:gap-7">
          <Image
              src="/image/logo.png"
              width={67}
              height={85}
              alt="logo"
              className="w-10 h-14 md:w-16 md:h-20 object-cover"
          />
          <h1 className="text-2xl lg:text-4xl 2xl:text-6xl font-bold">INCLA</h1>
        </Link>


        {/* Mobile Hamburger Icon */}
        <div
          className="lg:hidden z-10 flex items-center"
          onClick={toggleMenu}
          ref={hamburgerRef} // Reference to the hamburger icon
        >
          <button className="text-2xl">
            <i className={`fa ${isMenuOpen ? "fa-times p-4" : "fa-bars p-4"}`}></i>
          </button>
        </div>

        {/* Navigation links for large screens */}
        <div className="lg:flex items-center hidden">
          <button className="flex items-center" onClick={handleClick}>
            <LoginIcon />
            <span className="text-base lg:text-lg font-bold text-incla-black-100 hover:text-incla-purple">
              Login
            </span>
          </button>
          <ul className="flex items-center min-w-fit">
            {navLink.map((value, index) => (
              <li key={index} className="min-w-fit mx-2 relative group hover:bg-incla-purple rounded-md px-4">
                <Link
                  className={`text-base lg:text-lg 2xl:text-2xl font-bold text-incla-black-100 hover:text-white `}
                  href={value.href ? value.href : ''}>
                  <div className="flex">
                    {value.name}{" "}
                    <div className={`hidden ml-1 ${value.id === 3 || value.id === 4 ? "!block" : ""}`}>
                      <i className={`fa fa-angle-down`}></i>
                    </div>
                  </div>
                </Link>
                {value.id === 3 ? (
                  <ul className="absolute top-7 bg-white z-10 p-2 hidden group-hover:!block min-w-fit text-nowrap">
                    <div className="relative flex flex-col gap-2 w-full">
                      <li>
                        <Link href={"admissionReq"} className="w-full h-full m-3 hover:bg-incla-purple hover:text-white rounded-md px-4 py-1">
                          Admission Requirements
                        </Link>
                      </li>
                      <li>
                        <Link href={"apply"} className="w-full h-full m-3 hover:bg-incla-purple hover:text-white rounded-md px-4 py-1">
                          Apply Now
                        </Link>
                      </li>
                      <li>
                        <Link href={"admissionList"} className="w-full h-full m-3 hover:bg-incla-purple hover:text-white rounded-md px-4 py-1">
                          Admission List
                        </Link>
                      </li>
                    </div>
                  </ul>
                ) : null}
                {value.id === 4 ? (
                  <ul className="absolute top-7 bg-white z-10 p-2 hidden group-hover:!block min-w-fit text-nowrap">
                    <div className="relative flex flex-col gap-2 w-full">
                      <li>
                        <Link href={"academicPro"} className="w-full h-full m-5 hover:bg-incla-purple hover:text-white rounded-md px-4 py-1">
                          Academic programs
                        </Link>
                      </li>
                      <li>
                        <Link href={"lMasters"} className="w-full h-full m-5 hover:bg-incla-purple hover:text-white rounded-md px-4 py-1">
                          Licentiate/Masters
                        </Link>
                      </li>
                      <li>
                        <Link href={"diploma"} className="w-full h-full m-5 hover:bg-incla-purple hover:text-white rounded-md px-4 py-1">
                          Diploma in the Theology of the consecrated life
                        </Link>
                      </li>
                      <li>
                        <Link href={"certificate"} className="w-full h-full m-5 hover:bg-incla-purple hover:text-white rounded-md px-4 py-1">
                          Certificate in the Theology of the consecrated life
                        </Link>
                      </li>
                      <li>
                        <Link href={"clweek"} className="w-full h-full m-5 hover:bg-incla-purple hover:text-white rounded-md px-4 py-1">
                          Consecrated life week
                        </Link>
                      </li>
                      <li>
                        <Link href={"retreat"} className="w-full h-full m-5 hover:bg-incla-purple hover:text-white rounded-md px-4 py-1">
                          Retreat services
                        </Link>
                      </li>
                    </div>
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        {/*
          <Link href={"contact"}>
            <PrimaryButton
              textClass={"!text-base lg:!text-lg 2xl:!text-2xl"}
              className={"min-w-fit hover:bg-incla-purple hover:text-white rounded-md px-4"}
            >
              Contact Us
            </PrimaryButton>
          </Link>
          */}
        </div>

        {/* Mobile Menu: Display when isMenuOpen is true */}
        <div
          ref={mobileMenuRef} // Reference to mobile menu for click outside detection
          className={`lg:hidden w-fit z-10 bg-white p-4 border border-incla-purple border-t-0 border-x-0 absolute top-24 right-0 ${isMenuOpen ? "block" : "hidden"}`}
        >
          <ul className="flex flex-col gap-3">
            {navLink.map((value, index) => (
              <li key={index} className="relative group text-left">
                {value.href ? (
                  <Link
                    className="text-base lg:text-lg 2xl:text-2xl text-incla-black-100 hover:bg-incla-purple hover:text-white px-4"
                    href={value.href}
                  >
                    {value.name}
                  </Link>
                ) : (
                  <div className="text-base lg:text-lg 2xl:text-2xl text-incla-black-100 hover:bg-incla-purple hover:text-white px-4">{value.name}</div>
                )}
                {value.id === 3 ? (
                  <ul className="p-2 mt-2 hidden group-hover:block text-[14.5px]">
                    <div className="relative flex flex-col gap-2 w-full">
                      <li className="hover:bg-incla-purple hover:text-white px-4 border border-y-incla-purple pt-2 border-x-0">
                        <Link href={"admissionReq"} className="w-full">
                          Admission Requirements
                        </Link>
                      </li>
                      <li className="hover:bg-incla-purple hover:text-white px-4 border border-y-incla-purple border-x-0 border-t-0">
                        <Link href={"apply"} className="w-full">
                          Apply Now
                        </Link>
                      </li>
                      <li className="hover:bg-incla-purple hover:text-white px-4 border border-y-incla-purple border-x-0 border-t-0">
                        <Link href={"admissionList"} className="w-full">
                          Admission List
                        </Link>
                      </li>
                    </div>
                  </ul>
                ) : null}
                {value.id === 4 ? (
                  <ul className="p-2 mt-2 group-hover:block hidden text-[14.5px]">
                    <div className="relative flex flex-col gap-2 w-full">
                      <li className="hover:bg-incla-purple hover:text-white px-4 border border-y-incla-purple border-x-0 pt-2">
                        <Link href={"academicPro"} className="w-full">
                          Academic programs
                        </Link>
                      </li>
                      <li className="hover:bg-incla-purple hover:text-white px-4 border border-y-incla-purple border-x-0 border-t-0">
                        <Link href={"lMasters"} className="w-full">
                          Licentiate/Masters
                        </Link>
                      </li>
                      <li className="hover:bg-incla-purple hover:text-white px-4 border border-y-incla-purple border-x-0 border-t-0">
                        <Link href={"diploma"} className="w-full">
                          Diploma in the Theology of the consecrated life
                        </Link>
                      </li>
                      <li className="hover:bg-incla-purple hover:text-white px-4 border border-y-incla-purple border-x-0 border-t-0">
                        <Link href={"certificate"} className="w-full">
                          Certificate in the Theology of the consecrated life
                        </Link>
                      </li>
                      <li className="hover:bg-incla-purple hover:text-white px-4 border border-y-incla-purple border-x-0 border-t-0">
                        <Link href={"clweek"} className="w-full">
                          Consecrated life week
                        </Link>
                      </li>
                      <li className="hover:bg-incla-purple hover:text-white px-4 border border-y-incla-purple border-x-0 border-t-0">
                        <Link href={"retreat"} className="w-full">
                          Retreat services
                        </Link>
                      </li>
                    </div>
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
          <Link href="/userLogin">
            <button className="flex items-center mt-3 pt-1 border border-t-incla-purple border-x-0 border-b-0 w-full">
              <LoginIcon />
              <span className="text-base lg:text-lg text-incla-black-100">Login</span>
            </button>
          </Link>
          <Link href={'/contact'}>
            <PrimaryButton
              textClass={"!text-base lg:!text-lg 2xl:!text-2xl"}
              className={"w-full mt-6"}
            >
              Contact Us
            </PrimaryButton>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;