import React from 'react';
import InputCreate from '../../../components/inputCreate';
import { Dialog, DialogBody, DialogFooter } from '@material-tailwind/react';
import { IoIosClose } from 'react-icons/io';
const EditContact = ({ onEdit }) => {
  return (
    <Dialog open={true} handler={onEdit} className="py-4 px-5">
      <spans
        className="text-4xl text-end flex justify-end text-[#8E8E8E] cursor-pointer"
        onClick={onEdit}
      >
        <IoIosClose />
      </spans>
      <h1 className="text-3xl text-[#4D648D] font-bold text-center my-[30px]">EDIT CONTACT</h1>
      <DialogBody className="space-y-6 px-20 xl:px-10">
        <InputCreate
          name="Opportunity"
          className="after:content-['*'] after:ml-0.5 after:text-red-500"
        />
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
        <InputCreate
          name="Job position"
          className="after:content-['*'] after:ml-0.5 after:text-red-500"
        />
        <div className="flex justify-between">
          <InputCreate
            type="date"
            name="Birthday"
            className="after:content-['*'] after:ml-0.5 after:text-red-500 w-[120px]"
          />
          <div className="w-40 flex gap-4 items-center ml-[20px]">
            <h1 className="font-bold mt-2 text-[#4D648D] after:content-['*'] after:ml-0.5 after:text-red-500">
              Gender
            </h1>
            <select className="text-base text-black w-[100px] mt-2 border-b-[0.3px] border-b-black outline-none">
              <option>Female</option>
              <option>Male</option>
            </select>
          </div>
        </div>
      </DialogBody>
      <DialogFooter className="flex justify-center items-center gap-5 mb-3 mt-6">
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

export default EditContact;
