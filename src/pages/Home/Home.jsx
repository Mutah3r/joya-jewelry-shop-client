import Carousel from "./Carousel";
import Categories from "./Categories";

const Home = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row gap-8 justify-between">
            <div className="min-w-[250px]">
                <Categories />
            </div>
            <div className="min-w-[250px]">
                <Carousel />
            </div>
        </div>
    );
};

export default Home;