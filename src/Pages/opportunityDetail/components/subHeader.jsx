import { Button, Step } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { GrAdd } from 'react-icons/gr';
import { IoCloudUploadOutline } from 'react-icons/io5';
import MarkLost from './markLost';
import { useSelector } from 'react-redux';
import Quotation from './quotation';
import { TbCalendarClock } from 'react-icons/tb';
import { FiSend } from 'react-icons/fi';

const SubHeader = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [openQuotation, setOpenQuotation] = useState(false);
  const stageOpp = useSelector((state) => state.opportunity.opportunity?.stage);
  const stages = useSelector((state) => state.stages.stages);
  const [activeStep, setActiveStep] = useState('');

  useEffect(() => {
    setActiveStep(stageOpp?.name);
  }, [stageOpp?.name]);

  return (
    <div className="flex justify-between">
      <div className="flex gap-3 items-center">
        <Button
          className="flex items-center text-[13px] justify-center border-[#4D648D] text-[#4D648D] p-3 rounded-[5px] normal-case h-8 gap-2 whitespace-nowrap"
          variant="outlined"
          onClick={() => setOpenQuotation(!openQuotation)}
        >
          <GrAdd />
          New quotation
        </Button>
        <Quotation
          openQuotation={openQuotation}
          handleOpenQuotation={() => setOpenQuotation(!openQuotation)}
        />
        <Button className="bg-[#4D648D] flex items-center text-[13px] justify-center h-8 p-3 rounded-[5px] normal-case">
          Won
        </Button>
        <Button
          variant="outlined"
          onClick={handleOpen}
          className="flex items-center text-[13px] justify-center border-[#4D648D] text-[#4D648D] p-3 rounded-[5px] normal-case h-8"
        >
          Lost
        </Button>
        <MarkLost open={open} handleOpen={handleOpen} />
        <div className="relative cursor-pointer flex items-center">
          <Button
            variant="text"
            className="flex items-center justify-center text-[#4D648D] p-3 h-8 absolute overflow-hidden"
          >
            <IoCloudUploadOutline size={30} />{' '}
          </Button>
          <input
            type="file"
            className="flex  absolute left-[-80px] top-[0%] scale-50 !cursor-pointer opacity-0"
          />
        </div>
      </div>
      <div className="flex gap-3">
        <Button
          variant="outlined"
          className="flex items-center text-[13px] justify-center border-[#4D648D] text-[#4D648D] p-3 rounded-[10px] normal-case h-8 gap-2 whitespace-nowrap"
        >
          <FiSend size={20} />
          Send email
        </Button>
        <Button
          variant="outlined"
          className="flex items-center text-[13px] justify-center border-[#4D648D] text-[#4D648D] p-3 rounded-[10px] normal-case h-8 gap-2 whitespace-nowrap"
        >
          <TbCalendarClock size={20} />
          Activity
        </Button>
      </div>
      <div className="flex items-center relative h-[41px]">
        <Step
          onClick={() => setActiveStep('NEW')}
          className={`rounded-[8px_0_0_8px] cursor-pointer w-[80px] ${activeStep === 'NEW' ? '!bg-[#4D648D] scale-100 rounded-[8px] text-white font-semibold' : '!text-black border-[0.3px] border-[#4D648D] !bg-inherit h-[30px] font-normal'}`}
        >
          <div>New</div>
        </Step>
        <Step
          onClick={() => setActiveStep('QUALIFIED')}
          className={`w-[100px] rounded-none cursor-pointer ${activeStep === 'QUALIFIED' ? '!bg-[#4D648D] scale-100 !rounded-[8px] text-white font-semibold ' : 'border-[0.3px] border-[#4D648D] !bg-inherit h-[30px] font-normal'}`}
        >
          <div>Qualified</div>
        </Step>
        <Step
          onClick={() => setActiveStep('PROPOSITION')}
          className={`w-[100px] rounded-none cursor-pointer ${activeStep === 'PROPOSITION' ? '!bg-[#4D648D] scale-100 !rounded-[8px] text-white font-semibold' : 'border-[0.3px] border-[#4D648D] !bg-inherit h-[30px] font-normal'}`}
        >
          <div>Proposition</div>
        </Step>
        <Step
          onClick={() => setActiveStep('WON')}
          className={`w-[80px] cursor-pointer rounded-[0_8px_8px_0] ${activeStep === 'WON' ? '!bg-[#4D648D] scale-100 rounded-[8px] text-white font-semibold' : 'border-[0.3px] border-[#4D648D] !bg-inherit h-[30px] font-normal'}`}
        >
          <div className={activeStep === 3 ? 'blue-gray' : 'gray'}>Won</div>
        </Step>
      </div>
    </div>
  );
};

export default SubHeader;
