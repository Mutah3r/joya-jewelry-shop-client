import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import carouselImgOne from '../../assets/carousel-img-1.webp';
import carouselImgTwo from '../../assets/carousel-img-2.webp';
import carouselImgThree from '../../assets/carousel-img-3.webp';
import PrimaryButton from "../../components/shared/PrimaryButton/PrimaryButton";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
    };

    const slides = [
        { img: carouselImgOne, subtitle_color: '10% Off', subtitle_black: 'This Week', title: 'Diamond Oxidized Silver Earrings', price: 50 },
        { img: carouselImgTwo, subtitle_color: '10% Off', subtitle_black: 'This Week', title: 'Simulated Ruby Gold Earring', price: 150 },
        { img: carouselImgThree, subtitle_color: 'Black Friday', subtitle_black: 'This Week', title: 'Pink Pearl Necklace', price: 100 },
    ]

    return (
        <Slider {...settings}>
            {
                slides.map(slide => {
                    return (
                        <div className="relative" key={slide.img}>
                            <img className="w-full h-full" src={slide.img} alt="" />
                            <div className="bg-[rgba(255,255,255,0.5)] sm:bg-transparent absolute top-0 left-0 sm:left-[40px] h-full w-full sm:max-w-[300px] md:max-w-[400px] flex flex-col justify-center items-center sm:items-start gap-1 sm:gap-4">
                                <h3 className="text-center sm:text-start text-[16px] sm:text-[20px] text-[#333333]"><span className="text-[var(--primary-color)]">{slide.subtitle_color}</span> {slide.subtitle_black}</h3>
                                <h1 className="text-center sm:text-start text-xl sm:text-5xl font-bold text-[#333333]">{slide.title}</h1>
                                <h3 className="text-center sm:text-start font-bold text-[16px] sm:text-[20px] text-[#333333]">Starting at <span className="text-[var(--primary-color)]">${slide.price}</span></h3>
                                <div className="hidden sm:block">
                                    <PrimaryButton text={'Shopping Now'} />
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </Slider>
    );
};

export default Carousel;