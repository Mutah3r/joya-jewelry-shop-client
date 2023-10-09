import BlogCard from "./BlogCard";
import img1 from '../../assets/blog-img-1.webp'
import img2 from '../../assets/blog-img-2.webp'
import img3 from '../../assets/blog-img-3.webp'
import img4 from '../../assets/blog-img-4.webp'

const Blogs = () => {
    return (
        <div>
            <div className="my-6">
                <h1 className="py-4 text-[24px] font-bold text-[#333333] border-b border-[var(--primary-color)]">Blogs</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <BlogCard
                    img={img1}
                    title={'Choosing the Perfect Engagement Ring'}
                    description={'Discover how to select the ideal engagement ring that symbolizes your love story. Our guide covers everything from diamond shapes to metal choices.'}
                />
                <BlogCard
                    img={img2}
                    title={'Choosing the Perfect Engagement Ring'}
                    description={'Discover how to select the ideal engagement ring that symbolizes your love story. Our guide covers everything from diamond shapes to metal choices.'}
                />
                <BlogCard
                    img={img3}
                    title={'Choosing the Perfect Engagement Ring'}
                    description={'Discover how to select the ideal engagement ring that symbolizes your love story. Our guide covers everything from diamond shapes to metal choices.'}
                />
                <BlogCard
                    img={img4}
                    title={'Choosing the Perfect Engagement Ring'}
                    description={'Discover how to select the ideal engagement ring that symbolizes your love story. Our guide covers everything from diamond shapes to metal choices.'}
                />
            </div>
        </div>
    );
};

export default Blogs;