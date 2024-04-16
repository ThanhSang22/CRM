import React, { useState } from 'react';
import { Avatar } from '@material-tailwind/react';
import logo from '../assets/images/logo.png';
import avatar from '../assets/images/avatar.png';
import { IoIosArrowDown } from 'react-icons/io';
import classNames from 'classnames';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import CreateOpportunity from '../Pages/createOpportunity/createOpportunity';
import { MdOutlineViewKanban } from 'react-icons/md';
import { TiContacts } from 'react-icons/ti';
import { LiaFileAltSolid } from 'react-icons/lia';
import { IoDocumentAttachOutline } from 'react-icons/io5';
import { BsPeople } from 'react-icons/bs';

export default function Header({ ShowChangePass }) {
  const [activeTab, setActiveTab] = useState('board');
  const [openCreate, setOpenCreate] = useState(false);
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
      icon: <IoDocumentAttachOutline />,
      label: 'File',
      value: 'file',
      path: `/files`,
    },
    {
      icon: <BsPeople />,
      label: 'User',
      value: 'user',
      path: `/users`,
    },
  ];

  return (
    <div>
      <div value={activeTab} className="relative">
        <div className="flex justify-between py-5 px-7  w-full items-end border-b-[1px] border-gray-300">
          <img src={logo} alt="" width={120} />
          <div className="flex rounded-lg border-blue-gray-50 bg-transparent p-0 gap-16">
            {data.map(({ icon, label, value, path }) => (
              <Link
                key={value}
                onClick={() => setActiveTab(value)}
                className={
                  activeTab === value
                    ? 'text-[#4D648D] border-b-[5px] border-[#4D648D] shadow-none rounded'
                    : 'text-gray-900'
                }
                to={path}
              >
                <div className="text-lg flex items-center gap-1 cursor-pointer">
                  {icon}
                  {label}
                </div>
              </Link>
            ))}
          </div>
          <div className="flex gap-2 items-center z-50">
            <Avatar src={avatar} alt="avatar" size="sm" />
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md text-sm">
                  Trang Ta Thi
                  <IoIosArrowDown className="-mr-1 h-5 w-5 text-[#8E8E8E]" aria-hidden="true" />
                </Menu.Button>
              </div>
              <p className="text-[#8E8E8E] text-xs">Admin</p>
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
                          onClick={ShowChangePass}
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
        </div>
      </div>

      {openCreate && (
        <CreateOpportunity
          onCloseCreate={() => setOpenCreate(!openCreate)}
          className="fixed z-50 top-0 bottom-0"
        />
      )}
    </div>
  );
}
