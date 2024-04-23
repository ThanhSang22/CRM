import React from 'react';

const InputCreate = ({ name, type, onChange, className, value, children }) => {
  return (
    <div className={`flex gap-3 ${className}`}>
      <h1
        className={`font-bold w-[100px] text-[#4D648D] whitespace-nowrap text-[15px] capitalize ${className}`}
      >
        {name}
      </h1>
      <div className="flex w-full">
        <input
          type={`${type || 'text'}`}
          className="w-[90%] outline-none border-b-[#000000] border-b-[0.2px] text-black"
          onChange={onChange}
          value={value}
        />
        {children}
      </div>
    </div>
  );
};

export default InputCreate;
