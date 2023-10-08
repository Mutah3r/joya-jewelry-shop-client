const Login = () => {
    return (
        <div className="flex flex-col gap-4 my-8 md:my-16 items-center justify-center">
            <h1 className="text-[20px] font-bold max-w-xl">Login</h1>
            <div className="flex flex-col gap-4 w-full max-w-xl">
                <div className="text-[#595959] text-[16px] flex flex-col gap-1">
                    <label htmlFor="email">Email</label>
                    <input className="border focus:outline-none text-[15px] px-4 py-2" placeholder="Email Address" type="email" name="email" id="email" />
                </div>
                <div className="text-[#595959] text-[16px] flex flex-col gap-1">
                    <label htmlFor="password">Password</label>
                    <input className="border focus:outline-none text-[15px] px-4 py-2" placeholder="Password" type="password" name="password" id="password" />
                </div>
                <div>
                    <button className="w-full hover:opacity-80 transition-opacity duration-500 bg-[var(--primary-color)] px-5 py-3 uppercase text-white">
                        Login
                    </button>
                </div>
                <div>
                    <button className="w-full px-5 py-3 border flex gap-2 justify-center items-center border-slate-200 text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                        <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                        <span>Login with Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;