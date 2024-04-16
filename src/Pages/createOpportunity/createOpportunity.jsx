import React, { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import { Dialog, DialogBody, DialogFooter, Option, Select, Switch } from '@material-tailwind/react';
import InputCreate from './components/inputCreate';

const CreateOpportunity = ({ onCloseCreate, handleAddTask, columns, value }) => {
  const initialTaskData = {
    name: '',
    email: '',
    phone: '',
    website: '',
    address: '',
    customer: false,
    stage: '',
  };

  const [taskData, setTaskData] = useState(initialTaskData);

  const handleChange = (e) => {
    if (e && e.target && e.target.name && e.target.value) {
      // const { name, value } = e.target;
      setTaskData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSave = () => {
    // if (taskData.name.trim() !== '' && taskData.stage.trim() !== '') {
    //   handleAddTask(taskData);
    //   onCloseCreate();
    //   setTaskData(initialTaskData);
    // } else {
    //   alert('Please fill in all required fields.');
    // }
    handleAddTask(taskData);
    onCloseCreate();
    setTaskData(initialTaskData);
  };

  return (
    <Dialog open={true} handler={onCloseCreate}>
      <span
        className="text-4xl text-end flex justify-end text-[#8E8E8E] cursor-pointer"
        onClick={onCloseCreate}
      >
        <IoIosClose />
      </span>
      <h1 className="text-3xl text-[#4D648D] font-bold text-center my-[50px]">
        CREATE OPPORTUNITY
      </h1>
      <DialogBody className="space-y-5">
        <InputCreate
          type="text"
          name="Name"
          onChange={handleChange}
          placeholder="Name"
          className="InputCreate-create"
          value={value}
        />
        <InputCreate
          type="text"
          name="Email"
          onChange={handleChange}
          placeholder="Email"
          className="input-create"
          value={value}
        />
        <InputCreate
          type="text"
          name="Phone"
          onChange={handleChange}
          placeholder="Phone"
          className="input-create"
          value={value}
        />
        <InputCreate
          type="text"
          name="Website"
          onChange={handleChange}
          placeholder="Website"
          className="InputCreate-create"
          value={value}
        />
        <InputCreate
          type="text"
          name="Address"
          onChange={handleChange}
          placeholder="Address"
          className="InputCreate-create"
          value={value}
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
            checked={taskData.customer}
            onChange={(e) => setTaskData({ ...taskData, customer: e.target.checked })}
          />
        </div>
        <div className="w-40 flex gap-4 items-center ml-[50px]">
          <h1 className="font-bold mt-2 text-[#4D648D]">Stage</h1>
          <Select
            variant="standard"
            className="!h-7 !p-4 text-base text-black"
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
            onChange={(e) => setTaskData({ ...taskData, stage: e.target.value })}
            name="stage"
          >
            <Option disabled value="">
              Select Stage
            </Option>
            {Object.keys(columns).map((column) => (
              <Option key={column} value={column}>
                {column}
              </Option>
            ))}
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
