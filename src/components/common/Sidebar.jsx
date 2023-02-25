import { useContext } from 'react';
import { mainContext } from '../../context';
import { categories } from '../../constants/data';
function Sidebar() {
    const { selectedCategory, setSelectedCategory } = useContext(mainContext);
    const changeCategory = (categoryName) => {
        setSelectedCategory(categoryName);
    };
    return (
        <>
            <div className='bg-black overflow-x-hidden border-r border-gray-400 mt-16 transition-all duration-200 min-w-[80px] sm:w-[300px] '>
                <div className='flex flex-col p-4 space-y-2 h-[90vh] overflow-y-scroll scroll-hidden fixed'>
                    {categories.map((category, index) => (
                        <div
                            onClick={() => changeCategory(category.name)}
                            key={index}
                            className={` group flex items-center rounded-full space-x-2 p-3 text-center hover:bg-Mainred transition-all duration-200 cursor-pointer w-full sm:w-auto ${
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
                            <span className='text-base font-semibold text-white hidden sm:flex'>
                                {category.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Sidebar;
