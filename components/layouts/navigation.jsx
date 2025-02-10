"use client";
import React, { useState } from "react";
import headerData from "../../data/nav.json";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { logo, SocialIcons, items } = headerData;
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[999] h-24 bg-white shadow-md "
      onMouseLeave={() => setHoveredMenu(null)} // Keeps hoveredMenu open until mouse leaves the entire header
    >
      <div className="max-w-[90%] xl:max-w-[1280px] mx-auto px-4">
        <div className="flex justify-between items-center mt-12">
          {/* Logo */}
          <Link href="/">
            <div>
              <Image src={logo} alt="Logo Image" width={150} height={29} />
            </div>
          </Link>

          {/* Navigation Menu */}
          <div className="hidden xl:flex items-center space-x-8 ">
            {items?.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredMenu(item)}
              >
                {item?.link ? (
                  <Link
                    href={item?.link}
                    className="text-gray-700 text-lg hover:text-[#9370E4]"
                  >
                    {item?.text}
                  </Link>
                ) : (
                  <span className="text-lg cursor-pointer hover:text-[#9370E4]">
                    {item?.text}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden xl:flex space-x-4">
            {SocialIcons?.map((item, index) => (
              <Link href={item?.link} key={index}>
                <Image
                  src={item?.icon}
                  alt="social logo"
                  width={18}
                  height={18}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <div className="block xl:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M2 5h20v2H2zM2 11h20v2H2zM2 17h20v2H2z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[1000] flex justify-center items-center">
          <div className="bg-white w-[90%] max-w-lg p-6 rounded-lg shadow-lg relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-black text-2xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              ×
            </button>

            {/* Mobile Menu Items */}
            <nav className="flex flex-col space-y-4">
              {items.map((item, index) => (
                <div key={index} className="border-b pb-2">
                  <Link
                    href={item?.link || "#"}
                    className="text-lg text-gray-800 hover:text-[#9370E4]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.text}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((sub, subIndex) => (
                        <Link
                          key={subIndex}
                          href={sub.link}
                          className="text-sm text-[#9370E4] hover:text-[#7b5acb] block"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sub.text}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}

      {hoveredMenu && hoveredMenu?.submenu?.length > 0 && (
        <div
          className="fixed left-1/2 transform -translate-x-1/2 w-screen h-96 bg-white shadow-lg rounded-lg flex items-center justify-between px-48"
          onMouseEnter={() => setHoveredMenu(hoveredMenu)} 
        >
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-gray-800">
              {hoveredMenu.text}
            </h3>
            <p className="text-gray-600 mt-2">{hoveredMenu.description}</p>
            <Link
              href={hoveredMenu.cta[0].link || "#"}
              className="mt-4 inline-block bg-[#9370E4] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#7b5acb] transition"
            >
              {hoveredMenu.cta[0].label}
            </Link>
          </div>

          <div className="flex flex-row space-x-6  items-center">
            {hoveredMenu.submenu.map((submenuItem, submenuIndex) => (
              <React.Fragment key={submenuIndex}>
                {submenuIndex !== 0 && (
                  <div className="h-12 border-l  border-gray-300"></div>
                )}
                <Link href={submenuItem?.link}>
                  <div className="flex flex-col items-center  px-4">
                    <Image
                      src={submenuItem?.icon}
                      alt="icon"
                      width={38}
                      height={38}
                    />
                    <span className="text-lg font-semibold text-[#7b5acb] mt-2">
                      {submenuItem?.text}
                    </span>
                  </div>
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
