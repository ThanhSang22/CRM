import { Checkbox } from '@material-tailwind/react';
import React from 'react';
import { opportunities } from '../../../data/opportunities';

const titles = ['Name', 'Stage', 'Expected Revenue', 'Description', 'Salesperson'];
const OpportunityTags = () => {
  return (
    <>
      <div
        className="h-11 bg-[#D9D9D980] bg-opacity-50 rounded-lg flex justify-between 
        items-center pr-2 mb-5 gap-3"
      >
        {titles.map((title) => {
          return (
            <div
              className={`text-base font-semibold font-['Noto Sans']
            ${
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
          );
        })}
      </div>
      {opportunities.opportunities.map((opportunitie, o) => (
        <div
          key={o}
          className="flex py-4 rounded-[10px] border-[0.3px] border-[#4D648D] text-start gap-3
          justify-between items-center pr-2 mt-3 hover:shadow-[4px_4px_4px_0_rgba(77,100,141,0.5)]"
        >
          <Checkbox />
          <div className="w-[25%]">
            <h1 className="text-black text-base font-semibold font-['Noto Sans']">
              {opportunitie.name}
            </h1>
            <p className="text-[#8E8E8E] text-sm italic">{opportunitie.website}</p>
          </div>
          <div className="w-[15%] text-base font-semibold font-['Noto Sans']">
            <button
              className={` rounded-[10px]  px-3 py-1 text-base
            ${
              opportunitie.stage === 'proposition'
                ? 'bg-[#ECFEE6] text-[#27962C]'
                : opportunitie.stage === 'new'
                  ? 'bg-[#E6E8FE] text-[#6A5CC5]'
                  : opportunitie.stage === 'won'
                    ? 'bg-[#FCEF9C] text-[#969903]'
                    : opportunitie.stage === 'qualified'
                      ? 'bg-[#E6F8FE] text-[#1576CF]'
                      : 'bg-[#FFCBC8] text-[#A02C07]'
            }
            `}
            >
              {opportunitie.stage}
            </button>
          </div>
          <p className="w-[18%]">
            {opportunitie.revenue},500,000,000 <u>đ</u>
          </p>
          <p className="text-base w-[35%] text-ellipsis">{opportunitie.description}</p>
          <p className="w-[15%] whitespace-nowrap">{opportunitie.salesperson}</p>
        </div>
      ))}
    </>
  );
};

export default OpportunityTags;
