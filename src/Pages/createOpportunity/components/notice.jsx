import React from 'react';
import { Dialog, DialogBody } from '@material-tailwind/react';
import { IoIosCheckmarkCircleOutline, IoIosClose } from 'react-icons/io';

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
          You have already imported opportunities from Excel file successfully.
        </p>
      </DialogBody>
    </Dialog>
  );
};

export default Notice;
