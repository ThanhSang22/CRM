import React, { Fragment, useEffect, useState } from 'react';
import { GrFormPreviousLink, GrFormNext } from 'react-icons/gr';
import { Menu, Transition } from '@headlessui/react';
import { Avatar } from '@material-tailwind/react';
import avatar from '../../../assets/images/avatar.png';
import { IoIosArrowDown } from 'react-icons/io';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/action/auth';
import ChangePassword from '../../kanban/components/changePassword';
import { Link } from 'react-router-dom';
import auth from '../../../features/auth/api';
import { logoutUser } from '../../../redux/slice/authSlice';

const Header = ({ company }) => {
  const [showChangePass, setShowChangePass] = useState(false);
  const dispatch = useDispatch();
  // const [user, setUser] = useState({});
  const user = useSelector((state) => state.auth.userLogin.user);
  console.log('user====', user);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const res = await auth.getUser();
  //       setUser(res);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };

  //   getData();
  // }, []);

  const roleString = user.roles?.join();
  const role = roleString?.slice(5).toLowerCase();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <>
        <div className="h-[80px] bg-white border-[0.5px] border-b-[#8E8E8E] flex px-5 justify-between">
          <div className="text-[20px] font-medium space-x-3 flex items-center text-[#4D648D]">
            <Link to="/kanban-board">
              <GrFormPreviousLink className="text-[#8E8E8E]" size={25} />
            </Link>
            <p>Board</p>
            <GrFormNext size={20} />
            <p>{company}</p>
          </div>
          <div className="flex gap-2 items-center z-50">
            <Avatar
              // src={user.avatar?.physicalPath || avatar}
              src={`http://192.168.199.242:8080/avatars/${user.avatar?.id}`}
              alt="avatar"
              size="sm"
            />
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md text-sm">
                  {user.fullname}
                  <IoIosArrowDown className="-mr-1 h-5 w-5 text-[#8E8E8E]" aria-hidden="true" />
                </Menu.Button>
              </div>
              <p className="text-[#8E8E8E] text-xs capitalize">{role}</p>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  className="absolute right-1 mt-2 w-56 origin-top-right rounded-md bg-white 
                      shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block w-full px-4 py-2 text-left text-sm',
                          )}
                        >
                          Upload Avatar
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block w-full px-4 py-2 text-left text-sm',
                          )}
                          onClick={() => setShowChangePass(!showChangePass)}
                        >
                          Change password
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="submit"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block w-full px-4 py-2 text-left text-sm',
                          )}
                          onClick={handleLogout}
                        >
                          Sign out
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
        {showChangePass && (
          <ChangePassword
            onClosePass={() => setShowChangePass(!showChangePass)}
            className="fixed z-50 top-0 bottom-0"
          />
        )}
      </>
    </>
  );
};

export default Header;
