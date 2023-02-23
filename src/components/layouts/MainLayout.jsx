import React from 'react';

function MainLayout({ children }) {
    return (
        <>
            <div className='flex flex-row'>{children}</div>
        </>
    );
}

export default MainLayout;
