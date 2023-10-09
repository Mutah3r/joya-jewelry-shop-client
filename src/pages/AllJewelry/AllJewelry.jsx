import { useEffect, useState } from "react";
import Card from "../../components/shared/Card/Card";

const AllJewelry = () => {
    const [jewelries, setJewelries] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setJewelries(data);
            });
    }, []);

    return (
        <div className="mt-8">
            <h1 className="py-4 text-[24px] font-bold text-[#333333] border-b border-[var(--primary-color)]">Shop</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 py-4 md:py-6">
                {
                    jewelries.map(prod => {
                        return (
                            <Card
                                key={prod._id}
                                productInfo={{
                                    id: prod._id,
                                    name: prod.name,
                                    price: prod.price,
                                    img: prod.photoURL,
                                    rating: prod.rating
                                }}
                            />
                        )
                    })
                }
            </div>

            <div className="flex justify-center items-center">
                <button className="bg-[var(--primary-color)] hover:opacity-80 text-white font-bold py-2 px-4 rounded-full">
                    Load More
                </button>
            </div>
        </div>
    );
};

export default AllJewelry;