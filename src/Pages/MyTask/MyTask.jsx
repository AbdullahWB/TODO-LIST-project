import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyTask = () => {
    const [listData, setListData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/list')
            .then(res => res.json())
            .then(data => setListData(data))
            .catch(error => {
                console.log(error);
            })
    }, [])

    console.log(listData);
    return (
        <>
            <div className='flex flex-col justify-center items-center h-[calc(100vh-70px)]'>
                <h1 className='text-3xl font-bold mb-10 text-black'>All You Task</h1>
                <div className='w-[526px] h-[536px] overflow-y-scroll bg-[#F1D4E5] p-10 rounded-lg'>
                    {
                        listData.map(list => <p
                            key={list._id}
                            className='border-2 border-black w-full p-3 rounded-lg text-2xl text-center bg-gray-100 mt-10'
                        >
                            <Link to={`/details/${list._id}`}>
                                {list.title}
                            </Link>
                        </p>)
                    }
                </div>
            </div>
        </>
    );
};

export default MyTask;