import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Form = () => {
    const [listData, setListData] = useState([])
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    useEffect(() => {
        fetch('http://localhost:3000/list')
            .then(res => res.json())
            .then(data => setListData(data))
            .catch(error => {
                console.log(error);
            })
    }, [])

    console.log(listData);

    console.log(watch("example"));
    return (
        <div className='grid grid-cols-2 gap-10 h-[calc(100vh-70px)] justify-center items-center '>
            <div className='flex flex-col justify-center items-center '>
                <h1 className='text-3xl font-bold mb-10 text-black'>Add Your Task</h1>
                <form className='grid grid-row-4 gap-10 bg-[#F1D4E5] p-10 rounded-lg' onSubmit={handleSubmit(onSubmit)}>
                    <input className='p-4 rounded-lg' placeholder="Title" {...register("title", { required: true })} />
                    <input className='p-4 rounded-lg' placeholder="Status" {...register("status", { required: true })} />
                    <textarea className='p-4 rounded-lg' rows="4" cols="50" placeholder="Description" {...register("description", { required: true })} />
                    <input className='btn bg-[#73BBC9] text-white' type="submit" value='Add New' />
                </form>
            </div>
            <div className='flex flex-col justify-center items-center '>
                <h1 className='text-3xl font-bold mb-10 text-black'>All You Task</h1>
                <div className='w-[80%] h-[480px] overflow-y-scroll bg-[#F1D4E5] p-10 rounded-lg'>
                    {
                        listData.map(list => <p
                            key={list._id}
                            className='border-2 border-black w-full p-3 rounded-lg text-2xl text-center bg-gray-100 mt-10'
                        >
                            <Link to={`/details/${list._id}`}>{list.title}</Link>
                        </p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Form;