import React from 'react';
import { SearchBar } from './index';
import { MainLogo } from '../constants/data';
function Navbar() {
    return (
        <>
            <div className='bg-black flex justify-between w-full fixed z-10 p-4 px-10'>
                <img src={MainLogo} alt='logo' className='h-11 rounded-md ' />
                <SearchBar />
            </div>
        </>
    );
}

export default Navbar;
