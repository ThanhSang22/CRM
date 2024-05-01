import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoIosClose } from 'react-icons/io';
import CustomInput from '../../../components/customInput';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogBody } from '@material-tailwind/react';
import auth from '../../../features/auth/api';

const changePasswordSchema = yup.object().shape({
  password: yup.string().required('*Invalid password'),
  newPassword: yup.string().required('*Invalid newpassword'),
  renewPassword: yup.string().required('*Invalid renewpassword'),
});

const ChangePassword = ({ onClosePass }) => {
  const [changPass, setChangePass] = useState({
    oldPassword: '',
    newPassword: '',
    renewPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChangePass({ ...changPass, [name]: value });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(changePasswordSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await auth.changPass(data);
      console.log('===', response);
      // if (response) {
      //   // localStorage.removeItem('token');
      //   // navigate('/');
      //   console.log(response);
      // } else {
      //   throw new Error('Failed to change password');
      // }
    } catch (error) {
      console.error('Error changing password:', error);
    }
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
        <form action="#" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[10px]">
          <CustomInput
            id="oldpassword"
            name="oldpassword"
            onChange={handleChange}
            // value={changPass.oldPassword}
            placeholder={'Enter your password'}
            errors={errors.password?.message}
            register={register('password')}
            showPassWord={true}
            className="!placeholder:text-[#000000] !px-4 !h-[50px]"
          />
          <CustomInput
            id="newPassword"
            name="newPassword"
            onChange={handleChange}
            // value={changPass.newPassword}
            placeholder={'Enter new password'}
            errors={errors.newPassword?.message}
            register={register('newPassword')}
            showPassWord={true}
            className="!placeholder:text-[#000000] !px-4 !h-[50px]"
          />
          <CustomInput
            id="renewPassword"
            name="renewPassword"
            onChange={handleChange}
            // value={changPass.renewPassword}
            placeholder={'Enter new password again'}
            errors={errors.renewPassword?.message}
            register={register('renewPassword')}
            showPassWord={true}
            className="!placeholder:text-[#000000] !px-4 !h-[50px]"
          />
          <button
            type="submit"
            className="bg-[#4D648D] py-2 px-6 rounded-[10px] text-white text-lg text-center my-[20px]"
          >
            Save
          </button>
        </form>
      </DialogBody>
    </Dialog>
  );
};

export default ChangePassword;
