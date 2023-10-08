import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import { MdDashboard } from 'react-icons/md'
import { IoLogOut } from 'react-icons/io5'
import { AuthContext } from '../../../providers/AuthProvider'

const ProfilePopover = () => {
    const { logOut, user } = useContext(AuthContext);

    return (
        <div>
            <Popover className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button className={`${open ? '' : 'text-opacity-90'} group inline-flex items-center rounded-md text-base font-medium text-white hover:text-opacity-100 focus:outline-none`}>
                            <span className='me-3 text-[18px]'>Mutaher</span>
                            <img className="ring-2 ring-[#bf9951] h-[40px] w-[40px] object-cover rounded-full" src={user.photoURL} alt="profile-picture" />
                            <ChevronDownIcon
                                className={`${open ? '' : 'text-opacity-70'} ml-2 h-5 w-5 text-white transition duration-150 ease-in-out group-hover:text-opacity-80`}
                                aria-hidden="true"
                            />
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-[200px] -translate-x-1/2 transform px-4 sm:px-0">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="relative">
                                        <Link
                                            to={'/dashboard'}
                                            className="flex items-center transition duration-150 ease-in-out bg-white hover:bg-gray-100"
                                        >
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                                                <MdDashboard className='text-[var(--primary-color)]' />
                                            </div>
                                            <div className="ml-2">
                                                <p className="text-sm font-medium text-gray-900">
                                                    Dashboard
                                                </p>
                                            </div>
                                        </Link>
                                        <div
                                            onClick={logOut}
                                            to={'/dashboard'}
                                            className="cursor-pointer flex items-center transition duration-150 ease-in-out bg-white hover:bg-gray-100"
                                        >
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                                                <IoLogOut className='text-[var(--primary-color)]' />
                                            </div>
                                            <div className="ml-2">
                                                <p className="text-sm font-medium text-gray-900">
                                                    Logout
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </div>
    );
};

export default ProfilePopover;