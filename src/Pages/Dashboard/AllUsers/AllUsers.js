import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json();
            return data;
        }
    });

    const handleMakeAdmin = (id) => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Admin successfully made!')
                    refetch();
                }
            })
    }

    return (
        <div className=' bg-[#F1F5F9] font-[poppins]'>
            <div className=' md:py-14 md:px-6 p-3'>
                <h2 className=' text-3xl mb-7'>Users</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr className=' text-center'>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Admin</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, i) =>
                                    <tr key={user._id} className='hover text-center'>
                                        <th>{i + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className=' btn'>Make Admin</button>}</td>
                                        <td><button className=' btn'>Delete</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;