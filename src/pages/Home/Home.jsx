import Carousel from "./Carousel";
import Categories from "./Categories";
import DiscountBox from "./DiscountBox";
import NewArrival from "./NewArrival";
import TrendingProducts from "./TrendingProducts";

const Home = () => {
    return (
        <div>
            <div className="flex flex-col-reverse lg:flex-row gap-8 justify-between">
                <div className="min-w-[250px]">
                    <Categories />
                </div>
                <div className="min-w-[250px]">
                    <Carousel />
                </div>
            </div>
            <div>
                <NewArrival />
            </div>
            <div>
                <DiscountBox />
            </div>
            <div>
                <TrendingProducts />
            </div>
        </div>
    );
};

export default Home;