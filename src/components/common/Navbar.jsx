import React from 'react';
import { SearchBar } from '../index';
import { MainLogo } from '../../constants/data';
function Navbar({ setOpenSideBar }) {
    return (
        <>
            <div className='bg-black flex justify-between w-full p-4 px-10 fixed '>
                {window.innerWidth <= 500 && (
                    <p
                        className='bg-red-600'
                        onClick={() => setOpenSideBar((prev) => !prev)}
                    >
                        open
                    </p>
                )}

                <img src={MainLogo} alt='logo' className='h-11 rounded-md ' />
                <SearchBar />
            </div>
        </>
    );
}

export default Navbar;
