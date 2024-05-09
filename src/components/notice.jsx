import React from 'react';
import { Dialog, DialogBody, DialogHeader } from '@material-tailwind/react';
import { IoIosCheckmarkCircleOutline, IoIosClose } from 'react-icons/io';

const Notice = ({ onNotice, handler, des }) => {
  return (
    <Dialog open={onNotice} handler={handler} size="lg">
      <DialogHeader>
        <span
          className="text-4xl text-end flex justify-end text-[#8E8E8E] cursor-pointer"
          onClick={handler}
        >
          <IoIosClose />
        </span>
      </DialogHeader>
      <DialogBody>
        <div className="flex justify-center">
          <IoIosCheckmarkCircleOutline className="text-[#129D28]" size={120} />
        </div>
        <p className="text-center">{des}</p>
      </DialogBody>
    </Dialog>
  );
};

export default Notice;
