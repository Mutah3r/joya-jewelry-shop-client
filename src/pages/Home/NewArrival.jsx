import { useEffect, useState } from "react";
import Card from "../../components/shared/Card/Card";

const NewArrival = () => {
    const [newArrival, setNewArrival] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/new-arrivals')
            .then(res => res.json())
            .then(data => {
                setNewArrival(data);
            });
    }, []);

    return (
        <div className="mt-8">
            <h1 className="py-4 text-[24px] font-bold text-[#333333] border-b border-[var(--primary-color)]">NEW ARRIVAL</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 py-4 md:py-6">
                {/* <Card
                    tag={{
                        text: 'NEW',
                        background: 'primary',
                    }}
                /> */}
                {
                    newArrival.map(prod => {
                        return (
                            <Card
                                key={prod._id}
                                productInfo={{
                                    id: prod._id,
                                    name: prod.name,
                                    price: prod.price,
                                    img: prod.photoURL
                                }}
                                tag={{
                                    text: 'NEW',
                                    background: 'primary',
                                }}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default NewArrival;