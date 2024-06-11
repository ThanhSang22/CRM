import React, { useState } from 'react';
import { BiEditAlt } from 'react-icons/bi';
import EditContact from './editContact';
import { RiDeleteBin6Line } from 'react-icons/ri';

const Tools = () => {
  const [onEditContact, setOnEditContact] = useState(false);

  return (
    <>
      <div className="flex gap-5">
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
      {onEditContact && <EditContact onEdit={() => setOnEditContact(false)} />}
    </>
  );
};

export default Tools;
