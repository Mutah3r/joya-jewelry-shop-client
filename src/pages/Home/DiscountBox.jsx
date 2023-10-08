import discountImg from '../../assets/discount-offer.webp';
import PrimaryButton from '../../components/shared/PrimaryButton/PrimaryButton';

const DiscountBox = () => {
    return (
        <div className='relative my-6'>
            <img className='object-cover w-full h-auto' src={discountImg} alt="" />
            <div className='absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.1)]'>
                {/* overlay */}
            </div>
            <div className='text-[#333333] text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <h3 className='text-[16px] md:text-[18px]'><span className='text-red-500'>-25% Off</span> This Week</h3>
                <h1 className='hidden sm:block text-[20px] md:text-[30px]'>Gold Products</h1>
                <h3 className='hidden sm:block text-[16px] md:text-[18px]'>Starting at <span className='text-red-500'>$50</span></h3>
                <div className='hidden md:flex mt-2 md:justify-center md:items-center'>
                    <PrimaryButton text={'Shopping now'} />
                </div>
            </div>
        </div>
    );
};

export default DiscountBox;