import React, { useEffect, useState } from 'react';
import { Checkbox } from '@material-tailwind/react';
import Tools from './tools';
import Paging from '../../../components/paging';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getAllContacts } from '../../../redux/slice/contactSlice';

const titles = ['Name', 'Job position', 'Email', 'Mobile', 'Birthday', 'Gender'];
const ContactTags = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const allContacts = useSelector((state) => state.contact.contacts);

  useEffect(() => {
    dispatch(getContacts(currentPage));
    // dispatch(fetchOpportunities(currentPage));
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    dispatch(getAllContacts(pageNumber));
  };

  return (
    <>
      <div className="flex justify-between text-[#4D648D]">
        <h1 className="text-slate-500 text-3xl font-semibold">Contacts</h1>
        <p className="text-slate-500 text-base font-normal ">
          Total contacts: {allContacts?.totalItems}
        </p>
      </div>
      <div className="flex justify-between mt-8 mb-2">
        <Tools />
        <Paging
          currentPage={currentPage}
          setCurrentPage={handlePageChange}
          totalOpportunities={allContacts?.totalItems}
          totalPages={allContacts?.totalPages}
        />
      </div>
      <div
        className="h-11 bg-[#D9D9D980] bg-opacity-50 rounded-lg flex justify-between 
          items-center mb-5 gap-3"
      >
        {titles.map((title) => {
          return (
            <div
              key={title}
              className={`text-base font-semibold font-['Noto Sans']
            ${
              title === 'Name'
                ? 'w-[20%] ml-[50px]'
                : title === 'Job position'
                  ? 'w-[15%]'
                  : title === 'Email'
                    ? 'w-[25%]'
                    : title === 'Mobile'
                      ? 'w-[12%]'
                      : title === 'Birthday'
                        ? 'w-[13%]'
                        : 'w-[10%]'
            }`}
            >
              {title}
            </div>
          );
        })}
      </div>
      {allContacts?.contacts?.map((contact, index) => {
        const birthday = contact.birthday?.substr(0, 10);
        return (
          <div
            key={index}
            className="flex py-4 rounded-[10px] border-[0.3px] border-[#4D648D] text-start gap-3
            justify-between items-center  mt-3 hover:shadow-[4px_4px_4px_0_rgba(77,100,141,0.5)] text-ellipsis"
          >
            <div className="flex">
              <Checkbox
                ripple={false}
                className="transition-all hover:scale-105 checked:border-[#4D648D] hover:before:opacity-0 checked:bg-[#4D648D]"
              />
            </div>
            <h1 className=" w-[20%] text-black text-base font-semibold font-['Noto Sans'] whitespace-nowrap">
              {contact.fullname}
            </h1>
            <div className="w-[15%] text-base font-['Noto Sans'] whitespace-nowrap text-ellipsis">
              {contact.jobPosition}
            </div>
            <div className="w-[25%] text-base font-['Noto Sans'] whitespace-nowrap text-ellipsis">
              {contact.email}
            </div>
            <p className="w-[12%]">{contact.phone}</p>
            <p className="text-base w-[13%] ">{birthday}</p>
            <p className="w-[10%] whitespace-nowrap">{contact.gender}</p>
          </div>
        );
      })}
    </>
  );
};

export default ContactTags;
