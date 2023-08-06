import { FiGlobe } from "react-icons/fi";
import { FaUser, FaUserPlus } from "react-icons/fa";
import navbarItems from "../../api/nav-items.json";
import { NavLink } from "react-router-dom";
import NavbarDynamicIcon from "./navbar-dynamic-icon";

const Navbar = () => {
  return (
    <>
      <div className="xl:flex xl:justify-center bg-navbar-color min-w-[426px]">
        <div className="flex justify-between items-center px-[6px] md:px-4 xl:min-w-[1232px] xl:p-0">
          <div className="flex h-[40px] md:h-[45px] items-end ">
            {navbarItems.map((navItem) => (
              <div
                className=" hover:bg-brand-color h-[38px] md:h-[40px] mr-[1px] rounded-t-md flex items-center "
                key={navItem.name}
              >
                <NavLink
                  to={navItem.to}
                  className={({ isActive }) =>
                    isActive
                      ? "px-[12px] py-[12px] mt-[3px] md:px-[20px] md:mt-0"
                      : "brightness-[0%] invert-[80%] sepia-[72%] saturate-200 hue-rotate-180 contrast-[152%] px-[12px] py-[12px] mt-[3px] md:mt-0 md:px-[20px]"
                  }
                >
                  <img
                    className="h-[14px] md:h-[16px]"
                    src={navItem.image}
                    alt={navItem.name}
                  />
                </NavLink>
              </div>
            ))}
          </div>
          <div className="hidden md:flex items-center align-middle bg-navbar-color text-sm font-medium">
            <button className="pl-4 pr-3 h-[38px] text-white opacity-80 flex items-center">
              <FiGlobe size={16} className="mr-[8px]" />
              <p className="hidden lg:flex">Türkçe (TR)</p>
            </button>
            <button className="pl-4 pr-3 h-[38px] text-white opacity-80 flex items-center">
              <FaUser size={16} className="mr-[8px]" />
              <p className="hidden lg:flex">Giriş yap</p>
            </button>
            <button className="pl-4 pr-3 h-[38px] text-white opacity-80 flex items-center">
              <FaUserPlus size={16} className="mr-[8px]" />
              <p className="hidden lg:flex">Kayıt Ol</p>
            </button>
          </div>
        </div>
      </div>

     <NavbarDynamicIcon />
    </>
  );
};

export default Navbar;
