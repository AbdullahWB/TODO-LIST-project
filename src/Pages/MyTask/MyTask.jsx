import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaPenAlt } from "react-icons/fa";
import { toast } from 'react-hot-toast';

const MyTask = () => {
    const [listData, setListData] = useState([])

    useEffect(() => {
        fetch('https://task-management-server-smoky.vercel.app/list')
            .then(res => res.json())
            .then(data => setListData(data))
            .catch(error => {
                console.log(error);
            })
    }, [])

    const handleDeleteItem = id => {
        fetch(`https://task-management-server-smoky.vercel.app/list/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('List deleted successfully')
                const remaining = listData.filter(myData => myData._id !== id);
                setListData(remaining)
            })
    }

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
                            <div className='flex justify-between'>
                                <Link to={`/details/${list?._id}`}>
                                    <button className='btn'>
                                        {list?.title}
                                    </button>
                                </Link>
                                <div className='flex gap-3'>
                                    <button onClick={() => handleDeleteItem(list?._id)} className='w-[35px] h-[35px] text-[18px] text-white bg-red-500 rounded-full flex justify-center items-center'><FaTrash></FaTrash></button>
                                    <Link to={`/update/${list?._id}`}  className='w-[35px] h-[35px] text-[18px] text-white bg-green-500 rounded-full flex justify-center items-center'><FaPenAlt></FaPenAlt></Link>
                                </div>
                            </div>
                        </p>)
                    }
                </div>
            </div>
        </>
    );
};

export default MyTask;