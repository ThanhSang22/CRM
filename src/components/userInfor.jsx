import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import auth from '../features/auth/api';
import { logout } from '../redux/action/auth';
import { Avatar, Menu } from '@material-tailwind/react';
import { IoIosArrowDown } from 'react-icons/io';
import { Transition } from '@headlessui/react';
import classNames from 'classnames';
import avatar from '../assets/images/avatar.png';
import ChangePassword from '../Pages/kanban/components/changePassword';
import SignIn from '../Pages/SignIn/SignIn';

const UserInfor = () => {
  const [user, setUser] = useState({});
  // const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const [showChangePass, setShowChangePass] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await auth.getUser();
        console.log('check-user---', res);
        setUser(res);
      } catch (error) {
        console.log(error.message);
      }
    };

    getData();
  }, []);

  //   const roleString = user.roles.join();
  //   const role = roleString.slice(5).toLowerCase();

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logout());
  };

  return (
    <>
      {/* {token ? ( */}
      <>
        <div className="flex gap-2 items-center z-50">
          <Avatar src={avatar} alt="avatar" size="sm" />
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md text-sm">
                {user.fullname}
                <IoIosArrowDown className="-mr-1 h-5 w-5 text-[#8E8E8E]" aria-hidden="true" />
              </Menu.Button>
            </div>
            <p className="text-[#8E8E8E] text-xs">{user.roles}</p>
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
                  <form method="POST" action="#">
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
                  </form>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        {showChangePass && (
          <ChangePassword
            onClosePass={() => setShowChangePass(!showChangePass)}
            className="fixed z-50 top-0 bottom-0"
          />
        )}
      </>
      {/* ) : (
        <SignIn />
      )} */}
    </>
  );
};

export default UserInfor;
