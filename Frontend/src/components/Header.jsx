import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom"; // ✅ Link import

const Header = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate()

  const links = ["Home", "Project", "About", "Contact"];

  const menuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <>
      <header className="w-full shadow-md bg-white top-0 left-0 z-50">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between sm:px-15 px-7 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div onClick={() => navigate("/")} className="sm:w-[47px] w-[35px] sm:h-[46px] h-[35px] cursor-pointer bg-gradient-to-r from-[#FFD66E] to-[#FE9502] rounded-full sm:text-sm text-[10px] text-white flex items-center justify-center font-semibold">
              RK
            </div>
            <div className="flex flex-col">
              <span className="font-serifpro italic sm:text-[21px] text-[15px] font-black">
                Rahul Kumar
              </span>
              <span className="font-serifpro italic sm:text-[11px] text-[8px] -mt-1">
                Full-Stack Developer
              </span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div>
            <span className="cursor-pointer sm:hidden">
              <IoMenu onClick={() => setMenuOpen(!menuOpen)} size={23} />
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden ml-90 md:flex gap-8">
            {links.map((link) => (
              <Link
                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                key={link}
              >
                <span
                  onClick={() => setActive(link)}
                  className={`font-serifpro italic text-sm font-semibold transition-colors duration-300 cursor-pointer ${active === link ? "text-[#786F6F]" : "text-[#1A1A1A]"
                    }`}
                >
                  {link}
                </span>
              </Link>
            ))}
          </nav>

          {/* Desktop Button */}
          <a 
          href="CV.pdf">
          <button className="hidden md:block h-10 rounded-lg text-white cursor-pointer  font-semibold hover:shadow-lg hover:scale-95 transform transition-transform duration-300 px-4 py-1 bg-gradient-to-r from-[#FFD66E] to-[#FE9502] font-serifpro italic">
            Download CV
          </button>

          </a>
        </div>
      </header>

      {/* Mobile Nav */}
      {menuOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
          className="md:hidden bg-white w-40 ml-45 mt-20 border-[0.6px] border-[#B7A9A9] rounded-lg shadow-lg transition-all duration-500 ease-in-out"
        >
          <nav className="flex flex-col w-40 h-70 items-center gap-6 py-6">
            {links.map((link) => (
              <Link
                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                key={link}
              >
                <motion.span
                  variants={itemVariants}
                  onClick={() => {
                    setActive(link);
                    setMenuOpen(false); // close after click
                  }}
                  className={`font-serifpro italic text-base font-semibold transition-colors duration-300 cursor-pointer ${active === link ? "text-[#786F6F]" : "text-[#1A1A1A]"
                    }`}
                >
                  {link}
                </motion.span>
              </Link>
            ))}
            <a
              href="CV.pdf"
              target="_blank"
              rel="noopener noreferrer">
              <button className="h-10 rounded-lg text-white font-semibold cursor-pointer hover:shadow-lg hover:scale-95 transform transition-transform duration-300 px-6 py-1 bg-gradient-to-r from-[#FFD66E] to-[#FE9502] font-serifpro italic">
                Download CV
              </button>
            </a>
          </nav>
        </motion.div>
      )}
    </>
  );
};

export default Header;
