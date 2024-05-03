import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-tailwind/react';
import logo from '../assets/images/logo.png';
import { IoIosArrowDown } from 'react-icons/io';
import classNames from 'classnames';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineViewKanban } from 'react-icons/md';
import { TiContacts } from 'react-icons/ti';
import { LiaFileAltSolid } from 'react-icons/lia';
import { BsPeople } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import auth from '../features/auth/api';
import useActiveMenu from '../hooks/useActiveMenu.ts';
import { logoutUser } from '../redux/slice/authSlice.js';

export default function Header({ ShowChangePass }) {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const { isActive } = useActiveMenu();
  // const token = useSelector((state) => state.auth.token);
  // console.log('token====', token);
  // const users = useSelector((state) => state.auth.user);
  // console.log('user====', users);
  // const userA = useSelector((state) => state.auth.user);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await auth.getUser();
        setUser(res);
      } catch (error) {
        console.log(error.message);
      }
    };

    getData();
  }, []);

  const roleString = user.roles?.join();
  const role = roleString?.slice(5).toLowerCase();

  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  const data = [
    {
      icon: <MdOutlineViewKanban />,
      label: 'Board',
      value: 'board',
      path: '/kanban-board',
    },
    {
      icon: <LiaFileAltSolid />,
      label: 'Opportunity',
      value: 'opportunity',
      path: '/opportunities',
    },
    {
      icon: <TiContacts />,
      label: 'Contact',
      value: 'contact',
      path: '/contacts',
    },
    {
      icon: <BsPeople />,
      label: 'User',
      value: 'user',
      path: `/users`,
    },
  ];

  const dataUser = data.slice(0, 3);

  return (
    <>
      <div>
        <div className="relative">
          <div className="flex justify-between py-5 px-7  w-full items-end border-b-[1px] border-gray-300">
            <img src={logo} alt="" width={120} />
            <div className="flex rounded-lg border-blue-gray-50 bg-transparent p-0 gap-16">
              {role === 'admin'
                ? data.map(({ icon, label, value, path }) => (
                    <Link
                      key={value}
                      className={
                        isActive(path)
                          ? 'text-[#4D648D] font-semibold'
                          : 'text-gray-900 hover:text-[#4D648D] hover:scale-105'
                      }
                      to={path}
                    >
                      <div className="text-lg flex items-center gap-1 cursor-pointer">
                        {icon}
                        {label}
                      </div>
                      <hr
                        className={
                          isActive(path)
                            ? 'text-[#4D648D] border-b-[5px] border-[#4D648D] shadow-none rounded'
                            : ' border-none'
                        }
                      />
                    </Link>
                  ))
                : dataUser.map(({ icon, label, value, path }) => (
                    <Link
                      key={value}
                      className={
                        isActive(path)
                          ? 'text-[#4D648D] font-semibold'
                          : 'text-gray-900 hover:text-[#4D648D] hover:scale-105'
                      }
                      to={path}
                    >
                      <div className="text-lg flex items-center gap-1 cursor-pointer">
                        {icon}
                        {label}
                      </div>
                      <hr
                        className={
                          isActive(path)
                            ? 'text-[#4D648D] border-b-[5px] border-[#4D648D] shadow-none rounded'
                            : ' border-none'
                        }
                      />
                    </Link>
                  ))}
            </div>
            <div className="flex gap-2 items-center z-50">
              <Avatar
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
                            onClick={ShowChangePass}
                          >
                            Change password
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
        </div>
      </div>
    </>
  );
}
