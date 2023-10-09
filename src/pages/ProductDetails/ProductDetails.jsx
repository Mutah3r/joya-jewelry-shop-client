import { useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar, AiOutlineStar, AiOutlineHeart } from 'react-icons/ai';
import PrimaryButton from "../../components/shared/PrimaryButton/PrimaryButton";
import TrendingProducts from "../Home/TrendingProducts";


const ProductDetails = () => {
    const [prodInfo, setProdInfo] = useState({});
    const { id } = useParams();

    useState(() => {
        fetch(`https://joya-server-716bquqol-mutah3r.vercel.app/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProdInfo(data);
            });
    }, [id]);


    return (
        <div>
            <div className="my-8 md:my-16 grid gird-cols-1 gap-6 md:grid-cols-2 justify-center ">
                <div className="border flex justify-center items-center p-2 md:p-4">
                    <img className="w-full max-w-[300px] object-cover" src={prodInfo.photoURL} alt={prodInfo.name} />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <h1 className="text-[20px] text-[#333333] font-bold">{prodInfo.name}</h1>
                    <h2 className="text-[var(--primary-color)] flex items-center text-[18px]">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </h2>

                    <h2 className="text-[18px] text-[#333333]">Brand: <span className="text-[var(--primary-color)]">{prodInfo.brand}</span></h2>
                    <h2 className="text-[18px] text-[#333333]">Availability: <span className="text-[var(--primary-color)]">{prodInfo.availability}</span></h2>

                    <span className="flex gap-2">
                        <PrimaryButton text={'Add To Cart'} />
                        <span className="hover:cursor-pointer flex justify-center items-center border text-[20px] transition-all hover:border-[var(--primary-color)] hover:text-[var(--primary-color)] duration-500 px-4 py-3 uppercase text-[#333333]">
                            <AiOutlineHeart />
                        </span>
                    </span>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <h1 className="border border-[#F4F4F4] bg-[#F4F4F4] p-4 text-[var(--primary-color)] font-bold text-[18px]">DESCRIPTION</h1>
                <p className="border p-4 text-[#333333] text-[16px] max-h-[300px] overflow-auto">{prodInfo.description}</p>
            </div>
            <TrendingProducts />
        </div>
    );
};

export default ProductDetails;