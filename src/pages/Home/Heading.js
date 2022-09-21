import React from 'react';

const Heading = ({ children }) => {
    return (
        <div className="flex flex-col justify-center items-center my-6">
            <p className="text-4xl uppercase text-center ">{children}</p>
            <div className='h-1 w-16  bg-primary rounded-full' />
        </div>
    );
};

export default Heading;