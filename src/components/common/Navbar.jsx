import React from 'react';
import { SearchBar } from '../index';
import { MainLogo } from '../../constants/data';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <>
            <div className='bg-black flex justify-between w-full p-4 px-5 fixed '>
                <Link to='/videos' >
                    <img
                        src={MainLogo}
                        alt='logo'
                        className='h-11 rounded-md '
                    />
                </Link>
                <SearchBar />
            </div>
        </>
    );
}

export default Navbar;
