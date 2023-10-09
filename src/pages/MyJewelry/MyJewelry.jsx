import { useContext, useEffect, useState } from "react";
import Card from "../../components/shared/Card/Card";
import { AuthContext } from "../../providers/AuthProvider";

const MyJewelry = () => {
    const [jewelries, setJewelries] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://joya-server-716bquqol-mutah3r.vercel.app/products/email/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setJewelries(data);
            });
    }, [user]);

    return (
        <div className="mt-8">
            <h1 className="py-4 text-[24px] font-bold text-[#333333] border-b border-[var(--primary-color)]">My Jewelries</h1>

            {jewelries.length == 0 &&
                <h1 className="text-[var(--primary-color)] text-20px text-center text-[20px] my-8 md:my-16">You have not added any product yet!</h1>
            }

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

export default MyJewelry;