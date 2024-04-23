import React from 'react';

const InputCreate = ({ name, type, onChange, value, className }) => {
  return (
    <div className={`flex gap-3 ${className}`}>
      <h1 className="font-bold w-[100px] text-[#4D648D] whitespace-nowrap capitalize">{name}</h1>
      <div className="flex w-full">
        <input
          type={`${type} || text`}
          name={name}
          className="w-full outline-none border-b-[#8E8E8E] border-b-[1px] text-black"
          onChange={onChange}
          value={value}
        />
        {name === 'Expected Revenue' && (
          <u className="text-black font-semibold absolute right-[45%]">đ</u>
        )}
      </div>
    </div>
  );
};

export default InputCreate;
