import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";

const Main = () => {
    return (
        <div>
            <Header />
            <h1>Navbar</h1>            
            <div>
                <Outlet />
            </div>
            <h1>Footer</h1>            
        </div>
    );
};

export default Main;