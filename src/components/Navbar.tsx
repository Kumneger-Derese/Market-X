import { useState } from "react";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { useTheme } from "../context/ThemeContext";
import { HiMoon, HiSun } from "react-icons/hi2";

const navLinks = [
  { title: "Home", href: "#" },
  { title: "Offers", href: "#offers" },
  { title: "Company", href: "#company" },
  { title: "Services", href: "#services" },
  { title: "Contact", href: "#contact" },
];


const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const { isDark, toggleTheme } = useTheme()

  const onClose = () => {
    setIsNavOpen(false)
  }

  return (
    <nav className="flex z-50 justify-between sticky top-4 items-center py-2 rounded-xl shadow px-2  bg-white dark:bg-slate-800 dark:text-slate-50 border border-slate-300 dark:border-slate-700">
      {/* Logo */}
      <a
        href="/"
        className="font-bold font-PoppinHeavy text-2xl lg:text-3xl text-slate-700 dark:text-slate-400">
        Market-<span className="italic text-blue-400 dark:text-shadow-blue-400 text-shadow-md">X</span>
      </a>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center gap-x-24">
        <div className="lg:flex items-center space-x-8">
          {navLinks.map((nav) => (
            <li key={nav.title}>
              <a href={nav.href}  className="transition-colors scroll-smooth duration-150 font-medium text-slate-800 dark:text-slate-400 dark:hover:text-blue-400 hover:text-blue-600 ">
                {nav.title}
              </a>
            </li>
          ))}
        </div>

        <div className="flex items-center space-x-8">
          <li>
            <a href="#signup" className="text-slate-700 border transition-colors duration-300 font-medium py-0.5 px-2 rounded-md flex items-center  hover:text-white hover:bg-black dark:text-slate-400">Signup</a>
          </li>

          {/* theme switch */}
          <li>
            <button className="p-2.5 rounded-full bg-black" onClick={() => toggleTheme()}>
              {isDark ? <HiSun className="text-white" /> : <HiMoon className="text-white" />}
            </button>
          </li>
        </div>

      </ul>

      {/* Mobile Menu Trigger */}
      <div className="lg:hidden">
        <button onClick={() => setIsNavOpen(true)}><CgMenuRight className="text-2xl" /></button>
      </div>

      {/* Mobile Menu  */}
      <div className={`lg:hidden flex flex-col fixed top-0 left-0 w-full h-full transform transition-transform duration-300 ${isNavOpen ? 'translate-x-0' : "translate-x-full"}  bg-white dark:bg-slate-900 dark:text-gray-100`}>

        <button className="flex justify-end p-8 text-2xl hover:text-red-500" onClick={onClose}>
          <CgClose />
        </button>

        <ul className="flex flex-col items-center space-y-4 bg-white dark:bg-slate-900 ">
          {navLinks.map((nav) => (
            <li key={nav.title} onClick={onClose}>
              <a href={nav.href} className="transition-colors duration-150 sm:text-lg font-medium text-slate-800 dark:text-gray-300 hover:text-slate-400"> {nav.title} </a>
            </li>
          ))}

          <li onClick={onClose}>
            <a href="#signup" className="text-slate-700 dark:text-gray-300 border transition-colors duration-300 font-medium py-0.5 px-2 rounded-md flex items-center sm:text-lg  hover:text-white hover:bg-black">Signup</a>
          </li>

          <li>
            <button className="px-6 py-2 rounded-md bg-orange-400"
              onClick={() => {
                toggleTheme()
                onClose()
              }}>
              {isDark ? <HiSun className="text-white" /> : <HiMoon className="text-white" />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar