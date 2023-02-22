import React from 'react';
import { categories } from '../constants/data';
function Sidebar({ selectedCategory, setSelectedCategory, }) {
    const changeCategory = (categoryName) => {
        setSelectedCategory(categoryName);
    };
    return (
        <>
            <div className='bg-black w-2/12 overflow-x-hidden border-r border-gray-400'>
                <div className='flex flex-col p-4 space-y-2'>
                    {categories.map((category, index) => (
                        <>
                            <div
                                onClick={() => changeCategory(category.name)}
                                key={index}
                                className={` group flex items-center rounded-full space-x-2 p-3 text-center hover:bg-red duration-200 cursor-pointer ${
                                    category.name === selectedCategory &&
                                    'bg-red'
                                }`}
                            >
                                <span
                                    className={`text-xl text-red duration-200 group-hover:text-white  ${
                                        category.name === selectedCategory &&
                                        'text-white'
                                    } `}
                                >
                                    
                                    {category.icon}
                                </span>
                                <span className='text-base font-semibold text-white '>
                                    {category.name}
                                </span>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Sidebar;
