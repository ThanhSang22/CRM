import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoIosClose } from 'react-icons/io';
import CustomInput from '../../components/customInput';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogBody } from '@material-tailwind/react';
import logo from '../../assets/images/logo.png';
import Notice from './notice';
import auth from '../../features/auth/api';

const forgotPasswordSchema = yup.object().shape({
  email: yup.string().required('*Invalid email'),
});

const ForgotPassword = ({ onClose, handler }) => {
  const [notice, setNotice] = useState(false);
  const [email, setEmail] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const response = await auth.resetPass(data);

    if (response) {
      navigate(onClose);
      setNotice(true);
    }
  };

  return (
    <>
      <Dialog
        open={onClose}
        handler={handler}
        className="w-[580px] space-y-10 py-6 px-[50px] bg-white rounded-[10px] flex flex-col justify-between"
      >
        <div className="flex justify-between">
          <img src={logo} alt="" width={150} />
          <span
            className="text-4xl text-end flex justify-end text-[#8E8E8E] cursor-pointer"
            onClick={handler}
          >
            <IoIosClose />
          </span>
        </div>
        <div>
          <h1 className="text-3xl text-[#4D648D] font-semibold text-center mt-[30px]">
            FORGOT PASSWORD
          </h1>
          <p className="text-center text-[#00000099]">
            <i>Please enter your email for the reset password process</i>
          </p>
        </div>
        <DialogBody>
          <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-[#000000] text-xl">Email</h1>
            <CustomInput
              id="email"
              type="text"
              name="email"
              setName={setEmail}
              placeholder={'Enter your email'}
              errors={errors.email?.message}
              register={register('email')}
              className="!placeholder:text-[#000000] !px-4 !h-[50px] mb-[10px] !text-[17px]"
            />
            <button
              // onClick={() => setNotice(true)}
              className="bg-[#4D648D] py-2 px-6 rounded-[5px] text-white text-lg text-center mt-[40px] flex justify-center m-auto"
            >
              Continue
            </button>
          </form>
        </DialogBody>
      </Dialog>
      <Notice onNotice={notice} mail={email} handler={() => setNotice(!notice)} />
    </>
  );
};

export default ForgotPassword;
