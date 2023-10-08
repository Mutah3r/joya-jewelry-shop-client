import { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    }

    const toggleConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }

    return (
        <form className="flex flex-col gap-4 my-8 md:my-16 items-center justify-center">
            <h1 className="text-[20px] font-bold max-w-xl">Register</h1>
            <div className="flex flex-col gap-4 w-full max-w-xl">
                <div className="text-[#595959] text-[16px] flex flex-col gap-1">
                    <label htmlFor="name">Name</label>
                    <input required className="border focus:outline-none text-[15px] px-4 py-2" placeholder="Name" type="text" name="name" id="name" />
                </div>
                <div className="text-[#595959] text-[16px] flex flex-col gap-1">
                    <label htmlFor="email">Email</label>
                    <input required className="border focus:outline-none text-[15px] px-4 py-2" placeholder="Email Address" type="email" name="email" id="email" />
                </div>
                <div className="text-[#595959] text-[16px] flex flex-col gap-1">
                    <label htmlFor="password">Password</label>
                    <div className='relative bg-red-500'>
                        <input required className="w-full border focus:outline-none text-[15px] ps-4 pe-8 py-2" placeholder="Password" type={`${showPassword ? 'text' : 'password'}`} name="password" id="password" />
                        {!showPassword &&
                            <AiFillEyeInvisible onClick={togglePassword} className='cursor-pointer text-[18px] absolute right-3 top-1/2 -translate-y-1/2' />
                        }
                        {showPassword &&
                            <AiFillEye onClick={togglePassword} className='cursor-pointer text-[18px] absolute right-3 top-1/2 -translate-y-1/2' />
                        }
                    </div>
                </div>
                <div className="text-[#595959] text-[16px] flex flex-col gap-1">
                    <label htmlFor="conf-password">Confirm Password</label>
                    <div className='relative bg-red-500'>
                        <input required className="w-full border focus:outline-none text-[15px] ps-4 pe-8 py-2" placeholder="Confirm Password" type={`${showConfirmPassword ? 'text' : 'password'}`} name="conf-password" id="conf-password" />
                        {!showConfirmPassword &&
                            <AiFillEyeInvisible onClick={toggleConfirmPassword} className='cursor-pointer text-[18px] absolute right-3 top-1/2 -translate-y-1/2' />
                        }
                        {showConfirmPassword &&
                            <AiFillEye onClick={toggleConfirmPassword} className='cursor-pointer text-[18px] absolute right-3 top-1/2 -translate-y-1/2' />
                        }
                    </div>
                </div>
                <div className="text-[#595959] text-[16px] flex flex-col gap-1">
                    <label htmlFor="photo">Photo URL</label>
                    <input required className="border focus:outline-none text-[15px] px-4 py-2" placeholder="Photo URL" type="text" name="photo" id="photo" />
                </div>
                <div className="text-[#595959] text-[16px] flex flex-col gap-1">
                    <label htmlFor="gender">Gender</label>
                    <select className="cursor-pointer border focus:outline-none text-[15px] px-4 py-2" id="gender" name="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="text-[#595959] text-[16px] flex flex-col gap-1">
                    <label htmlFor="phone">Phone No.</label>
                    <input required className="border focus:outline-none text-[15px] px-4 py-2" placeholder="Phone No." type="tel" name="phone" id="phone" />
                </div>
                <div className="text-[#595959] text-[16px] flex flex-col gap-1">
                    <label htmlFor="address">Address</label>
                    <input required className="border focus:outline-none text-[15px] px-4 py-2" placeholder="Address" type="text" name="address" id="address" />
                </div>
                <div>
                    <input type="submit" value="Register" className="cursor-pointer w-full hover:opacity-80 transition-opacity duration-500 bg-[var(--primary-color)] px-5 py-3 uppercase text-white" />
                </div>
            </div>
        </form>
    );
};

export default Register;