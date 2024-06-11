import { Dialog, DialogBody, DialogFooter, DialogHeader } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import InputCreate from '../../../components/inputCreate';
import { MdClose } from 'react-icons/md';
import { FiSend } from 'react-icons/fi';
import Button from '../../../components/button';
import { ImAttachment } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../redux/slice/usersSlice';
import 'react-autocomplete-input/dist/bundle.css';
import { Switch } from '@headlessui/react';
import { sendQuotation } from '../../../redux/slice/mailsSilce';
import { useParams } from 'react-router-dom';

const SendEmail = ({ open, handleOpen }) => {
  const users = useSelector((state) => state.users.users.users);
  const [records, setRecords] = useState([]);
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers(1));
  }, []);

  const Filter = (e) => {
    setRecords(users?.filter((f) => f.email.toLowerCase().includes(e.target.value)));
  };

  const handleSend = () => {
    dispatch(sendQuotation(id));
  };

  return (
    <>
      <Dialog open={open} handler={handleOpen} size="xl">
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
          <InputCreate
            name="Recipient"
            className="!text-[17px] !text-[#000000] after:content-['*'] after:ml-0.5 after:text-red-500"
            onChange={Filter}
          />
          {/* <Autocomplete
            multiple
            limitTags={2}
            id="multiple-limit-tags"
            options={users}
            getOptionLabel={(option) => {
              return option?.email;
            }}
            renderInput={(params) => <TextField {...params} placeholder="Favorites" />}
            sx={{ width: '500px' }}
          /> */}
          <InputCreate
            name="Subject"
            className="!text-[17px] !text-[#000000] after:content-['*'] after:ml-0.5 after:text-red-500"
          />
          <textarea
            className="border-b-[0.3px] border-b-[#00000099] w-[90%] min-h-[188px] p-4 text-[#00000099] outline-none"
            value="Write your message here..."
            readOnly
          >
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
          <div className="flex !mt-20 items-center">
            <h1 className="font-bold text-[#4D648D] whitespace-nowrap text-[15px] capitalize">
              Load cold email template
            </h1>
            <Switch
              id="custom-switch-component"
              ripple={false}
              className="h-full w-full checked:bg-[#4D648D]"
              containerProps={{
                className: 'w-10 h-5',
              }}
              circleProps={{
                className: 'before:hidden left-0.5 rigth-0.5 border-none',
              }}
            />
          </div>
        </DialogBody>
        <hr />
        <DialogFooter className="flex justify-start gap-2">
          <Button
            type="submit"
            icon={<FiSend />}
            onClick={handleSend}
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
