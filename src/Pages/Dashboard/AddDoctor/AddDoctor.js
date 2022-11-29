import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = data => {
        console.log(data);
    }

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='bg-[#F1F5F9] h-full font-[poppins]'>
            <div className=' p-12'>
                <h2 className=' text-2xl mb-7 text-black ml-1 font-semibold'>Add a new Doctor</h2>
                <form className='w-96 shadow-md rounded-xl bg-white p-12' onSubmit={handleSubmit(handleAddDoctor)}>
                    <div className=' form-control w-full max-w-xs text-black'>
                        <label className='label'><span className=' label-text text-neutral'>Name</span></label>
                        <input
                            {...register('name', { required: 'Name is required' })}
                            type="text"
                            className='input input-bordered mb-2' />
                        {errors.name && <p className=' text-red-400 text-xs'>{errors.name?.message}</p>}
                    </div>
                    <div className=' form-control w-full max-w-xs text-black'>
                        <label className='label'><span className=' label-text text-neutral'>Email</span></label>
                        <input
                            {...register('email', { required: ' Email is required' })}
                            type="email"
                            className='input input-bordered mb-2' />
                        {errors.email && <p className=' text-red-400 text-xs'>{errors.email?.message}</p>}
                    </div>
                    <div className=' form-control w-full max-w-xs text-black'>
                        <label className='label'><span className=' label-text text-neutral'>Specialty</span></label>
                        <select
                            {...register('specialty')}
                            className="select select-bordered w-full max-w-xs">
                            {
                                specialties.map(specialty => <option
                                    key={specialty._id}
                                    value={specialty.name}
                                >{specialty.name}</option>
                                )
                            }
                        </select>
                    </div>

                    <div className=' form-control w-full max-w-xs text-black'>
                        <label className='label'><span className=' label-text text-neutral'>Photo</span></label>
                        <input
                            {...register('img', { required: ' Photo is required' })}
                            type="file"
                            className='input input-bordered mb-2' />
                        {errors.img && <p className=' text-red-400 text-xs'>{errors.img?.message}</p>}
                    </div>
                    <input type='submit' className='btn btn-neutral w-full mt-4' value='Add doctor' />
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;