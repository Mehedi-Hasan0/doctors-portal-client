import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hook/useToken';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const navigate = useNavigate();
    const [token] = useToken(createdUserEmail);

    if (token) {
        navigate('/');
    }

    const handleSignup = (data) => {
        console.log(data);
        setSignUpError('');

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .catch(err => console.log(err))
            })
            .catch(error => {
                console.log(error);
                setSignUpError(error.message)
            })
    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
            })
    }


    return (
        <div className=' flex justify-center items-center font-[poppins] my-9'>
            <div className=' p-8 shadow-lg md:w-96 w-80 rounded-xl'>
                <h3 className=' text-xl text-black text-center'>Sign Up</h3>
                <form onSubmit={handleSubmit(handleSignup)}>
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
                        <label className='label'><span className=' label-text text-neutral'>Password</span></label>
                        <input
                            {...register('password', {
                                required: 'Password is required',
                                pattern: { value: /(?=.*[A-Z])(?=.*[a-z])/, message: ' Password must have upper and lower case characters' },
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            type="password"
                            className='input input-bordered' />
                        {errors.password && <p className=' text-red-400 text-xs my-2'>{errors.password?.message}</p>}
                        {signUpError && <p className=' text-red-400 text-xs my-2'>{signUpError.slice(22, -2)}</p>}
                    </div>
                    <input type='submit' className='btn btn-neutral w-full mt-4' value='sign up' />
                </form>
                <p className=' text-xs text-center mt-3 text-neutral'>Already have an account? <Link className=' text-primary hover:text-secondary hover:font-medium' to='/login'>Please Login</Link></p>
                <div className=' divider'>OR</div>
                <button className=' btn btn-neutral btn-outline text-neutral w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;