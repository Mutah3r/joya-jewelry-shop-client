import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <h1>Navbar</h1>            
            <div>
                <Outlet />
            </div>
            <h1>Footer</h1>            
        </div>
    );
};

export default Main;