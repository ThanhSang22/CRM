import React from 'react';

const InputCreate = ({ name, type, onChange, className, classNameA, value, children }) => {
  return (
    <div className={`flex gap-3 ${classNameA} items-center`}>
      <h1
        className={`font-bold w-[100px] text-[#4D648D] whitespace-nowrap text-[15px] capitalize ${className}`}
      >
        {name}
      </h1>
      <div className="flex w-full">
        <input
          type={`${type || 'text'}`}
          className={`w-[90%] outline-none text-black ${value ? '' : 'border-b-[#000000] border-b-[0.2px]'}`}
          onChange={onChange}
          value={value}
          name={name}
        />
        {children}
      </div>
    </div>
  );
};

export default InputCreate;
