import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoIosClose } from 'react-icons/io';
import CustomInput from '../../../components/customInput';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogBody } from '@material-tailwind/react';

const changePasswordSchema = yup.object().shape({
  password: yup.string().required('*Invalid password'),
  newPassword: yup.string().required('*Invalid password'),
  passwordAgain: yup.string().required('*Invalid password'),
});

const ChangePassword = ({ onClosePass, className }) => {
  // const [showPass, setShowPass] = useState(false);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(changePasswordSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate(onClosePass);
  };

  return (
    <Dialog
      open={true}
      handler={onClosePass}
      className="w-[580px] space-y-10 py-6 px-[50px] bg-white rounded-[10px] flex flex-col justify-between"
    >
      <span
        className="text-4xl text-end flex justify-end text-[#8E8E8E] cursor-pointer"
        onClick={onClosePass}
      >
        <IoIosClose />
      </span>
      <h1 className="text-3xl text-[#4D648D] font-bold text-center my-[50px]">CHANGE PASSWORD</h1>
      <DialogBody>
        <form
          action="#"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[10px]"
        >
          <CustomInput
            id={'password'}
            name={password}
            setName={setPassword}
            placeholder={'Enter your password'}
            errors={errors.password?.message}
            register={register('password')}
            showPassWord={true}
            className="!placeholder:text-[#000000] !px-4 !h-[50px]"
          />
          <CustomInput
            id={'newPassword'}
            name={newPassword}
            setName={setNewPassword}
            placeholder={'Enter new password'}
            errors={errors.newPassword?.message}
            register={register('newPassword')}
            showPassWord={true}
            className="!placeholder:text-[#000000] !px-4 !h-[50px]"
          />
          <CustomInput
            id={'passwordAgain'}
            name={passwordAgain}
            setName={setPasswordAgain}
            placeholder={'Enter new password again'}
            errors={errors.passwordAgain?.message}
            register={register('passwordAgain')}
            showPassWord={true}
            className="!placeholder:text-[#000000] !px-4 !h-[50px]"
          />
          <button className="bg-[#4D648D] py-2 px-6 rounded-[10px] text-white text-lg text-center my-[20px]">
            Save
          </button>
        </form>
      </DialogBody>
    </Dialog>
  );
};

export default ChangePassword;
