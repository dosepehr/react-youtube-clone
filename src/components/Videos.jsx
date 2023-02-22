import React from 'react';

function Videos({ selectedCategory }) {
    return (
        <>
            <div className='w-10/12 bg-black px-5'>
                <div className='space-x-2'>
                    <span className='text-white font-bold text-3xl'> {selectedCategory}</span>
                    <span className='text-red font-bold text-3xl'>videos</span>
                </div>
            </div>
        </>
    );
}

export default Videos;
