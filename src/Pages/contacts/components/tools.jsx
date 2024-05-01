import React, { useState } from 'react';
import { BiEditAlt } from 'react-icons/bi';
import EditContact from './editContact';

const Tools = () => {
  // const [onCreateContact, setOnCreateContact] = useState(false);
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
      </div>
      {/* {onCreateContact && <CreateContact onContact={() => setOnCreateContact(false)} />} */}
      {onEditContact && <EditContact onEdit={() => setOnEditContact(false)} />}
    </>
  );
};

export default Tools;
