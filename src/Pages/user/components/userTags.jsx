import React from 'react';
import { users } from '../../../data/users';
import { Avatar, Checkbox } from '@material-tailwind/react';
import avatar from '../../../assets/images/avatar.png';

const titles = ['Name', 'Email', 'Mobile', 'Birthday', 'Gender', 'Role'];

const UserTags = () => {
  return (
    <>
      <div
        className="h-11 bg-[#D9D9D980] bg-opacity-50 rounded-lg flex justify-between 
        items-center pr-2 mb-5 gap-3"
      >
        {titles.map((title) => {
          return (
            <div
              className={`text-base font-semibold font-['Noto Sans']
                ${
                  title === 'Name'
                    ? 'w-[20%] ml-[100px]'
                    : title === 'Email'
                      ? 'w-[25%]'
                      : title === 'Mobile'
                        ? 'w-[13%]'
                        : title === 'Birthday'
                          ? 'w-[12%]'
                          : title === 'Gender'
                            ? 'w-[10%]'
                            : 'w-[7%]'
                }`}
            >
              {title}
            </div>
          );
        })}
      </div>
      {users.map((user, u) => {
        const roleString = user.roles.join();
        const role = roleString.slice(5).toLowerCase();
        return (
          <div
            key={u}
            className="flex py-4 rounded-[10px] border-[0.3px] border-[#4D648D] text-start gap-3
            justify-between items-center pr-2 mt-3 hover:shadow-[4px_4px_4px_0_rgba(77,100,141,0.5)] text-ellipsis"
          >
            <div className="flex">
              <Checkbox />
              <Avatar src={avatar} />
            </div>
            <div className="w-[20%]">
              <h1 className="text-black text-base font-semibold font-['Noto Sans'] whitespace-nowrap">
                {user.firstname + ' ' + user.lastname}
              </h1>
              <p className="text-[#8E8E8E] text-sm italic">@trangtt</p>
            </div>
            <div className="w-[25%] text-base font-['Noto Sans'] whitespace-nowrap text-ellipsis">
              {user.email}
            </div>
            <p className="w-[13%]">{user.phone}</p>
            <p className="text-base w-[12%] ">{user.birthday}</p>
            <p className="w-[10%] whitespace-nowrap">{user.gender}</p>
            <p className="w-[7%] capitalize">{role}</p>
          </div>
        );
      })}
    </>
  );
};

export default UserTags;
