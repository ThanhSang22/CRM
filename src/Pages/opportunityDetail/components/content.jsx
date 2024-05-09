import React, { useEffect, useState } from 'react';
import InputCreate from '../../../components/inputCreate';
import { Avatar, Button, Rating, Switch } from '@material-tailwind/react';
import { MdEmail, MdOutlineOpenInNew } from 'react-icons/md';
import { GrAdd } from 'react-icons/gr';
import opportunities from '../../../features/opportunities';
import { useDispatch, useSelector } from 'react-redux';
import SendEmail from './sendEmail';
import { useParams } from 'react-router-dom';

const Content = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const { id } = useParams();

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getOpportunities());
  // }, []);

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
    // dispatch(getAnOpp(id))
    const getData = async () => {
      try {
        const getAnOpp = await opportunities.getAnOpp(id);
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
    <>
      <div className="bg-white border-[0.5px] border-[#8E8E8E] rounded-[20px] mt-5 py-8 pb-[200px]">
        <div className="px-14">
          <input
            type="text"
            defaultValue={anOpportunity.name}
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
              <span onClick={handleOpen}>
                <MdEmail size={25} className="text-[#4D648D]" />
              </span>
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
            <div className={`flex gap-3 items-center`}>
              <h1
                className={`font-bold w-[100px] text-[#4D648D] whitespace-nowrap text-[15px] capitalize`}
              >
                Salepersonaaaa
              </h1>
              <div className="flex w-full">
                <Avatar
                  size="sm"
                  src={`http://192.168.199.242:8080/avatars/${anOpportunity.salesperson?.avatar?.id}`}
                  alt="saleperson"
                />
                <input
                  type="text"
                  className="w-[90%] outline-none border-b-[#000000] border-b-[0.2px] text-black"
                  onChange={handleChange}
                  value={anOpportunity.salesperson?.fullname}
                  name="salesperson"
                />
              </div>
            </div>
            {/* <InputCreate
              name="salesperson"
              value={anOpportunity.salesperson?.fullname}
              onChange={handleChange}
            >
              <Avatar
                size="sm"
                src={`http://192.168.199.242:8080/avatars/${anOpportunity.salesperson?.avatar?.id}`}
                alt="saleperson"
              />
            </InputCreate> */}
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
                  className="text-[#4D648D] text-[15px] rounded-[5px_5px_0px_0px] px-7 pb-9 pt-2 font-semibold capitalize bg-white border-[#00000060]"
                >
                  Description
                </Button>
                <Button
                  // variant="outlined"
                  className="text-[#4D648D] text-[15px] rounded-[5px_5px_0px_0px] bg-white px-7 pb-9 pt-2 font-semibold capitalize whitespace-nowrap border-[#00000060] border-[1px]"
                >
                  Lost reason
                </Button>
              </div>
              <textarea
                className="absolute border-[0.3px] border-[#00000099] rounded-[20px] w-[590px] min-h-[165px] p-4 text-[#00000099]"
                value={anOpportunity.description}
                name="description"
                onChange={handleChange}
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
      <SendEmail open={open} handleOpen={handleOpen} />
    </>
  );
};

export default Content;
