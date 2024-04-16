import React from 'react';

const InputCreate = ({ name, onChange, placeholder }) => {
  return (
    <div className="flex gap-3 items-end">
      <h1 className="font-bold w-20 text-[#4D648D]">{name}</h1>
      <input
        type="text"
        className="w-full outline-none border-b-[#8E8E8E] border-b-[1px] text-black"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputCreate;
