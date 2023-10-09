const BlogCard = ({ img, title, description }) => {
    return (
        <div className='p-4 sm:p-6 border rounded-lg flex flex-col gap-4'>
            <div>
                <img className='rounded-lg w-full object-cover' src={img} />
            </div>
            <h1 className='text-[20px] text-[#333333] font-semibold mt-3'>{title}</h1>
            <p className='text-[16px] text-gray-500'>
                {description}
            </p>
            <h2 className='text-[#333333] underline cursor-pointer hover:text-[var(--primary-color)] transition-all duration-500'>Read More</h2>
        </div>
    );
};

export default BlogCard;