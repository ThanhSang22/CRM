import React from 'react';
import InputCreate from '../../../components/inputCreate';
import { Dialog, DialogBody, DialogFooter, Option, Select } from '@material-tailwind/react';
import { IoIosClose } from 'react-icons/io';

const EditUser = ({ onEdit }) => {
  return (
    <Dialog open={true} handler={onEdit} className="py-4">
      <span
        className="text-4xl text-end flex justify-end text-[#8E8E8E] cursor-pointer"
        onClick={onEdit}
      >
        <IoIosClose />
      </span>
      <h1 className="text-3xl text-[#4D648D] font-bold text-center my-[30px]">EDIT USER</h1>
      <DialogBody className="space-y-6 px-20 xl:px-10">
        <InputCreate
          name="Frist Name"
          className="after:content-['*'] after:ml-0.5 after:text-red-500"
        />
        <InputCreate
          name="Last Name"
          className="after:content-['*'] after:ml-0.5 after:text-red-500"
        />
        <InputCreate name="Email" className="after:content-['*'] after:ml-0.5 after:text-red-500" />
        <InputCreate name="Phone" className="after:content-['*'] after:ml-0.5 after:text-red-500" />
        <div className="flex">
          <InputCreate
            type="date"
            name="Birthday"
            className="after:content-['*'] after:ml-0.5 after:text-red-500 w-[120px]"
          />
          <div className="w-40 flex gap-4 items-center ml-[20px]">
            <h1 className="font-bold mt-2 text-[#4D648D] after:content-['*'] after:ml-0.5 after:text-red-500">
              Gender
            </h1>
            <div className="!min-w-[100px]">
              <select className="!h-7 !p-4 text-base text-black w-[100px]">
                <option>Female</option>
                <option>Male</option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-40 flex gap-4 items-center">
          <h1 className="font-bold mt-2 text-[#4D648D] w-[100px] after:content-['*'] after:ml-0.5 after:text-red-500">
            Role
          </h1>
          <Select
            variant="standard"
            className="!h-7 !p-4 text-base text-black"
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
            name="role"
          >
            <Option>User</Option>
            <Option>Admin</Option>
          </Select>
        </div>
      </DialogBody>
      <DialogFooter className="flex justify-center items-center gap-5 my-7">
        <button
          onClick={onEdit}
          className="border-[1px] border-gray-500 py-1 px-4 rounded-[5px] text-gray-500 text-lg text-center flex justify-center "
        >
          Cancel
        </button>
        <button className="bg-[#4D648D] py-1 px-4 rounded-[5px] text-white text-lg text-center flex justify-center">
          Save
        </button>
      </DialogFooter>
    </Dialog>
  );
};

export default EditUser;
