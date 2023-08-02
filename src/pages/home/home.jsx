import AnimatedFragment from "../../components/AnimatedFragment";
import Campaigns from "../../components/Campaigns";
import Cards from "../../components/Cards";
import Categories from "../../components/Categories";
import Footer from "../../components/Footer";
import MobileApp from "../../components/MobileApp";

const Main = () => {
    return (
        <div>
            <AnimatedFragment />
            <Categories />
            <div className="container mx-auto px-[144px]">
                <Campaigns />
                <MobileApp />
                <Cards />
                <Footer />
            </div>
        </div>
    );
}

export default Main;