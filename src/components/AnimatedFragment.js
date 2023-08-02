import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";

const AnimatedFragment = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    const [selected, setSelected] = useState("US");
    return (
        <div>
            <div className="relative h-[500px] before:bg-gradient-to-r before:from-brand-color before:to-transparent before:absolute before:inset-0  before:w-full before:h-full before:z-10">
                <Slider {...settings}>
                    <div>
                        <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg" alt="" />
                    </div>
                    <div>
                        <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg" alt="" />
                    </div>
                    <div>
                        <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg" alt="" />
                    </div>
                </Slider>
                <div className="container flex justify-around gap-x-56 items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20 ">
                    <div>
                        <img className="ml-8" src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"></img>
                        <p className="text-white mt-8 text-4xl font-semibold ml-8">Dakikalar içinde <br></br>kapınızda</p>
                    </div>
                    <div className="w-[400px] rounded-lg bg-gray-50 p-6 ">
                        <h4 className="text-secondary-color text-center font-semibold">Giriş yap veya kayıt ol</h4>
                        <div className="grid gap-y-2">
                            <div className="flex w-full h-full mt-4 gap-x-2">
                                <ReactFlagsSelect
                                    className="flag-select"
                                    selected={selected}
                                    onSelect={(code) => setSelected(code)}
                                    countries={["US", "GB", "FR", "FR", "TR"]}
                                    customLabels={{
                                        "US": { secondary: "+1" },
                                        "GB": { secondary: "+44" },
                                        "FR": { secondary: "+23" },
                                        "TR": { secondary: "+90" }
                                    }}
                                    placeholder={selected}
                                />
                                <label className="flex-1 relative group">
                                    <input required type="text"
                                    maxLength={10}
                                        className="h-14 p-4 w-full border-2 text-sm
                                        border-gray-300 rounded 
                                         transition-colors group-hover:border-secondary-color
                                         outline-none focus:border-secondary-color
                                         peer"/>
                                    <span className="absolute top-0 left-0 px-4 flex items-center 
                                    mt-[18px] ml-[2px] text-sm text-gray-500 
                                    peer-focus:mt-1 peer-focus:text-xs peer-focus:text-secondary-color transition-all
                                    peer-valid:mt-1 peer-valid:text-xs peer-valid:text-secondary-color
                                    cursor-text 
                                     ">
                                        Telefon Numarası</span>

                                </label>
                            </div>
                            <button className="inline-flex font-semibold 
                            text-sm justify-center items-center w-full h-12
                            bg-yellow-button-color rounded-lg p-4
                             text-secondary-color
                            hover:bg-secondary-color
                            hover:text-yellow-button-color
                            transition-colors
                            ">Telefon numarası ile devam et</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnimatedFragment;