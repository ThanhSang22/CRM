import { Dialog, DialogBody, DialogFooter, DialogHeader } from '@material-tailwind/react';
import React from 'react';
import { IoIosClose } from 'react-icons/io';
import { MdClose } from 'react-icons/md';
import Button from '../../../components/button';

const MarkLost = ({ open, handleOpen }) => {
  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="flex justify-between py-5 ">
          <h1 className="text-[25px] text-[#4D648D] font-bold text-center uppercase">mark lost</h1>
          <span
            className="text-4xl text-end flex justify-end text-[#8E8E8E] cursor-pointer"
            onClick={handleOpen}
          >
            <IoIosClose />
          </span>
        </DialogHeader>
        <hr />
        <DialogBody className="space-y-4 mx-8">
          <h1 className="text-[20px] font-semibold text-black text-start">Lost Reason</h1>

          <textarea
            className="border-b-[0.3px] border-b-[#00000099] w-[90%] min-h-[188px] text-[#00000099] outline-none"
            value="Write lost reasons here..."
            readOnly
          >
            Write lost reasons here...
          </textarea>
        </DialogBody>
        <hr />
        <DialogFooter className="flex justify-start gap-2">
          <Button
            type="submit"
            name="Mark as Lost"
            className="bg-[#4D648D] !py-1 !px-3 text-white font-semibold text-[15px]"
          />
          <Button
            onClick={handleOpen}
            icon={<MdClose />}
            name="Cancel"
            className="!py-1 !px-3 text-[15px]"
          />
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default MarkLost;
