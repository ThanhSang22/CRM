import { Checkbox } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import opportunities from '../../../features/opportunities';
import Tools from './tools';
import Paging from '../../../components/paging';

const titles = ['Name', 'Stage', 'Expected Revenue', 'Description', 'Salesperson'];

const OpportunityTags = () => {
  const [allOpp, setAllOpp] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await opportunities.getOpportunities(currentPage - 1);
        setAllOpp(res);
      } catch (error) {
        console.log(error.message);
      }
    };

    getData();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="flex justify-between text-[#4D648D]">
        <h1 className="text-slate-500 text-3xl font-semibold">Opportunities</h1>
        <p className="text-slate-500 text-base font-normal ">
          Total opportunities: {allOpp.totalItems}
        </p>
      </div>
      <div className="flex justify-between mt-8 mb-2">
        <Tools />
        <Paging
          currentPage={currentPage}
          setCurrentPage={handlePageChange}
          totalOpportunities={allOpp.totalItems}
          totalPages={allOpp.totalPages}
        />
      </div>
      <div className="h-11 bg-[#D9D9D980] bg-opacity-50 rounded-lg flex justify-between items-center pr-2 mb-5 gap-3">
        {titles.map((title) => (
          <div
            key={title}
            className={`text-base font-semibold font-['Noto Sans'] text-start ${
              title === 'Name'
                ? 'w-[25%] ml-[50px]'
                : title === 'Stage'
                  ? 'w-[15%]'
                  : title === 'Expected Revenue'
                    ? 'w-[18%]'
                    : title === 'Description'
                      ? 'w-[35%]'
                      : 'w-[15%]'
            }`}
          >
            {title}
          </div>
        ))}
      </div>
      {allOpp.opportunities?.map((opportunity, index) => {
        const stageName = opportunity.stage.name;
        const stage = stageName?.toLowerCase();
        return (
          <div
            key={index}
            className="flex py-4 rounded-[10px] border-[0.3px] border-[#4D648D] text-start gap-3 justify-between items-center pr-2 mt-3 hover:shadow-[4px_4px_4px_0_rgba(77,100,141,0.5)]"
          >
            <Checkbox
              ripple={false}
              className="transition-all hover:scale-105 hover:before:opacity-0 checked:bg-[#4D648D] checked:border-[#4D648D]"
            />
            <div className="w-[25%]">
              <h1 className="text-black text-base font-semibold font-['Noto Sans']">
                {opportunity.name}
              </h1>
              <p className="text-[#8E8E8E] text-sm italic">{opportunity.website}</p>
            </div>
            <div className="w-[15%] text-base font-semibold font-['Noto Sans']">
              <button
                className={`rounded-[10px] px-3 py-1 text-base lowercase ${
                  stage === 'proposition'
                    ? 'bg-[#ECFEE6] text-[#27962C]'
                    : stage === 'new'
                      ? 'bg-[#E6E8FE] text-[#6A5CC5]'
                      : stage === 'won'
                        ? 'bg-[#FCEF9C] text-[#969903]'
                        : stage === 'qualified'
                          ? 'bg-[#E6F8FE] text-[#1576CF]'
                          : 'bg-[#FFCBC8] text-[#A02C07]'
                }`}
              >
                {opportunity.stage.name}
              </button>
            </div>
            <p className="w-[18%] text-start">
              {opportunity.revenue} <u>đ</u>
            </p>
            <p className="text-base w-[35%] text-ellipsis text-start">{opportunity.description}</p>
            <p className="w-[15%] whitespace-nowrap text-start">
              {opportunity.salesperson === null ? '' : opportunity.salesperson.fullname}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default OpportunityTags;
