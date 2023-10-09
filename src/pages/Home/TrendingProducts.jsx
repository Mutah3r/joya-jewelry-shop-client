import { useEffect, useState } from "react";
import Card from "../../components/shared/Card/Card";

const TrendingProducts = () => {
    const [trendingProducts, setTrendingProducts] = useState([]);

    useEffect(() => {
        fetch('https://joya-server-716bquqol-mutah3r.vercel.app/trending-products')
            .then(res => res.json())
            .then(data => {
                setTrendingProducts(data);
            });
    }, []);

    return (
        <div className="mt-8">
            <h1 className="py-4 text-[24px] font-bold text-[#333333] border-b border-[var(--primary-color)]">Trending Products</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 py-4 md:py-6">
                {
                    trendingProducts.map(prod => {
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
                                tag={{
                                    text: 'TRENDING',
                                    background: 'red',
                                }}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default TrendingProducts;