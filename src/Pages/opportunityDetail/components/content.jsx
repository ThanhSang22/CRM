import React, { useEffect, useState } from 'react';
import InputCreate from '../../../components/inputCreate';
import { Button, Rating, Switch } from '@material-tailwind/react';
import { MdEmail, MdOutlineOpenInNew } from 'react-icons/md';
import { GrAdd } from 'react-icons/gr';
import opportunities from '../../../features/opportunities';
import { useSelector } from 'react-redux';

const Content = () => {
  const allOpp = useSelector((state) => state.opportunity.opportunities);

  const [anOpportunity, setAnOpportunity] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    address: '',
    website: '',
    description: '',
    revenue: 0,
    priority: null,
    probability: null,
    lostReason: null,
    stage: {
      name: 'QUALIFIED',
      revenue: 0,
    },
    salesperson: null,
    customer: false,
  });
  useEffect(() => {
    const getData = async () => {
      try {
        const getAnOpp = await opportunities.getAnOpp('1c793647-e4e5-49b1-beaa-f5060c96477b');

        console.log('check-getOpportunities-', getAnOpp);

        setAnOpportunity(getAnOpp);
      } catch (error) {
        console.log(error.message);
      }
    };

    getData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnOpportunity({ ...anOpportunity, [name]: value });
  };

  return (
    <div className="bg-white border-[0.5px] border-[#8E8E8E] rounded-[20px] mt-5 py-8 pb-[200px]">
      <div className="px-14">
        <input
          type="text"
          value={anOpportunity.name}
          className="w-full outline-none border-b-[#000000] border-b-[0.3px] text-black text-[25px]"
        />
        <div className="flex w-[40%] gap-16 mt-10">
          <InputCreate
            name="Expected Revenue"
            value={anOpportunity.stage?.revenue}
            onChange={handleChange}
            className="flex flex-col text-start justify-start items-start w-[60%]"
          >
            <p className="text-black font-semibold ">VND</p>
          </InputCreate>
          <InputCreate
            name="Probability"
            onChange={handleChange}
            value={anOpportunity.probability}
            className="flex flex-col text-start justify-start items-start w-[60%]"
          >
            <p className="text-black font-semibold ">%</p>
          </InputCreate>
        </div>
        <div className="grid grid-cols-2 gap-6 gap-x-16 mt-10">
          <InputCreate name="company" value={anOpportunity.company} onChange={handleChange} />
          <InputCreate name="address" value={anOpportunity.address} onChange={handleChange} />
          <InputCreate name="email" value={anOpportunity.email} onChange={handleChange}>
            <MdEmail size={25} className="text-[#4D648D]" />
          </InputCreate>
          <InputCreate name="website" value={anOpportunity.website} onChange={handleChange} />
          <InputCreate name="phone" value={anOpportunity.phone} onChange={handleChange} />
          <div className="flex gap-4">
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
            />
          </div>
          <InputCreate
            name="salesperson"
            value={anOpportunity.salesperson}
            onChange={handleChange}
          />
          <div className="flex gap-7">
            <h1 className="font-bold text-[#4D648D]">Priority</h1>
            <Rating count={3} />
          </div>
        </div>
      </div>
      <div className="relative">
        <hr className="border-b-[0.3px] border-b-[#00000099] mt-10 absolute top-[-60px] w-full" />
        <div className="flex mt-[100px] gap-14 px-14">
          <div className="relative">
            <div className="flex absolute gap-3 top-[-40px]">
              <Button
                variant="outlined"
                className="text-[#4D648D]  text-[15px] rounded-[5px_5px_0px_0px] px-7 pb-9 pt-2 font-semibold capitalize bg-white border-[#00000060]"
              >
                Description
              </Button>
              <Button
                variant="outlined"
                className="text-[#4D648D] text-[15px] rounded-[5px_5px_0px_0px] bg-white px-7 pb-9 pt-2 font-semibold capitalize whitespace-nowrap border-[#00000060]"
              >
                Lost reason
              </Button>
            </div>
            <textarea
              className="absolute border-[0.3px] border-[#00000099] rounded-[20px] w-[590px] min-h-[165px] p-4 text-[#00000099]"
              value={anOpportunity.description}
            >
              Write a description...
            </textarea>
          </div>
          <div className="relative left-[50%] w-full">
            <div className="text-[#4D648D] p-7 pt-2 top-[-40px] mb-7 absolute text-base font-semibold bg-white rounded-[5px_5px_0px_0px] border-[1px] border-[#00000060]">
              Contacts
            </div>
            <div className=" absolute bg-white border-[0.3px] border-[#00000099] rounded-[20px] p-4">
              <ul className="list-disc p-4">
                <li className="py-2">
                  <div className="flex items-center text-[15px] justify-between">
                    <p className="font-medium ">Hong Nhung Nguyen</p>
                    <p>example@gmail.com</p>
                    <p>0344338244</p>
                    <MdOutlineOpenInNew className="text-[#4D648D]" />
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center text-[15px] gap-3">
                    <p className="font-medium">Nhung Nguyen Thi Hong</p>
                    <p className=" text-ellipsis">examplegooglemail@gm...</p>
                    <p>0344338244</p>
                    <MdOutlineOpenInNew className="text-[#4D648D]" />
                  </div>
                </li>
              </ul>
              <button className="flex text-[#4D648D] text-[15px] gap-2 items-center capitalize">
                <GrAdd size={18} />
                <i>Add new contact</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
