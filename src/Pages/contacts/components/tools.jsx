import React, { useState } from 'react';
import { BiEditAlt } from 'react-icons/bi';
import { IoIosAdd } from 'react-icons/io';
import { RiDeleteBin6Line } from 'react-icons/ri';
import CreateContact from './createContact';
import EditContact from './editContact';

const Tools = () => {
  const [onCreateContact, setOnCreateContact] = useState(false);
  const [onEditContact, setOnEditContact] = useState(false);
  return (
    <>
      <div className="flex gap-5">
        <button
          onClick={() => setOnCreateContact(true)}
          className="flex items-center gap-1 text-[#4D648D] font-semibold hover:scale-105"
        >
          <IoIosAdd size={25} />
          Create
        </button>
        <button
          onClick={() => setOnEditContact(true)}
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
      {onCreateContact && <CreateContact onContact={() => setOnCreateContact(false)} />}
      {onEditContact && <EditContact onEdit={() => setOnEditContact(false)} />}
    </>
  );
};

export default Tools;
