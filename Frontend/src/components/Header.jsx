import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const links = ["Home", "Project", "About", "Contact"];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      <header className="w-full shadow-md bg-white fixed top-0 left-0 z-50 ">
        <div className="max-w-[1280px] mx-auto flex items-center sm:justify-between  px-7 sm:px-12 py-2">
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="sm:w-[47px] w-[35px] sm:h-[46px] h-[35px] bg-gradient-to-r sm:text-[14px] text-[12px] from-[#FFD66E] to-[#FE9502] rounded-full text-white flex items-center justify-center font-semibold">
              RK
            </div>
            <div className="flex flex-col">
              <span className=" w-[8rem] font-serifpro italic sm:text-[18px] text-[15px] font-black">
                Rahul Kumar
              </span>
              <span className="font-serifpro italic sm:text-[11px] text-[8px] -mt-1">
                Full-Stack Developer
              </span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden ml-20 cursor-pointer">
            {menuOpen ? (
              <IoClose size={26} onClick={() => setMenuOpen(false)} />
            ) : (
              <IoMenu size={26} onClick={() => setMenuOpen(true)} />
            )}
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 ">
            {links.map((link) => (
              <Link
                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                key={link}
              >
                <span
                  onClick={() => setActive(link)}
                  className={`font-serifpro italic text-sm font-semibold transition-colors mt-2 duration-300 cursor-pointer ${
                    active === link ? "text-[#786F6F]" : "text-[#1A1A1A]"
                  }`}
                >
                  {link}
                </span>
              </Link>
            ))}
          {/* Desktop Button */}
          <a href="CV.pdf" target="_blank" rel="noopener noreferrer">
            <button className="hidden md:block h-10 rounded-lg text-white cursor-pointer font-semibold hover:shadow-lg hover:scale-95 transform transition-transform duration-300 px-4 py-1 bg-gradient-to-r from-[#FFD66E] to-[#FE9502] font-serifpro italic">
              Download CV
            </button>
          </a>
          </nav>

        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="absolute top-[70px] right-5 bg-white w-48 border border-[#B7A9A9] rounded-lg shadow-lg z-40"
          >
            <nav className="flex flex-col items-center gap-6 py-6">
              {links.map((link) => (
                <motion.div
                  key={link}
                  variants={itemVariants}
                  onClick={() => {
                    setActive(link);
                    setMenuOpen(false);
                  }}
                >
                  <Link to={link === "Home" ? "/" : `/${link.toLowerCase()}`}>
                    <span
                      className={`font-serifpro italic text-base font-semibold transition-colors duration-300 cursor-pointer ${
                        active === link ? "text-[#786F6F]" : "text-[#1A1A1A]"
                      }`}
                    >
                      {link}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <a href="CV.pdf" target="_blank" rel="noopener noreferrer">
                <button className="h-10 rounded-lg text-white font-semibold cursor-pointer hover:shadow-lg hover:scale-95 transform transition-transform duration-300 px-6 py-1 bg-gradient-to-r from-[#FFD66E] to-[#FE9502] font-serifpro italic">
                  Download CV
                </button>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
