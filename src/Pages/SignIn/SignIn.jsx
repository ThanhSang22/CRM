import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import cmr from '../../assets/images/crm-illus-signin 1.png';
import logo from '../../assets/images/logo.png';
import { FaRegUser } from 'react-icons/fa';
import { HiOutlineLockClosed } from 'react-icons/hi2';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const loginSchema = yup.object().shape({
    username: yup.string().min(3, '*Invalid username').required('Please enter your username'),
    password: yup.string().min(6, '*Invalid password').required('Please enter your password'),
});

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
    });

    const navigate = useNavigate();
    const onSubmit = (data) => {
        console.log(data);
        navigate('/kanban-board');
    };

    return (
        <div className="flex bg-[#4D648D] w-full h-[100vh]">
            <div className="w-[60%] flex flex-col items-center py-[44.4px] md:px-0 px-10">
                <div className="space-y-3">
                    <h1 className="text-white lg:text-5xl leading-9 tracking-tight text-start font-semibold text-4xl">
                        Connect and Enhance
                    </h1>
                    <h1 className="text-white lg:text-5xl leading-9 tracking-tight text-start font-semibold text-4xl">
                        Customer Relationships
                    </h1>
                </div>
                <img src={cmr} alt="" className=" w-[71.55%]  mt-[100px] lg:mt-0" />
                {/* w-[71.55%] */}
            </div>
            <div className="w-[47%] bg-white rounded-s-[40px] px-[50px] py-[30px] relative">
                <img src={logo} alt="" className="" width={150} />
                <h1 className="mt-[70px] text-center text-4xl font-bold leading-9 tracking-tight text-[#4D648D]">
                    Sign in to your account
                </h1>
                <div className="mt-[70px] sm:mx-auto sm:w-full sm:max-w-lg">
                    <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
                        <div className="text-start relative">
                            <span className="inline-block absolute top-4 left-2 text-lg font-light text-[#4D648D]">
                                <FaRegUser />
                            </span>
                            <div className="mt-2">
                                <input
                                    onChange={(e) => setUsername(e.target.value)}
                                    id="username"
                                    name={username}
                                    type="username"
                                    autoComplete="username"
                                    placeholder="Enter your username"
                                    className="block w-full h-[50px] rounded-md border-0 py-1.5 px-8 text-gray-900 shadow-sm 
                                    ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                                    focus:ring-indigo-600 sm:text-base sm:leading-6 focus:outline-none"
                                    {...register('username')}
                                />
                                {errors.username?.message && (
                                    <p className="text-red-600 text-sm font-medium ml-7 mt-1">
                                        {errors.username?.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="text-start mt-5">
                            <div className="mt-2 relative">
                                <span className="inline-block absolute top-4 left-2 text-xl font-medium text-[#4D648D]">
                                    <HiOutlineLockClosed />
                                </span>
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    id="password"
                                    name={password}
                                    type={!showPass ? 'password' : 'text'}
                                    autoComplete="current-password"
                                    placeholder="Enter your password"
                                    className="block w-full h-[50px] rounded-md border-0 py-1.5 px-8 text-gray-900 shadow-sm 
                                    ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                                    focus:ring-indigo-600 sm:text-base sm:leading-6 focus:outline-none"
                                    {...register('password')}
                                />
                                {showPass ? (
                                    <span
                                        className="inline-block absolute top-4 right-2 text-xl font-medium text-[#4D648D]"
                                        onClick={() => setShowPass(!showPass)}
                                    >
                                        <BsEye />
                                    </span>
                                ) : (
                                    <span
                                        className="inline-block absolute top-4 right-2 text-xl font-medium text-[#4D648D]"
                                        onClick={() => setShowPass(!showPass)}
                                    >
                                        <BsEyeSlash />
                                    </span>
                                )}

                                {errors.password?.message && (
                                    <p className="text-red-500 text-sm font-medium ml-7 mt-1">
                                        {errors.password?.message}
                                    </p>
                                )}
                            </div>
                            <div className="text-sm text-end mt-2">
                                <Link
                                    to="/forgot-password"
                                    className="font-semibold text-[#283655] hover:text-indigo-500 underline"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-[#4D648D] px-4 py-3 mt-[70px] text-base 
                                    font-semibold leading-6 text-white shadow-sm hover:bg-[#6082bd] 
                                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                                    focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </form>
                </div>

                <p className="text-[#4D648D] absolute bottom-[30px] text-center left-[40%]">
                    Powered by Blossom
                </p>
            </div>
        </div>
    );
};

export default SignIn;
