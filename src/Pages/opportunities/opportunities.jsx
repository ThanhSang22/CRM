import React from 'react';
import DefaultLayout from '../../defaultLayout/defaultLayout';
import Tools from './components/tools';
import Paging from '../../components/paging';
import OpportunityTags from './components/opportunityTags';

const Opportunities = () => {
  return (
    <DefaultLayout>
      <div className="bg-zinc-300 w-full font-['Noto Sans']">
        <div className="bg-white rounded-2xl border-[0.3px] border-[#000000] mx-[150px] mt-5 px-5 py-3">
          <div className="flex justify-between text-[#4D648D]">
            <h1 className="text-slate-500 text-3xl font-semibold">Opportunities</h1>
            <p className="text-slate-500 text-base font-normal ">Total opportunities: 20</p>
          </div>
          <div className="flex justify-between mt-12 mb-2">
            <Tools />
            <Paging />
          </div>
          <OpportunityTags />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Opportunities;
