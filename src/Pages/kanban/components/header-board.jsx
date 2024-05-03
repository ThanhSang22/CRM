import React from 'react';
import Button from '../../../components/button';
import { IoMdAdd, IoMdCloudUpload } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';

function HeaderBoard({ toggleCreatingTask }) {
  return (
    <div className="flex mx-9 my-6 justify-between z-10">
      <div className="flex gap-3">
        <Button
          icon={<IoMdAdd size={20} />}
          onClick={toggleCreatingTask}
          name="Create"
          className="p-1.5 !text-[#4D648D] font-semibold h-[30px] border-[#4D648D] rounded-[5px] border-[1px] !text-[15px] normal-case"
        />
        <Button
          icon={<IoMdCloudUpload size={20} />}
          name="Import"
          className="p-1.5 !text-[#4D648D] font-semibold h-[30px] border-[#4D648D] rounded-[5px] border-[1px] !text-[15px] normal-case"
        />
      </div>
      <div className="w-60">
        <div className="relative w-full min-w-[200px] h-7">
          <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
            <FiSearch />
          </div>
          <input
            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 
            disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border
            border focus:border-1 text-sm px-3 py-2.5 
            rounded-[7px] !pr-9 border-blue-gray-200 focus:border-[#8E8E8E]"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderBoard;
