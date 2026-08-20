import React from 'react';

const Title = ({ children }) => {
    return (
        <div className='bg-linear-60 from-sky-50 to-sky-200 py-3 rounded'>
            <h2 className="text-5xl font-bold">{children}</h2>
        </div>
    );
};

export default Title;