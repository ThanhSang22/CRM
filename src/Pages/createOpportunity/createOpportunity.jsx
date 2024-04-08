import React, { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import InputCreate from './components/inputCreate';
import { Dialog, DialogBody, DialogFooter, Option, Select, Switch } from '@material-tailwind/react';
import { v4 as uuidv4 } from 'uuid';
import Task from '../kanban/components/task';
// <div className={`bg-[#00000060] w-full flex items-center justify-center ${className} `}>
//   <div className="w-[60%] space-y-10 py-6 px-[50px] bg-white rounded-[10px] flex flex-col justify-between"></div>
// </div>;

const CreateOpportunity = ({ onCloseCreate, className, handleAddTask }) => {
  const initialTaskData = {
    id: uuidv4(),
    name: '',
    email: '',
    // priority: "",
    phone: '',
    website: '',
    address: '',
    customer: false,
    stage: [],
  };

  const [taskData, setTaskData] = useState(initialTaskData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const closeModal = () => {
    onCloseCreate();
    setTaskData(initialTaskData);
  };

  const handleSave = () => {
    // handleAddTask(taskData);
    closeModal();
  };
  return (
    <Dialog
      open={true}
      // handler={onCloseCreate}
      className="w-[60%] space-y-10 py-6 px-[20px] bg-white rounded-[10px] flex flex-col justify-between "
    >
      <span
        className="text-4xl text-end flex justify-end text-[#8E8E8E] cursor-pointer"
        onClick={onCloseCreate}
      >
        <IoIosClose />
      </span>
      <h1 className="text-3xl text-[#4D648D] font-bold text-center my-[50px]">
        CREATE OPPORRTUNITY
      </h1>

      <DialogBody className="space-y-5">
        <InputCreate
          name="Name"
          value={taskData.name}
          onChange={(e) => setTaskData(e.target.value)}
        />
        <InputCreate
          name="Email"
          value={taskData.email}
          onChange={(e) => setTaskData(e.target.value)}
        />
        <InputCreate
          name="Phone"
          value={taskData.phone}
          onChange={(e) => setTaskData(e.target.value)}
        />
        <InputCreate
          name="Website"
          value={taskData.website}
          onChange={(e) => setTaskData(e.target.value)}
        />
        <InputCreate
          name="Address"
          value={taskData.address}
          onChange={(e) => setTaskData(e.target.value)}
        />
        <div className="flex gap-3 mt-10 ml-[50px]">
          <h1 className="font-bold text-[#4D648D]">Customer</h1>
          <Switch
            id="custom-switch-component"
            ripple={false}
            className="h-full w-full checked:bg-[#4D648D]"
            containerProps={{
              className: 'w-10 h-5',
            }}
            circleProps={{
              className: 'before:hidden left-0 border-none',
            }}
            value={taskData.customer}
            onChange={(e) => setTaskData(e.target.value)}
          />
        </div>
        <div className="w-40 flex gap-4 items-center ml-[50px]">
          <h1 className="font-bold mt-2 text-[#4D648D]">Stage</h1>
          <Select
            variant="standard"
            className="!h-7 !p-4 text-base"
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
            onChange={(e) => setTaskData(e.target.value)}
            value={taskData.priority}
          >
            <Option>New</Option>
            <Option>Qualified</Option>
            <Option>Proposition</Option>
          </Select>
        </div>
      </DialogBody>
      <DialogFooter className="flex justify-center items-center gap-5">
        <button
          onClick={onCloseCreate}
          className="border-[1px] border-gray-500 py-1 px-4 rounded-[5px] text-gray-500 text-lg text-center flex justify-center "
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="bg-[#4D648D] py-1 px-4 rounded-[5px] text-white text-lg text-center flex justify-center"
        >
          Save
        </button>
      </DialogFooter>
    </Dialog>
  );
};

export default CreateOpportunity;
