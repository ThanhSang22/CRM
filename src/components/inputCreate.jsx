import React from 'react';

const InputCreate = ({ name, type, onChange, className, value }) => {
  return (
    <div className="flex gap-3 items-end">
      <h1
        className={`font-bold w-[100px] text-[#4D648D] whitespace-nowrap text-[15px] ${className}`}
      >
        {name}
      </h1>
      <input
        type={`${type || 'text'}`}
        className="w-full outline-none border-b-[#000000] border-b-[0.3px] text-black"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default InputCreate;
