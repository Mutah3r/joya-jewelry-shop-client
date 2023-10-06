import { Link } from "react-router-dom";
import Container from "../Container/Container";
import ProfilePopover from "./ProfilePopover";
import { useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5"
import { RxHamburgerMenu } from "react-icons/rx"


const navLinks = [
    { text: 'HOME', href: '/' },
    { text: 'ALL JEWELRY', href: '/all-jewelry' },
    { text: 'MY JEWELRY', href: '/my-jewelry' },
    { text: 'ADD JEWELRY', href: '/add-jewelry' },
    { text: 'BLOGS', href: '/blogs' },
];


const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <div className="bg-[var(--primary-color)]">
            <div className={`transition-all duration-500 bg-[#bf9951] opacity-25 fixed top-0 left-0 h-screen w-screen ${navbarOpen ? 'translate-x-0' : '-translate-x-full'}`}>

            </div>
            <Container>
                {/* Desktop Navbar */}
                <div className="hidden lg:block">
                    <div className="flex flex-row justify-between">
                        <ul className="flex flex-row gap-8 py-3 text-white text-[18px] capitalize">
                            {
                                navLinks.map(navLink => {
                                    return (
                                        <Link key={navLink.href} to={navLink.href}><li className="border-b-2 border-[var(--primary-color)] hover:border-white transition-all duration-300">{navLink.text}</li></Link>
                                    )
                                })
                            }
                        </ul>
                        <div className="flex flex-row">
                            {/* TODO: Apply conditional rendering here by checking if the user is logged in or not */}
                            {/* 
                            <Link to='/' className="flex items-center justify-center border-x border-[#bf9951]">
                                <BiUser className="text-[24px] flex mx-3 text-white" />
                            </Link> 
                            */}
                            <div className="flex items-center justify-center">
                                <ProfilePopover />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Navbar */}
                <div className="flex flex-row justify-between gap-3 lg:hidden py-2">
                    <RxHamburgerMenu className="text-black text-[40px] cursor-pointer" onClick={() => setNavbarOpen(!navbarOpen)} />
                    <ProfilePopover />
                </div>

                {/* Mobile Navbar Drawer */}
                <div className={`fixed top-0 left-0 h-screen bg-[var(--primary-color)] w-[250px] px-3 ${navbarOpen ? 'translate-x-0' : '-translate-x-full'} transition-all duration-300`}>
                    <div className="flex flex-col items-end mt-2">
                        <IoCloseCircleSharp className="cursor-pointer text-black text-[24px]" onClick={() => setNavbarOpen(!navbarOpen)} />
                    </div>
                    <ul className="flex flex-col gap-2 py-3 text-white text-[18px] capitalize">
                        {
                            navLinks.map(navLink => {
                                return (
                                    <Link key={navLink.href} to={navLink.href}><li className="px-2 border-b-2 border-[var(--primary-color)] hover:border-white transition-all duration-300">{navLink.text}</li></Link>
                                )
                            })
                        }
                    </ul>
                </div>
            </Container >
        </div >
    );
};

export default Navbar;