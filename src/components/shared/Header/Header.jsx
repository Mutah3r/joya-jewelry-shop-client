import Container from "../Container/Container";
import logo from '../../../assets/logo.png';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <Container>
            <div className="py-5 flex flex-row gap-5 items-center justify-between">
                <div>
                    <Link to='/'>
                        <img src={logo} className="w-[130px] h-auto" alt="logo" />
                    </Link>
                </div>
                <div className="max-w-2xl grow ">
                    <div className=''>
                        <div className="relative flex items-center w-full h-12 border border-[var(--primary-color)] rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                            <input
                                className="ps-3 peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                                type="text"
                                id="search"
                                placeholder="Search something.." />
                            <div className="bg-[var(--primary-color)] cursor-pointer grid place-items-center h-full w-12 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Header;