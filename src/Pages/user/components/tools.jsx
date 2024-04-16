import React, { useState } from 'react';
import { BiEditAlt } from 'react-icons/bi';
import { IoIosAdd } from 'react-icons/io';
import { RiDeleteBin6Line } from 'react-icons/ri';
import CreateUser from './createUser';
import EditUser from './editUser';

const Tools = () => {
  const [onCreateUser, setOnCreateUser] = useState(false);
  const [onEditUser, setOnEditUser] = useState(false);

  return (
    <>
      <div className="flex gap-5">
        <button
          onClick={() => setOnCreateUser(true)}
          className="flex items-center gap-1 text-[#4D648D] font-semibold hover:scale-105"
        >
          <IoIosAdd size={25} />
          Create
        </button>
        <button
          onClick={() => setOnEditUser(true)}
          className="flex items-center gap-1 text-[#4D648D] font-semibold hover:scale-105"
        >
          <BiEditAlt size={20} />
          Edit
        </button>
        <button className="flex items-center gap-1 text-[#4D648D] font-semibold hover:scale-105">
          <RiDeleteBin6Line size={20} />
          Delete
        </button>
      </div>
      {onCreateUser && <CreateUser onUser={() => setOnCreateUser(false)} />}
      {onEditUser && <EditUser onEdit={() => setOnEditUser(false)} />}
    </>
  );
};

export default Tools;
