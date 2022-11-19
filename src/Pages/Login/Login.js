import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLogin = (data) => {
        console.log(data);
    }

    return (
        <div className=' flex justify-center items-center font-[poppins] my-9'>
            <div className=' p-8 shadow-lg md:w-96 w-80 rounded-xl'>
                <h3 className=' text-xl text-black text-center'>Login</h3>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className=' form-control w-full max-w-xs text-black'>
                        <label className='label'><span className=' label-text text-neutral'>Email</span></label>
                        <input
                            type="text"
                            {...register('email', { required: "Email is required" })}
                            className='input input-bordered mb-2' />
                        {errors.email && <p className='text-red-400 text-xs'>{errors.email?.message}</p>}
                    </div>
                    <div className=' form-control w-full max-w-xs text-black'>
                        <label className='label'><span className=' label-text text-neutral'>Password</span></label>
                        <input
                            type="password"
                            {...register('password',
                                {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Password must be 6 characters or longer" }
                                })}
                            className='input input-bordered' />
                        <label className='label'><small className=' text-neutral mb-2'>Forgot Password?</small></label>
                        {errors.password && <p className='text-red-400 text-xs mb-5'>{errors.password?.message}</p>}
                    </div>
                    <input type='submit' className='btn btn-neutral w-full' value='login' />
                </form>
                <p className=' text-xs text-center mt-3 text-neutral'>New to Doctors Portal? <Link className=' text-primary hover:text-secondary hover:font-medium' to='/signup'>Create new account</Link></p>
                <div className=' divider'>OR</div>
                <button className=' btn btn-neutral btn-outline text-neutral w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;