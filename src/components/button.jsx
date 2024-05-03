import React from 'react';

const Button = ({ onClick, className, icon, name, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} border-[#00000099] py-2 px-2 rounded-[10px] text-[#8E8E8E] text-lg text-center  flex items-center justify-center gap-2 border-[0.3px]`}
    >
      {icon}
      {name}
    </button>
  );
};

export default Button;
