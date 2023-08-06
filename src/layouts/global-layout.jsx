import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/navbar";

const GlobalLayout = () => {
    return (
        <>
            <nav>
                <Navbar />
            </nav>
            <main>
                <Outlet />
            </main>
        </>

    );
}

export default GlobalLayout;