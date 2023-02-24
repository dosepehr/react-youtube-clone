import React from 'react';
import { categories } from '../../constants/data';
function Sidebar({
    selectedCategory,
    setSelectedCategory,
    openSideBar,
}) {
    const changeCategory = (categoryName) => {
        setSelectedCategory(categoryName);
    };
    return (
        <>
            <div className='bg-black overflow-x-hidden border-r border-gray-400 mt-16 transition-all duration-200 w-[300px]'>
                <div className='flex flex-col p-4 space-y-2'>
                    {categories.map((category, index) => (
                        <div
                            onClick={() => changeCategory(category.name)}
                            key={index}
                            className={` group flex items-center rounded-full space-x-2 p-3 text-center hover:bg-Mainred transition-all duration-200 cursor-pointer ${
                                category.name === selectedCategory &&
                                'bg-Mainred'
                            }`}
                        >
                            <span
                                className={`text-xl text-Mainred duration-200 group-hover:text-white  ${
                                    category.name === selectedCategory &&
                                    'text-white'
                                } `}
                            >
                                {category.icon}
                            </span>
                            {window.innerWidth > 500 || openSideBar ? (
                                <span className='text-base font-semibold text-white '>
                                    {category.name}
                                </span>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Sidebar;
