import React, { useEffect, useState } from 'react';
import { BiEditAlt } from 'react-icons/bi';
import { IoIosAdd } from 'react-icons/io';
import { LuFileInput } from 'react-icons/lu';
import { RiDeleteBin6Line } from 'react-icons/ri';
import AddOpportunity from '../../createOpportunity/addOpportunity';
import { useDispatch, useSelector } from 'react-redux';
import { getStage } from '../../../redux/slice/stageSlice';

const Tools = () => {
  const [onCreate, setOnCreate] = useState(false);
  const handler = () => setOnCreate(!onCreate);

  const stages = useSelector((state) => {
    return state.stages.stages;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStage());
  }, [dispatch]);

  return (
    <>
      <div className="flex gap-5">
        <button
          className="flex items-center gap-1 text-[#4D648D] font-semibold hover:scale-105"
          onClick={() => setOnCreate(true)}
        >
          <IoIosAdd size={25} />
          Create
        </button>
        <button className="flex items-center gap-1 text-[#4D648D] font-semibold hover:scale-105">
          <LuFileInput size={20} />
          Import
        </button>
        <button className="flex items-center gap-1 text-[#4D648D] font-semibold hover:scale-105">
          <BiEditAlt size={20} />
          Edit
        </button>
        <button className="flex items-center gap-1 text-[#4D648D] font-semibold hover:scale-105">
          <RiDeleteBin6Line size={20} />
          Delete
        </button>
      </div>
      <AddOpportunity onClose={onCreate} handleOpen={handler} stages={stages} />
    </>
  );
};

export default Tools;
