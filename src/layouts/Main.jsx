import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";
import Container from "../components/shared/Container/Container";

const Main = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <div className="my-8">
                <Container>
                    <Outlet />
                </Container>
            </div>
            <Footer />
        </div>
    );
};

export default Main;