import React from 'react';

function MainLayout({ children }) {
    return (
        <>
            <div className='flex flex-row bg-black '>{children}</div>
        </>
    );
}

export default MainLayout;
