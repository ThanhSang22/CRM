import React, { useEffect, useState } from 'react';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Avatar,
  Button,
} from '@material-tailwind/react';
import logo from '../../../assets/images/logo.png';
import avatar from '../../../assets/images/avatar.png';
import { IoIosArrowDown, IoMdAdd, IoMdCloudUpload } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';
import classNames from 'classnames';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import KanbanBoard from '../kanbanBoard';
import CreateOpportunity from '../../createOpportunity/createOpportunity';
import { MdOutlineViewKanban } from 'react-icons/md';
import { TiContacts } from 'react-icons/ti';
import { LiaFileAltSolid } from 'react-icons/lia';
import { IoDocumentAttachOutline } from 'react-icons/io5';
import { BsPeople } from 'react-icons/bs';

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

export default function Header({ ShowChangePass }) {
  const [activeTab, setActiveTab] = useState('board');
  const [openCreate, setOpenCreate] = useState(false);
  const data = [
    {
      icon: <MdOutlineViewKanban />,
      label: 'Board',
      value: 'board',
      path: '/kanban-board',
      item: <KanbanBoard />,
    },
    {
      icon: <LiaFileAltSolid />,
      label: 'Opportunity',
      value: 'opportunity',
      path: '/opportunity',
      item: '',
    },
    {
      icon: <TiContacts />,
      label: 'Contact',
      value: 'contact',
      path: '/contact',
      item: '',
    },
    {
      icon: <IoDocumentAttachOutline />,
      label: 'File',
      value: 'file',
      path: `/file`,
      item: '',
    },
    {
      icon: <BsPeople />,
      label: 'User',
      value: 'user',
      path: `/user`,
      item: '',
    },
  ];

  return (
    <div>
      <Tabs value={activeTab} className="relative">
        <div className="flex justify-between py-3 px-7  w-full items-end border-b-[1px] border-gray-300">
          <img src={logo} alt="" width={100} />
          <TabsHeader
            className="rounded-lg border-blue-gray-50 bg-transparent p-0 gap-16"
            indicatorProps={{
              className: 'bg-transparent border-b-[5px] border-[#4D648D] shadow-none rounded',
            }}
          >
            {data.map(({ icon, label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={activeTab === value ? 'text-[#4D648D]' : 'text-gray-900'}
              >
                <div className="flex items-center gap-1">
                  {icon}
                  {label}
                </div>
              </Tab>
            ))}
          </TabsHeader>
          <div className="flex gap-2 items-center">
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm',
                          )}
                          onClick={ShowChangePass}
                        >
                          Change password
                        </a>
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
        <div className="flex mx-5 mt-3 justify-between mb-2">
          <div className="flex gap-3">
            <Button
              className="flex item-center gap-1 justify-center ring-1 ring-[#8E8E8E] p-1  rounded-md !text-[#8E8E8E] font-normal normal-case h-6"
              variant="text"
              onClick={() => setOpenCreate(!openCreate)}
            >
              <span>
                <IoMdAdd size={15} />
              </span>
              Create
            </Button>
            <Button
              className="flex item-center gap-1 justify-center ring-1 ring-[#8E8E8E] p-1  rounded-md !text-[#8E8E8E] font-normal normal-case h-6"
              variant="text"
            >
              <span>
                <IoMdCloudUpload size={15} />
              </span>
              Import
            </Button>
          </div>
          <div className="w-60">
            <div className="relative w-full min-w-[200px] h-7">
              <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
                <FiSearch />
              </div>
              <input
                className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 
              disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border
              border focus:border-1 text-sm px-3 py-2.5 
              rounded-[7px] !pr-9 border-blue-gray-200 focus:border-[#8E8E8E]"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
        <TabsBody className="mt-10 ">
          {data.map((data) => (
            <TabPanel key={data.value} value={data.value}>
              <Link to={data.path}>{/* {data.item} */}</Link>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
      {openCreate && (
        <CreateOpportunity
          onCloseCreate={() => setOpenCreate(!openCreate)}
          className="fixed z-50 top-0 bottom-0"
        />
      )}
    </div>
  );
}
