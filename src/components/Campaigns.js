import { useEffect, useState } from "react";
import bannersData from "../api/banners.json"
import Slider from "react-slick";

const Campaigns = () => {

    const settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3
    }

    const [banners, setBanners] = useState([])

    useEffect(() => {
        setBanners(bannersData)
    })

    return (
        <>
            <div className="py-8">
                <p className="text-gray-700 font-semibold text-[14px]">Kampanyalar</p>
                <Slider className="py-4"{...settings}>
                    {banners.map((banner) => (
                        <div key={banner.id} className="px-2">
                            <img className="rounded-lg" key={banner.id} src={banner.image} alt="" />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default Campaigns;