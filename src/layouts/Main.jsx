import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import Navbar from "../components/shared/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <div>
                <Outlet />
            </div>
            <h1>Footer</h1>            
        </div>
    );
};

export default Main;