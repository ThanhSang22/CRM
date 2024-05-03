import React, { useEffect, useState } from 'react';
import { Avatar, Checkbox } from '@material-tailwind/react';
import avatar from '../../../assets/images/avatar.png';
import Paging from '../../../components/paging';
import Tools from './tools';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../redux/slice/usersSlice.js';
import { Link } from 'react-router-dom';

const titles = ['Name', 'Email', 'Mobile', 'Birthday', 'Gender', 'Role'];

const UserTags = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.users.users);
  console.log();

  useEffect(() => {
    dispatch(getUsers(currentPage));
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    dispatch(getUsers(pageNumber));
  };

  return (
    <>
      <div className="flex justify-between text-[#4D648D]">
        <h1 className="text-slate-500 text-3xl font-semibold">User</h1>
        <p className="text-slate-500 text-base font-normal ">Total users: {allUsers?.totalItems}</p>
      </div>
      <div className="flex justify-between mt-8 mb-2">
        <Tools />
        <Paging
          currentPage={currentPage}
          setCurrentPage={handlePageChange}
          totalOpportunities={allUsers?.totalItems}
          totalPages={allUsers?.totalPages}
        />
      </div>
      <div
        className="h-11 bg-[#D9D9D980] bg-opacity-50 rounded-lg flex justify-between 
        items-center pr-2 mb-5 gap-3"
      >
        {titles.map((title) => {
          return (
            <div
              key={title}
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
      {allUsers?.users?.map((user, u) => {
        const roleString = user.roles.join();
        const role = roleString.slice(5).toLowerCase();

        const birthday = user.birthday?.substr(0, 10);

        return (
          <Link
            to={`/users/edituser/${user.id}`}
            key={u}
            className="flex py-4 rounded-[10px] border-[0.3px] border-[#4D648D] text-start gap-3
            justify-between items-center pr-2 mt-3 hover:shadow-[4px_4px_4px_0_rgba(77,100,141,0.5)] text-ellipsis"
          >
            <div className="flex">
              <Checkbox
                ripple={false}
                className="transition-all hover:scale-105 hover:before:opacity-0 checked:bg-[#4D648D] checked:border-[#4D648D]"
              />
              <Avatar src={`http://192.168.199.242:8080/avatars/${user.avatar?.id}`} />
            </div>
            <div className="w-[20%]">
              <h1 className="text-black text-base font-semibold font-['Noto Sans'] whitespace-nowrap">
                {user.firstname + ' ' + user.lastname}
              </h1>
              <p className="text-[#8E8E8E] text-sm italic">@{user.username}</p>
            </div>
            <div className="w-[25%] text-base font-['Noto Sans'] whitespace-nowrap text-ellipsis">
              {user.email}
            </div>
            <p className="w-[13%]">{user.phone}</p>
            <p className="text-base w-[12%] ">{birthday}</p>
            <p className="w-[10%] whitespace-nowrap">{user.gender}</p>
            <p className="w-[7%] capitalize">{role}</p>
          </Link>
        );
      })}
    </>
  );
};

export default UserTags;
