import React from 'react';
import { Dialog, DialogBody, DialogFooter } from '@material-tailwind/react';
import { IoIosCheckmarkCircleOutline, IoIosClose } from 'react-icons/io';
import { CiLogin } from 'react-icons/ci';

const Notice = ({ onNotice, mail }) => {
  return (
    <Dialog
      open={onNotice}
      className="w-[780px] space-y-7 py-6 px-[30px] bg-white rounded-[10px] flex flex-col justify-between"
    >
      <span
        className="text-4xl text-end flex justify-end text-[#8E8E8E] cursor-pointer"
        onClick={onNotice}
      >
        <IoIosClose />
      </span>
      <div className="flex justify-center">
        <IoIosCheckmarkCircleOutline className="text-[#129D28]" size={120} />
      </div>
      <DialogBody>
        <p className="text-center">
          We have sent a new password to your email{' '}
          <i className="text-[#4D648D] whitespace-nowrap font-semibold">example@gmail.com.</i>{' '}
          Please using this new password to sign in.
        </p>
      </DialogBody>
      <DialogFooter>
        <button className="flex gap-2 px-6 rounded-[5px] text-[#4D648D] text-lg mt-[20px] font-semibold">
          <CiLogin size={25} /> Go to Sign in
        </button>
      </DialogFooter>
    </Dialog>
  );
};

export default Notice;
