import React, { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import classNames from 'classnames';

const CustomInput = ({
  icon1,
  id,
  name,
  setName,
  type,
  value,
  placeholder,
  showPassWord,
  register,
  errors,
  className,
  classNameIcon,
  onChange,
}) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div>
      <div className="mt-2 relative">
        {icon1 && (
          <span
            className={`inline-block absolute top-4 left-4 text-2xl font-medium text-[#4D648D] ${classNameIcon}`}
          >
            {icon1}
          </span>
        )}
        <input
          onChange={onChange || ((e) => setName(e.target.value))}
          id={id}
          name={name}
          type={type || (!showPass ? 'password' : 'text')}
          autoComplete="current-password"
          placeholder={placeholder}
          value={value}
          className={classNames(
            `block w-full h-[60px] rounded-[10px] border-0 py-1.5 px-14 text-gray-900 shadow-sm 
          ring-1 ring-inset ring-gray-300 placeholder:text-[#8E8E8E] focus:ring-2 focus:ring-inset 
          focus:ring-indigo-600 sm:text-xl sm:leading-6 focus:outline-none ${className}`,
            { 'focus:right-1 focus:ring-inset focus:ring-red-400': errors },
          )}
          {...register}
        />
        {showPassWord &&
          (showPass ? (
            <span
              className="inline-block absolute top-5 right-4 text-xl font-medium text-[#4D648D]"
              onClick={() => setShowPass(!showPass)}
            >
              <BsEye />
            </span>
          ) : (
            <span
              className="inline-block absolute top-5 right-4 text-xl font-medium text-[#4D648D]"
              onClick={() => setShowPass(!showPass)}
            >
              <BsEyeSlash />
            </span>
          ))}

        {errors && <p className="text-[#E41212] text-sm font-medium ml-7 mt-1">{errors}</p>}
      </div>
    </div>
  );
};

export default CustomInput;
