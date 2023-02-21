import React from 'react';
import { SearchBar } from './index';
import {MainLogo} from './index';
function Navbar() {
    return (
        <>
            <div className='bg-black flex justify-between w-full p-4 fixed px-10'>
                <img src={MainLogo} alt='logo' className='h-11 rounded-md ' />
                <SearchBar />
            </div>
        </>
    );
}

export default Navbar;
