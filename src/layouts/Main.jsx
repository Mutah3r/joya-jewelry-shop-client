import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <div>
                <Outlet />
            </div>
            <Footer />         
        </div>
    );
};

export default Main;