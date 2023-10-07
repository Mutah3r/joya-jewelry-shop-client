import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { useState } from 'react';
import { BiSolidCategoryAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';


const Categories = () => {
    const [categories, setCategories] = useState([]);

    useState(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => {
                setCategories(data.categories);
            })
    }, []);

    return (
        <div className="w-full">
            <div className="w-ful">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg text-left ">
                                <h1 className="w-full flex items-center gap-2 p-4 bg-[var(--primary-color)] text-white uppercase text-18px]">
                                    <BiSolidCategoryAlt />
                                    Shop By category
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-white`}
                                    />
                                </h1>
                            </Disclosure.Button>
                            <Disclosure.Panel className="border-s border-e border-b px-4 pt-4 pb-2 text-sm text-gray-500 flex flex-col gap-2">
                                {
                                    categories.map(cat => {
                                        return (
                                            <h1 className='text-[16px]' key={cat.title}><Link to={cat.link}>{cat.title}</Link></h1>
                                        )
                                    })
                                }
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    );
};

export default Categories;