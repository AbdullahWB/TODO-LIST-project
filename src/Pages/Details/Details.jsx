import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const details = useLoaderData()
    const {title, time, status, description, date} = details || {};

    return (
        <div className='flex flex-col justify-center items-center h-[calc(100vh-70px)]'>
            <h1 className='text-3xl text-black font-bold mb-5'>My Task Details</h1>
            <div className='flex flex-col justify-center items-center gap-5 p-10 text-black bg-[#F1D4E5] rounded-lg '>
                <h1 className='text-2xl'>{title}</h1>
                <p className='text-xl'>{status}</p>
                <p className='text-xl'>Time: {time}</p>
                <p className='text-xl'>Date: {date}</p>
                <p className='text-xl'>{description}</p>
            </div>
        </div>
    );
};

export default Details;