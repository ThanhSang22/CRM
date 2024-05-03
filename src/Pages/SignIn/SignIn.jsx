import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import cmr from '../../assets/images/crm-illus-signin 1.png';
import logo from '../../assets/images/logo.png';
import { FaRegUser } from 'react-icons/fa';
import { HiOutlineLockClosed } from 'react-icons/hi2';
import 'react-toastify/dist/ReactToastify.css';
import CustomInput from '../../components/customInput';
import { ToastContainer } from 'react-toastify';
import ForgotPassword from '../forgotPassword/forgotPassword';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/slice/authSlice';

const loginSchema = yup.object().shape({
  username: yup.string().required('*Invalid username'),
  password: yup.string().required('*Invalid password'),
});

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showForgot, setShowForgot] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);

  console.log('error:' + authState.error);

  console.log('loading:' + authState.loading);
  if (authState.userLogin != null) {
    navigate('/kanban-board');
  }
  // const handleLogin = async (payload) => {
  //   try {
  //     const res = await auth.login(payload);
  //     if (res) {
  //       // Save token to local storage
  //       localStorage.setItem('token', res.token);
  //       // Dispatch login action
  //       dispatch(loginSuccess(res.token));
  //       navigate('/kanban-board');
  //     }
  //   } catch (error) {
  //     toast.error(`Login Failed due to ${error.message}`);
  //   }
  // };

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  return (
    <div className="flex bg-[#4D648D] w-full h-[100vh]">
      <ToastContainer position="top-center" autoClose={2000} />
      <div className="w-[50%] flex flex-col items-center py-[65px] md:px-0 px-10">
        <div className="space-y-3">
          <h1 className="text-white lg:text-5xl leading-9 tracking-tight text-start font-semibold text-4xl">
            Connect and Enhance
          </h1>
          <h1 className="text-white lg:text-5xl leading-9 tracking-tight text-start font-semibold text-4xl">
            Customer Relationships
          </h1>
        </div>
        <img src={cmr} alt="" className=" w-[76.55%]  mt-[100px] lg:mt-0" />
        {/* w-[71.55%] */}
      </div>
      <div className="w-[50%] bg-white rounded-s-[40px] px-[50px] py-[30px] relative">
        <img src={logo} alt="" className="" width={140} />
        <h1 className="mt-[70px] text-center text-4xl font-bold leading-9 tracking-tight text-[#4D648D]">
          SIGN IN
        </h1>
        <div className="mt-[70px] sm:mx-auto sm:w-full sm:max-w-lg">
          <form action="#" onSubmit={handleSubmit(onSubmit)}>
            <CustomInput
              icon1={<FaRegUser />}
              id={'username'}
              name={username}
              setName={setUsername}
              type={'username'}
              placeholder={'Enter your username'}
              errors={errors.username?.message}
              register={register('username')}
            />

            <div className="text-start mt-5">
              <CustomInput
                icon1={<HiOutlineLockClosed />}
                id={'password'}
                name={password}
                setName={setPassword}
                placeholder={'Enter your password'}
                errors={errors.password?.message}
                register={register('password')}
                showPassWord={true}
                classNameIcon="!text-3xl"
              />
              <div className="text-sm text-end mt-2">
                <p
                  className="font-semibold text-[#283655] hover:text-indigo-500 underline cursor-pointer"
                  onClick={() => setShowForgot(!showForgot)}
                >
                  Forgot password?
                </p>
              </div>
            </div>

            <button
              type="submit"
              className={`flex w-full justify-center rounded-md bg-[#4D648D] px-4 py-3 mt-[80px] text-base 
                font-semibold leading-6 text-white shadow-sm hover:bg-[#6082bd] 
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                focus-visible:outline-indigo-600  ${authState.loading ? 'bg-[#6082bd]' : 'bg-[#4D648D]'}`}
            >
              {authState.loading ? 'Loding...' : 'Sign in'}
            </button>
          </form>
        </div>

        <p className="text-[#4D648D] absolute bottom-[30px] text-center left-[40%]">
          Powered by Blossom
        </p>
      </div>
      {showForgot && (
        <ForgotPassword
          onClose={() => setShowForgot(!showForgot)}
          className="fixed z-50 top-0 bottom-0"
        />
      )}
    </div>
  );
};

export default SignIn;
