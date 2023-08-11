import { FaFacebook } from "react-icons/fa";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { RiGlobalLine } from "react-icons/ri";
const Footer = () => {
  return (
    <>
      <div>
        <div className="flex md:hidden flex-col justify-center items-center px-[16px] py-[16px] text-[14px] leading-[24px]">
          <p className="text-gray-600 h-[24px]">© 2023 Getir</p>
          <a
            className="text-navbar-color h-[24px] mt-[4px] mb-[8px]"
            href="/outside"
          >
            Bilgi Toplumu Hizmetleri
          </a>
          <div className="flex items-center mb-[8px] w-[108px] h-[32px] justify-between">
            <a
              href="/somewhere"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              <FaFacebook className="w-[20px] h-[20px] text-indigo-900" />
            </a>
            <a
              href="/somewhere"
              className="opacity-60 hover:opacity-100 transition-opacity "
            >
              <BsTwitter className="w-[20px] h-[20px] text-indigo-900" />
            </a>
            <a
              href="/somewhere"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              <BsInstagram className="w-[20px] h-[20px] text-indigo-900" />
            </a>
          </div>
          <button className="px-[10px] py-[4px] text-gray-500 text-[13px] flex items-center border rounded-md bg-white hover:text-navbar-color transition-colors">
            <div className="w-[24px] h-[24px] flex items-center">
              <RiGlobalLine className="w-[20px] h-[20px]" />
            </div>
            <p>Türkçe (TR)</p>
          </button>
        </div>
        <div className="flex justify-center">
          <div className="hidden md:flex lg:min-w-[1232px] p-[24px] text-[13px] justify-between">
            <div className="flex items-center h-[32px]">
              <p className="text-gray-600">© 2023 Getir</p>
              <p className="mx-[12px]">-</p>
              <a
                className="text-navbar-color flex items-center"
                href="/outside"
              >
                <p>Bilgi Toplumu Hizmetleri</p>
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex">
                <div className="w-[32px] h-[32px] rounded-lg hover:bg-navbar-color text-gray-800 hover:text-navbar-color text-opacity-60 hover:text-opacity-90 hover:bg-opacity-10 flex items-center justify-center transition-all">
                  <a href="/somewhere">
                    <FaFacebook className="w-[20px] h-[20px]" />
                  </a>
                </div>
                <div className="w-[32px] h-[32px] ml-[10px] rounded-lg hover:bg-navbar-color text-gray-800 hover:text-navbar-color text-opacity-60 hover:text-opacity-90 hover:bg-opacity-10 flex items-center justify-center transition-all">
                  <a href="/somewhere">
                    <BsTwitter className="w-[20px] h-[20px]" />
                  </a>
                </div>
                <div className="w-[32px] h-[32px] ml-[10px] rounded-lg hover:bg-navbar-color text-gray-800 hover:text-navbar-color text-opacity-60 hover:text-opacity-90 hover:bg-opacity-10 flex items-center justify-center transition-all">
                  <a href="/somewhere">
                    <BsInstagram className="w-[20px] h-[20px]" />
                  </a>
                </div>
              </div>
              <div>
                <button className="px-[10px] py-[4px] ml-[10px] text-gray-500 text-[13px] flex items-center border rounded-md  hover:text-navbar-color hover:bg-navbar-color hover:bg-opacity-10 transition-colors">
                  <div className="flex items-center">
                    <RiGlobalLine className="w-[20px] h-[20px] mr-[8px]" />
                    <p className="hidden lg:flex">Türkçe (TR)</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
