import React from 'react';

const Loader = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
            <div className="loader border-t-4 border-blue-800 rounded-full w-10 h-10 animate-spin"></div>
        </div>
    )
};

export default Loader;