import React, { useState } from 'react';
import { Dialog, DialogBody, Option, Select, Switch } from '@material-tailwind/react';
import InputCreate from '../../components/inputCreate';
import { IoIosClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { addAOpportunity } from '../../redux/slice/opportunitySlice';

function AddOpportunity({ onClose, stages, onAdd }) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.opportunity.loading);
  const [newOpportunity, setNewOpportunity] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    website: '',
    address: '',
    revenue: 0,
    stageId: '',
    customer: false,
  });

  const handleAddOpportunityInputChange = (e) => {
    const { name, value } = e.target;
    setNewOpportunity({ ...newOpportunity, [name]: value });
  };

  const handleAddOpportunity = () => {
    try {
      dispatch(addAOpportunity(newOpportunity));
      onClose();
    } catch (error) {
      console.error('Error adding opportunity:', error);
    }
  };

  // const [newOpportunity, setNewOpportunity] = useState({
  //   name: '',
  //   company: '',
  //   email: '',
  //   phone: '',
  //   website: '',
  //   address: '',
  //   revenue: 0,
  //   stageId: '',
  //   customer: false,
  // });

  // const handleAddOpportunityInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setNewOpportunity({ ...newOpportunity, [name]: value });
  //   console.log('oppp', newOpportunity);
  // };

  // const handleAddOpportunity = async () => {
  //   try {
  //     // Gọi API để thêm opportunity
  //     const addedOpportunity = await opportunities.addOpportunity(newOpportunity);
  //     console.log('=====', addedOpportunity);
  //     onClose();
  //   } catch (error) {
  //     console.error('Error adding opportunity:', error);
  //   }
  // };

  return (
    <>
      <Dialog open={true} onClose={onClose}>
        <span
          className="text-4xl text-end flex justify-end text-[#8E8E8E] cursor-pointer"
          onClick={onClose}
        >
          <IoIosClose />
        </span>
        <h1 className="text-3xl text-[#4D648D] font-bold text-center my-[30px]">
          CREATE OPPORTUNITY
        </h1>
        <DialogBody>
          <form className="flex flex-col gap-[10px] space-y-7 m-7">
            <div className="flex flex-col gap-7 mx-7">
              <InputCreate
                name="name"
                value={newOpportunity.name}
                onChange={handleAddOpportunityInputChange}
              />
              <InputCreate
                type="text"
                name="company"
                placeholder="Company"
                value={newOpportunity.company}
                onChange={handleAddOpportunityInputChange}
              />
              <InputCreate
                type="email"
                name="email"
                value={newOpportunity.email}
                onChange={handleAddOpportunityInputChange}
              />
              <InputCreate
                type="tel"
                name="phone"
                value={newOpportunity.phone}
                onChange={handleAddOpportunityInputChange}
              />
              <InputCreate
                type="text"
                name="website"
                value={newOpportunity.website}
                onChange={handleAddOpportunityInputChange}
              />
              <InputCreate
                type="text"
                name="address"
                value={newOpportunity.address}
                onChange={handleAddOpportunityInputChange}
              />
              <div className="flex mt-3">
                <InputCreate
                  name="revenue"
                  onChange={handleAddOpportunityInputChange}
                  value={newOpportunity.revenue}
                  classNameA="flex flex-col text-start justify-start items-start w-[60%]"
                >
                  <u className="text-black font-semibold absolute right-[54%]">đ</u>
                </InputCreate>
                <div className="w-72 gap-4 items-center ml-[50px]">
                  <h1 className="font-bold text-[#4D648D]">Stage</h1>
                  <div className="w-40">
                    <Select
                      size="lg"
                      variant="standard"
                      className="!h-5 !p-5 text-base text-black"
                      animate={{
                        mount: { y: 0 },
                        unmount: { y: 25 },
                      }}
                      name="stageId"
                      value={newOpportunity.stageId}
                      onChange={(stageId) => setNewOpportunity({ ...newOpportunity, stageId })}
                    >
                      {stages.map((stage) => (
                        <Option name="stageId" key={stage.id} value={stage.id}>
                          {stage.name !== 'WON' && stage.name !== 'LOST' && <p>{stage.name}</p>}
                        </Option>
                      ))}
                    </Select>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 ">
                <h1 className="font-bold text-[#4D648D]">Customer</h1>
                <Switch
                  id="custom-switch-component"
                  ripple={false}
                  className="h-full w-full checked:bg-[#4D648D]"
                  containerProps={{
                    className: 'w-10 h-5',
                  }}
                  circleProps={{
                    className: 'before:hidden left-0.5 rigth-0.5 border-none',
                  }}
                  // name={newOpportunity.customer}
                  value={newOpportunity.customer}
                  onClick={handleAddOpportunityInputChange}
                />
              </div>
            </div>
          </form>
          <div className="flex justify-center items-center gap-5">
            <button
              onClick={onClose}
              className="border-[1px] border-gray-500 py-1 px-4 rounded-[5px] text-gray-500 text-lg text-center flex justify-center "
            >
              Cancel
            </button>
            <button
              onClick={handleAddOpportunity}
              className={`bg-[#4D648D] py-1 px-4 rounded-[5px] text-white text-lg text-center flex justify-center `}
            >
              Save
            </button>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}

export default AddOpportunity;
