import getir from "../../api/getir.json";
import { useState } from "react";
import NotFoundMan from "../../api/not-found-man";
import Footer from "../../components/footer";

const NotFound = () => {
  const [navItem, setNavItem] = useState(getir);
  console.log(navItem);
  return (
    <>
      <div className="h-[64px] md:h-[75px] bg-brand-color flex items-center justify-center">
        <img
          src={getir.image}
          alt={getir.name}
          className="h-[22px] md:h-auto"
        />
      </div>
      <div className="grid grid-flow-col px-[16px] ">
        <div className="flex flex-col overflow-hidden bg-white">
          <div className="px-[16px] pt-[16px]">
            <h1 className="text-[24px] leading-[35px] font-semibold box-border">
              Aradığınız sayfa bulunamadı
            </h1>
            <p className="mt-[16px] text-[18px] text-blurColor mb-[40px] leading-[26px]">
              Böyle bir sayfa bulunamıyor. Ana Sayfa’ya dönüp başka bir şey
              arayabilirsiniz
            </p>
            <button className="px-[16px] py-[10px] bg-brand-color border-2 border-navbar-color text-white text-[14px] rounded-[8px] leading-[16px]">
              Ana sayfaya dön
            </button>
            <NotFoundMan />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
