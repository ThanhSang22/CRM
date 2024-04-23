import React from 'react';
import DefaultLayout from '../../defaultLayout/defaultLayout';
import ContactTags from './components/contactTags';

const Contacts = () => {
  return (
    <DefaultLayout>
      <div className="bg-zinc-300 w-full font-['Noto Sans']">
        <div className="bg-white rounded-2xl border-[0.3px] border-[#000000] mx-[150px] mt-5 px-5 py-3 h-[84vh]">
          <ContactTags />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Contacts;
