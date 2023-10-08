import { useContext, useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { createUser, updateUserInfo, logOut, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const togglePassword = () => {
        setShowPassword(!showPassword);
    }

    const toggleConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }

    const handleRegister = (event) => {
        event.preventDefault();

        // console.log(event);
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.conf_password.value;
        const photoURL = event.target.photo.value;
        const gender = event.target.gender.value;
        const phone = event.target.phone.value;
        const address = event.target.address.value;

        // validate password and confirm password
        if (password != confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password did not match!'
            })
            return;
        }

        if (password.length < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password must be at least 6 character long!'
            })
            return;
        }

        if (!/(?=.*[A-Z])(?=.*[!@#$&*])/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password should contain one capital letter and one special character!'
            })
            return;
        }

        // Register user
        const userInfo = {
            name,
            email,
            photoURL,
            gender,
            phone,
            address,
        }

        createUser(email, password)
            // eslint-disable-next-line no-unused-vars
            .then((userCredential) => {
                updateUserInfo(name, photoURL).then(logOut());

                // save user info to server
                fetch(`http://localhost:5000/users/${email}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    // eslint-disable-next-line no-unused-vars
                    .then(data => {
                        // console.log(data);
                    });

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'SignUp Successful',
                    showConfirmButton: false,
                    timer: 2500
                });

                navigate('/');
            })
            // eslint-disable-next-line no-unused-vars
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: 'Please try again later!'
                })
            });
    }

    const handleGoogleLogin = (event) => {
        event.preventDefault();
        
        googleLogin()
            // eslint-disable-next-line no-unused-vars
            .then((result) => {
                // eslint-disable-next-line no-unused-vars

                // save user email, displayName, photoURL and phone on database
                const email = result.user.email;

                const userInfo = {
                    email
                }

                fetch(`http://localhost:5000/users/google/${email}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    // eslint-disable-next-line no-unused-vars
                    .then(data => {
                        // console.log(data);
                    });

                navigate(from, { replace: true });
            }).catch((error) => {
                // ...
                console.log(error);
            });
    }

    return (
        <form onSubmit={handleRegister} className="flex flex-col gap-4 my-8 md:my-16 items-center justify-center">
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
                    <label htmlFor="conf_password">Confirm Password</label>
                    <div className='relative bg-red-500'>
                        <input required className="w-full border focus:outline-none text-[15px] ps-4 pe-8 py-2" placeholder="Confirm Password" type={`${showConfirmPassword ? 'text' : 'password'}`} name="conf_password" id="conf_password" />
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
                <div>
                    <button onClick={handleGoogleLogin} className="w-full px-5 py-3 border flex gap-2 justify-center items-center border-slate-200 text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                        <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                        <span>Continue with Google</span>
                    </button>
                </div>
                <div>
                    <h1 className='text-center text-[16px] text-[#333333]'>Already have an account? <Link to='/login' className='text-[var(--primary-color)] hover:underline'>Login</Link></h1>
                </div>
            </div>
        </form>
    );
};

export default Register;