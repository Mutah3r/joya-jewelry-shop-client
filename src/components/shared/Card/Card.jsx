import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Card = ({ tag }) => {
    return (
        <div className="border flex flex-col gap-3 p-5 relative hover:border-[var(--primary-color)] transition-all duration-500">
            { tag &&
                <span className={`text-[14px] ${tag.background == 'red' && 'bg-red-500'} ${tag.background == 'primary' && 'bg-[var(--primary-color)]'} px-2 py-1 text-white absolute top-[20px] left-[20px]`}>{tag.text}</span>
            }
            <div className="flex justify-center items-center">
                <Link to='/'>
                <img className="h-[200px] w-[200px] object-cover" src="https://htmldemo.net/hiraola/hiraola/assets/images/product/medium-size/1-1.jpg" alt="" />
                </Link>
            </div>
            <Link to='/'>
                <h1 className="hover:text-[var(--primary-color)] transition-all duration-300 text-[18px] font-semibold text-[#333333]">Pendent, Made of White Pearl</h1>
            </Link>
            <div className="flex justify-between text-[#333333]">
                <h2>$49.00</h2>
                <p className="hover:text-[var(--primary-color)] transition-all duration-300 text-[18px] cursor-pointer">
                    <AiOutlineHeart />
                </p>
            </div>
            <h2 className="text-[var(--primary-color)] flex items-center">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                <AiOutlineStar />
            </h2>
        </div>
    );
};

export default Card;