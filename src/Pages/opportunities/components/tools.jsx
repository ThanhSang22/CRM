import React, { useEffect, useState } from 'react';
import { BiEditAlt } from 'react-icons/bi';
import { IoIosAdd } from 'react-icons/io';
import { LuFileInput } from 'react-icons/lu';
import { RiDeleteBin6Line } from 'react-icons/ri';
import AddOpportunity from '../../createOpportunity/addOpportunity';
import { useDispatch, useSelector } from 'react-redux';
import { getStage } from '../../../redux/slice/stageSlice';
import board from '../../../features/board/api';

const Tools = () => {
  const [onCreate, setOnCreate] = useState(false);
  const stages = useSelector((state) => {
    return state.stages.stages;
  });

  console.log(stages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStage());
  }, []);

  // console.log('stages', stages);
  // const [stages, setStages] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const getStageData = await board.getStage();

        // Kiểm tra xem res có phải là mảng không
        if (Array.isArray(getStageData)) {
          // setStages(getStageData); // Gán kết quả vào stages nếu res là mảng
        } else {
          console.error('Kết quả trả về không phải là một mảng');
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    getData();
  }, []);

  const toggleCreatingOpportunity = () => {
    setOnCreate((prevState) => !prevState);
  };

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
      {onCreate && <AddOpportunity onClose={toggleCreatingOpportunity} stages={stages} />}
    </>
  );
};

export default Tools;
