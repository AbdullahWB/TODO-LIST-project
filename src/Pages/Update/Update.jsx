import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';

const Update = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const update = useLoaderData()
    const { title, time, status, description, date, _id } = update || {};
    
    const onSubmit = data => {
        fetch(`http://localhost:3000/list/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success('Your data added successfully ✅')
            })
        console.log(data);
    }
    console.log(watch("example"));

    return (
        <>
            <div className='flex flex-col justify-center items-center h-[calc(100vh-70px)] '>
                <h1 className='text-3xl font-bold mb-10 text-black'>Add Your Task</h1>
                <form className='grid grid-row-4 gap-10 bg-[#F1D4E5] p-10 rounded-lg' onSubmit={handleSubmit(onSubmit)}>
                    <input className='p-4 rounded-lg' defaultValue={title} {...register("title", { required: true })} />
                    <input className='p-4 rounded-lg' defaultValue={status} {...register("status", { required: true })} />
                    <div className='grid grid-cols-2 gap-5'>
                        <input className='p-4 rounded-lg' type='date' defaultValue={date} {...register("date", { required: true })} />
                        <input className='p-4 rounded-lg' defaultValue={time} {...register("time", { required: true })} />
                    </div>
                    <textarea className='p-4 rounded-lg' rows="2" cols="50" defaultValue={description} {...register("description", { required: true })} />
                    <input className='btn bg-[#73BBC9] text-white' type="submit" value='Update' />
                </form>
            </div>
        </>
    );
};

export default Update;