import Container from "../Container/Container";
import logo from '../../../assets/logo.png';
import { Link } from "react-router-dom";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";
import { FaLocationDot } from 'react-icons/fa6';
import { IoCallSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <div className="bg-[#F7F7F7] py-16">
            <Container>
                <div className="flex flex-col gap-8 lg:grid lg:grid-cols-4 lg:gap-4">
                    <div className="flex flex-col gap-4">
                        <Link to='/'>
                            <img src={logo} className="w-[130px] h-auto" alt="logo" />
                        </Link>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eius quasi rem repellendus accusamus nam ullam placeat commodi ex quaerat?</p>
                        <div className="flex flex-row gap-2">
                            <Link to='/'>
                                <div className="cursor-pointer transition-all duration-500 h-[40px] w-[40px] flex justify-center items-center border rounded-md hover:bg-[var(--primary-color)] text-[#595959] hover:text-white">
                                    <BiLogoFacebook className="text-[20px]" />
                                </div>
                            </Link>
                            <div className="cursor-pointer transition-all duration-500 h-[40px] w-[40px] flex justify-center items-center border rounded-md hover:bg-[var(--primary-color)] text-[#595959] hover:text-white">
                                <Link to='/'>
                                    <BiLogoTwitter className="text-[20px]" />
                                </Link>
                            </div>
                            <div className="cursor-pointer transition-all duration-500 h-[40px] w-[40px] flex justify-center items-center border rounded-md hover:bg-[var(--primary-color)] text-[#595959] hover:text-white">
                                <Link to='/'>
                                    <BiLogoInstagram className="text-[20px]" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-[16px] text-[#333333] font-semibold">PRODUCT</h2>
                        <Link className="text-[15px] text[#595959] hover:text-[var(--primary-color)] transition-colors duration-300" to='/'>All Products</Link>
                        <Link className="text-[15px] text[#595959] hover:text-[var(--primary-color)] transition-colors duration-300" to='/'>New Products</Link>
                        <Link className="text-[15px] text[#595959] hover:text-[var(--primary-color)] transition-colors duration-300" to='/'>Best Sales</Link>
                        <Link className="text-[15px] text[#595959] hover:text-[var(--primary-color)] transition-colors duration-300" to='/'>Add Product</Link>
                        <Link className="text-[15px] text[#595959] hover:text-[var(--primary-color)] transition-colors duration-300" to='/'>My Products</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-[16px] text-[#333333] font-semibold">ABOUT US</h2>
                        <p className="text-[15px] text[#595959] flex gap-2 items-center"><FaLocationDot className="block lg:hidden xl:block text-[18px] text-[var(--primary-color)]" /> Address: The Barn, Ullenhall, Henley in Arden B578 5CC, England</p>
                        <p className="text-[15px] text[#595959] flex gap-2 items-center"><IoCallSharp className="block lg:hidden xl:block text-[18px] text-[var(--primary-color)]" /> Call Us: <a className="hover:text-[var(--primary-color)] transition-colors duration-300" href="tel:+123 321 345">+123 321 345</a></p>
                        <p className="text-[15px] text[#595959] flex gap-2 items-center"><MdEmail className="block lg:hidden xl:block text-[18px] text-[var(--primary-color)]" /> Email: <a className="hover:text-[var(--primary-color)] transition-colors duration-300" href="mailto:info@yourdomain.com">info@yourdomain.com</a></p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-[16px] text-[#333333] font-semibold">PRODUCT</h2>
                        <p className="text-[15px] text[#595959]">Subscribe to our newsletters now and stay up-to-date with new collections</p>
                    </div>
                </div>
                <hr className="my-16" />
                <div>
                    <p className="text-center text-[15px] text[#595959]">Copyright &copy; {(new Date).getFullYear()} <Link to='/' className="text-[var(--primary-color)] text-bold">Joya.</Link> All rights reserved.</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;