import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { IoCallSharp, IoLogOut } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineDashboard, MdOutlineDashboardCustomize } from 'react-icons/md';
import { PiUsersBold } from 'react-icons/pi';


const Dashboard = () => {
    const [selectedTab, setSelectedTab] = useState('my-jewelries');
    const [allJewelries, setAllJewelries] = useState([]);
    const [myJewelries, setMyJewelries] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const [userInfo, setUserInfo] = useState({});
    const { user, logOut } = useContext(AuthContext);

    // fetch logged in user info
    useEffect(() => {
        fetch(`https://joya-server-716bquqol-mutah3r.vercel.app/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setUserInfo(data[0]);
            })
    }, [user]);

    // fetch all jewelries info
    useEffect(() => {
        fetch(`https://joya-server-716bquqol-mutah3r.vercel.app/products`)
            .then(res => res.json())
            .then(data => {
                setAllJewelries(data);
            })
    }, []);

    // fetch jewelries of logged in user
    useEffect(() => {
        fetch(`https://joya-server-716bquqol-mutah3r.vercel.app/products/email/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyJewelries(data);
            })
    }, [user]);

    // fetch all users info
    useEffect(() => {
        fetch(`https://joya-server-716bquqol-mutah3r.vercel.app/users`)
            .then(res => res.json())
            .then(data => {
                setAllUsers(data);
            })
    }, []);




    return (
        <div className="flex flex-col gap-4 lg:gap-6 lg:flex-row">
            {/* Sidebar */}
            <div className="max-w-[400px] h-full lg:h-[90vh] static lg:sticky top-6 mx-auto flex flex-col justify-center items-center gap-4 border border-[var(--primary-color)] rounded-lg p-4 sm:p-6">
                <div className="flex justify-center items-center">
                    <img className="rounded-full object-cover" src={user.photoURL} alt="" />
                </div>
                <div className="flex flex-col gap-1 text-center">
                    <h1 className="text-[20px] text-[#333333] font-bold">{user.displayName}</h1>
                    {userInfo?.role == 'admin' &&
                        <h1 className="text-[16px] flex gap-1 items-center justify-center"><span className="font-bold text-[18px]">Admin</span></h1>
                    }
                    {userInfo?.phone &&
                        <h1 className="text-[16px] flex gap-1 items-center justify-center"><IoCallSharp className="text-[var(--primary-color)]" /> <span className="capitalize">{userInfo.phone}</span></h1>
                    }
                    {userInfo?.address &&
                        <h1 className="text-[16px] flex gap-1 items-center justify-center"><FaLocationDot className="text-[var(--primary-color)]" /> <span className="capitalize">{userInfo.address}</span></h1>
                    }
                </div>
                <div className="w-full">
                    <button onClick={logOut} className="flex gap-2 justify-center items-center w-full hover:opacity-80 transition-opacity duration-500 bg-[var(--primary-color)] px-5 py-3 uppercase text-white">
                        Logout <IoLogOut className="text-[25px]" />
                    </button>
                </div>
            </div>
            {/* Main Content */}
            <div className="grow border border-[var(--primary-color)] rounded-lg p-4 sm:p-6 overflow-auto">
                {userInfo.role == 'admin' &&
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
                        <div>
                            <button onClick={() => setSelectedTab('all-jewelries')} className={`${selectedTab == 'all-jewelries' ? 'opacity-70' : ''} h-full flex gap-2 justify-center items-center w-full hover:opacity-80 transition-opacity duration-500 bg-[var(--primary-color)] px-5 py-3 uppercase text-white`}>
                                All Jewelries <MdOutlineDashboard className="hidden 2xl:block text-[18px]" />
                            </button>
                        </div>
                        <div>
                            <button onClick={() => setSelectedTab('my-jewelries')} className={`${selectedTab == 'my-jewelries' ? 'opacity-70' : ''} h-full flex gap-2 justify-center items-center w-full hover:opacity-80 transition-opacity duration-500 bg-[var(--primary-color)] px-5 py-3 uppercase text-white`}>
                                My Jewelries <MdOutlineDashboardCustomize className="hidden 2xl:block text-[18px]" />
                            </button>
                        </div>
                        <div>
                            <button onClick={() => setSelectedTab('all-users')} className={`${selectedTab == 'all-users' ? 'opacity-70' : ''} h-full flex gap-2 justify-center items-center w-full hover:opacity-80 transition-opacity duration-500 bg-[var(--primary-color)] px-5 py-3 uppercase text-white`}>
                                All Users <PiUsersBold className="hidden 2xl:block text-[18px]" />
                            </button>
                        </div>
                    </div>
                }
                {userInfo.role != 'admin' &&
                    <div className="grid grid-cols-1">
                        <div>
                            <button onClick={() => setSelectedTab('my-jewelries')} className="h-full flex gap-2 justify-center items-center w-full hover:opacity-80 transition-opacity duration-500 bg-[var(--primary-color)] px-5 py-3 uppercase text-white">
                                My Jewelries <MdOutlineDashboardCustomize className="hidden 2xl:block text-[18px]" />
                            </button>
                        </div>
                    </div>
                }
                {/* All Jewelries */}
                {(userInfo.role == 'admin' && selectedTab == 'all-jewelries') &&
                    <div className="mt-4 sm:mt-6 overflow-auto w-full">
                        <h1 className="text-center text-[#333333] font-bold text-[20px] mb-3">ALL JEWELRIES</h1>
                        <div className="overflow-x-auto w-full">
                            <div className="align-middle inline-block min-w-full">
                                <div className="shadow overflow-x-auto border-b border-gray-200 sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Serial
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Name
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Brand
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Price
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Availability
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {
                                                allJewelries.map((prod, idx) => {
                                                    return (
                                                        <tr key={prod._id}>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                {idx + 1}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                {prod.name}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                {prod.brand}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                ${prod.price}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                {prod.availability}
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {/* My Jewelries */}
                {(selectedTab == 'my-jewelries') &&
                    <div className="mt-4 sm:mt-6 overflow-auto w-full">
                        <h1 className="text-center text-[#333333] font-bold text-[20px] mb-3">MY JEWELRIES</h1>
                        <div className="overflow-x-auto w-full">
                            <div className="align-middle inline-block min-w-full">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Serial
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Name
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Brand
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Price
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Availability
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {
                                                myJewelries.map((prod, idx) => {
                                                    return (
                                                        <tr key={prod._id}>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                {idx + 1}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                {prod.name}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                {prod.brand}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                ${prod.price}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                {prod.availability}
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {/* All Users */}
                {(userInfo.role == 'admin' && selectedTab == 'all-users') &&
                    <div className="mt-4 sm:mt-6 overflow-auto w-full">
                        <h1 className="text-center text-[#333333] font-bold text-[20px] mb-3">ALL USERS</h1>
                        <div className="overflow-x-auto w-full">
                            <div className="align-middle inline-block min-w-full">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Serial
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Name
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Email
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Role
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {
                                                allUsers.map((user, idx) => {
                                                    return (
                                                        <tr key={user._id}>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                {idx + 1}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                {user.name}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                {user.email}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                {user.role == 'admin' ? 'Admin' : 'Normal User'}
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Dashboard;