const MobileApp = () => {
    return (
        <>
            <div className="bg-mobile-app bg-brand-color rounded-lg w-full h-[312px]">
                <div className="flex flex-row h-full justify-between">
                    <div className="flex flex-col ml-12 text-white justify-center">
                        <h2 className="font-bold text-2xl  mb-2" >Getir'i indirin!</h2>
                        <span>İstediğiniz ürünleri dakikalar içinde kapınıza <br></br>getirelim.</span>
                        <ol className="mt-8 flex flex-row">
                            <li className="mr-2"> <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" /></li>
                            <li className="mr-2"> <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" /></li>
                            <li> <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" /></li>
                        </ol>
                    </div>
                    <img className="mt-7" src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png" alt="" />
                </div>

            </div>
        </>
    );
}

export default MobileApp;