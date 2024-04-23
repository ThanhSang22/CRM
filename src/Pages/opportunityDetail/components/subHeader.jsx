import { Button, Step } from '@material-tailwind/react';
import React, { useState } from 'react';
import { GrAdd } from 'react-icons/gr';
import { IoCloudUploadOutline } from 'react-icons/io5';

const SubHeader = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="flex justify-between">
      <div className="flex gap-3 items-center">
        <Button
          className="flex items-center text-[13px] justify-center border-[#4D648D] text-[#4D648D] p-3 rounded-[5px] normal-case h-8 gap-2"
          variant="outlined"
        >
          <GrAdd />
          New quotation
        </Button>
        <Button className="bg-[#4D648D] flex items-center text-[13px] justify-center h-8 p-3 rounded-[5px] normal-case">
          Won
        </Button>
        <Button
          variant="outlined"
          className="flex items-center text-[13px] justify-center border-[#4D648D] text-[#4D648D] p-3 rounded-[5px] normal-case h-8"
        >
          Lost
        </Button>
        <Button variant="text" className="flex items-center justify-center text-[#4D648D] p-3 h-8">
          <IoCloudUploadOutline size={30} />{' '}
        </Button>
      </div>
      <div className="flex items-center relative h-[41px]">
        <Step
          onClick={() => setActiveStep(0)}
          className={`rounded-[8px_0_0_8px] cursor-pointer w-[80px] ${activeStep === 0 ? '!bg-[#4D648D] scale-100 rounded-[8px] text-white font-semibold' : '!text-black border-[0.3px] border-[#4D648D] !bg-inherit h-[30px] font-normal'}`}
        >
          <div>New</div>
        </Step>
        <Step
          onClick={() => setActiveStep(1)}
          className={`w-[100px] rounded-none cursor-pointer ${activeStep === 1 ? '!bg-[#4D648D] scale-100 !rounded-[8px] text-white font-semibold ' : 'border-[0.3px] border-[#4D648D] !bg-inherit h-[30px] font-normal'}`}
        >
          <div>Qualified</div>
        </Step>
        <Step
          onClick={() => setActiveStep(2)}
          className={`w-[100px] rounded-none cursor-pointer ${activeStep === 2 ? '!bg-[#4D648D] scale-100 !rounded-[8px] text-white font-semibold' : 'border-[0.3px] border-[#4D648D] !bg-inherit h-[30px] font-normal'}`}
        >
          <div>Proposition</div>
        </Step>
        <Step
          onClick={() => setActiveStep(3)}
          className={`w-[80px] cursor-pointer rounded-[0_8px_8px_0] ${activeStep === 3 ? '!bg-[#4D648D] scale-100 rounded-[8px] text-white font-semibold' : 'border-[0.3px] border-[#4D648D] !bg-inherit h-[30px] font-normal'}`}
        >
          <div className={activeStep === 3 ? 'blue-gray' : 'gray'}>Won</div>
        </Step>
      </div>
    </div>
  );
};

export default SubHeader;
