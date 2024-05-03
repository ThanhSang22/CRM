import { Dialog, DialogBody, DialogFooter, DialogHeader } from '@material-tailwind/react';
import React from 'react';
import { IoIosClose } from 'react-icons/io';
import InputCreate from '../../../components/inputCreate';
import { MdClose } from 'react-icons/md';
import { FiSend } from 'react-icons/fi';
import Button from '../../../components/button';
import { ImAttachment } from 'react-icons/im';

const SendEmail = ({ open, handleOpen }) => {
  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        size="xl"
        // className="w-[580px] space-y-10 py-6 px-[50px] bg-white rounded-[10px] flex flex-col justify-between"
      >
        <DialogHeader className="flex justify-between py-5 ">
          <h1 className="text-[25px] text-[#4D648D] font-bold text-center">SEND EMAIL</h1>
          <span
            className="text-4xl text-end flex justify-end text-[#8E8E8E] cursor-pointer"
            onClick={handleOpen}
          >
            <IoIosClose />
          </span>
        </DialogHeader>
        <hr />
        <DialogBody className="h-[28rem] space-y-4 mx-8">
          <InputCreate name="Recipient" className="!text-[17px] !text-[#000000]" />
          <InputCreate name="Subject" className="!text-[17px] !text-[#000000]" />
          <textarea className="border-b-[0.3px] border-b-[#00000099] w-[90%] min-h-[188px] p-4 text-[#00000099] outline-none">
            Write your message here...
          </textarea>
          <div className=" relative cursor-pointer">
            <Button
              type="submit"
              icon={<ImAttachment />}
              name="Attachment"
              className="!text-[#4D648D] bg-white text-[18px] !px-2 !py-1 rounded-[5px] font-medium absolute overflow-hidden border-[#4D648D]"
            />
            <input type="file" className="flex  absolute left-9 top-[70%] scale-105 opacity-0" />
          </div>
          <InputCreate
            name="Load template"
            className="!text-[17px] !text-[#000000] w-[120px]"
            classNameA="!mt-[70px]"
          />
        </DialogBody>
        <hr />
        <DialogFooter className="flex justify-start gap-2">
          <Button
            type="submit"
            icon={<FiSend />}
            name="Send"
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

export default SendEmail;
