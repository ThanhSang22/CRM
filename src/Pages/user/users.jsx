import React from 'react';
import DefaultLayout from '../defaultLayout/defaultLayout';
import UserTags from './components/userTags';

const Users = () => {
  return (
    <DefaultLayout>
      <div className="bg-zinc-300 w-full font-['Noto Sans']">
        <div className="bg-white rounded-2xl border-[0.3px] border-[#000000] mx-[150px] my-5 px-5 py-3  h-[86vh]">
          <UserTags />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Users;
