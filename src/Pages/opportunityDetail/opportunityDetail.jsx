import Header from './components/header';
import SubHeader from './components/subHeader';
import React, { useEffect, useState } from 'react';
import InputCreate from '../../components/inputCreate';
import { Avatar, Button, Rating, Switch } from '@material-tailwind/react';
import {
  MdEmail,
  MdOutlineDone,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdOutlineOpenInNew,
} from 'react-icons/md';
import { GrAdd } from 'react-icons/gr';
import SendEmail from './components/sendEmail';
import { useParams } from 'react-router-dom';
import { getAnOpp } from '../../redux/slice/opportunitySlice';
import { useDispatch, useSelector } from 'react-redux';
import { BiEditAlt } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { getActivitiesAuto, getActivitiesSchedule } from '../../redux/slice/activitiesSilce';
import moment from 'moment/moment';

const OpportunityDetail = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [show, setShow] = useState(true);

  const { id } = useParams();

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

  const dispatch = useDispatch();

  const opp = useSelector((state) => state.opportunity.opportunity);
  const activitiesSchedule = useSelector(
    (state) => state.activitiesReducer.activitiesSchedule.activities,
  );
  const activitiesAuto = useSelector((state) => state.activitiesReducer.activitiesAuto.activities);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(getAnOpp(id));
    dispatch(getActivitiesAuto(id));
    dispatch(getActivitiesSchedule(id));
  }, [id]);

  useEffect(() => {
    setAnOpportunity(opp);
  }, [opp]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnOpportunity({ ...anOpportunity, [name]: value });
  };

  return (
    <div className="w-[100vw]">
      <Header company={anOpportunity?.name} />
      <div className="bg-[#D9D9D940] pt-5 px-[40px] pb-[50px]">
        <SubHeader />
        <>
          <div className="bg-[#FFFFFF] border-[0.5px] border-[#8E8E8E] rounded-[20px] mt-5 py-8 pb-[200px]">
            <div className="px-14">
              <input
                type="text"
                defaultValue={anOpportunity?.name}
                className={`w-full outline-none text-black text-[25px] ${anOpportunity?.name ? '' : ' border-b-[#000000] border-b-[0.3px]'}`}
              />
              <div className="flex w-[40%] gap-16 mt-10">
                <InputCreate
                  name="revenue"
                  value={anOpportunity?.stage?.revenue}
                  onChange={handleChange}
                  classNameA="flex flex-col text-start !justify-start !items-start w-[60%]"
                >
                  <p className="text-black font-semibold ">VND</p>
                </InputCreate>
                <InputCreate
                  name="probability"
                  onChange={handleChange}
                  value={anOpportunity?.probability}
                  classNameA="flex flex-col text-start !justify-start !items-start w-[60%]"
                >
                  <p className="text-black font-semibold ">%</p>
                </InputCreate>
              </div>
              <div className="grid grid-cols-2 gap-6 gap-x-16 mt-10">
                <InputCreate
                  name="company"
                  value={anOpportunity?.company}
                  onChange={handleChange}
                />
                <InputCreate
                  name="address"
                  value={anOpportunity?.address}
                  onChange={handleChange}
                />
                <InputCreate name="email" value={anOpportunity?.email} onChange={handleChange}>
                  <span onClick={handleOpen}>
                    <MdEmail size={25} className="text-[#4D648D]" />
                  </span>
                </InputCreate>
                <InputCreate
                  name="website"
                  value={anOpportunity?.website}
                  onChange={handleChange}
                />
                {/* <label className="flex whitespace-nowrap font-bold text-[#4D648D] text-[15px] capitalize gap-3">
                  First name:
                  <input
                    value={anOpportunity?.fullname}
                    onChange={handleChange}
                    className={`w-[90%] outline-none text-black border-b-[#000000] border-b-[0.2px] font-normal`}
                  />
                </label> */}
                <InputCreate name="phone" value={anOpportunity?.phone} onChange={handleChange} />
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
                    Saleperson
                  </h1>
                  <div className="flex w-full gap-1">
                    {anOpportunity?.salesperson && (
                      <Avatar
                        size="sm"
                        src={`http://192.168.199.242:8080/avatars/${anOpportunity?.salesperson?.avatar?.id}`}
                        alt="avatar"
                      />
                    )}
                    <input
                      type="text"
                      className={`outline-none text-black w-[82%] border-b-[#000000] border-b-[0.2px]`}
                      onChange={handleChange}
                      value={anOpportunity?.salesperson?.fullname || ''}
                      name="salesperson"
                    />
                  </div>
                </div>
                <div className="flex gap-7">
                  <h1 className="font-bold text-[#4D648D]">Priority</h1>
                  <Rating count={3} />
                </div>
              </div>
            </div>
            <div className="relative w-full">
              <hr className="border-b-[0.3px] border-b-[#00000099] mt-10 absolute top-[-60px] w-full" />
              <div className="flex mt-[100px] gap-14 px-14">
                <div className="relative  w-[50%]">
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
                    className="absolute border-[0.3px] border-[#00000099] w-full rounded-[20px] min-h-[165px] p-4 text-[#00000099]"
                    value={anOpportunity?.description}
                    name="description"
                    onChange={handleChange}
                    placeholder="Write a description..."
                    readOnly
                  />
                </div>
                <div className="relative w-[50%]">
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
                          <p className="text-ellipsis">examplegooglemail@gm...</p>
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
        <div className="mt-10 space-y-7">
          <div className=" space-y-6">
            <div className="flex items-center gap-2">
              <hr className="flex border-b-[0.5px] border-b-[#000000] w-full" />{' '}
              <b className="text-[#4D648D] gap-1 text-[16px] font-semibold whitespace-nowrap flex items-center">
                {show ? (
                  <MdOutlineKeyboardArrowDown onClick={() => setShow(!show)} size={25} />
                ) : (
                  <MdOutlineKeyboardArrowUp onClick={() => setShow(!show)} size={25} />
                )}{' '}
                Schedule activities
              </b>
              <hr className="flex border-b-[0.5px] border-b-[#000000] w-full" />
            </div>
            {show &&
              activitiesSchedule?.map((activitieSchedule, i) => {
                return (
                  <div key={i} className="flex items-center gap-3">
                    <Avatar
                      size="md"
                      src={`http://192.168.199.242:8080/avatars/${user?.avatar?.id}`}
                      alt="avatar"
                      variant="rounded"
                    />
                    <div>
                      <div className="flex gap-3 items-center text-[#000000] text-[15px]">
                        <b className=" font-semibold">{user?.fullname}</b> -
                        <p className=" font-normal">{activitieSchedule.detail}</p>
                      </div>
                      <div className="flex gap-5 text-[#8E8E8E] text-[15px] mt-2">
                        <button className="flex items-center gap-1 font-semibold hover:scale-105">
                          <MdOutlineDone size={20} />
                          Done
                        </button>
                        <button className="flex items-center gap-1 font-semibold hover:scale-105">
                          <BiEditAlt size={20} />
                          Edit
                        </button>
                        <button className="flex items-center gap-1 font-semibold hover:scale-105">
                          <RiDeleteBin6Line size={20} />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className=" space-y-6">
            <div className="flex items-center gap-2">
              <hr className="flex border-b-[0.5px] border-b-[#000000] w-full" />{' '}
              <b className="text-[#4D648D] gap-2 text-[16px] font-semibold whitespace-nowrap flex items-center">
                Activities logs
              </b>
              <hr className="flex border-b-[0.5px] border-b-[#000000] w-full" />
            </div>
            {activitiesAuto?.map((activitieAuto, i) => {
              const date = moment(activitieAuto.date?.substr(0, 10)).format('MMMM DD, YYYY');
              return (
                <div key={i} className="flex items-center gap-3">
                  <Avatar
                    size="md"
                    src={`http://192.168.199.242:8080/avatars/${user?.avatar?.id}`}
                    alt="avatar"
                    variant="rounded"
                  />

                  {activitieAuto.done ? (
                    <div>
                      <div className="flex gap-3 items-center text-[#000000] text-[15px]">
                        <b className=" font-semibold">{user?.fullname}</b> -
                        <p className=" font-normal">{activitieAuto.detail}</p>
                      </div>
                      <button className="flex items-center gap-1 font-semibold text-[#4D648D]">
                        <MdOutlineDone size={20} />
                        Done
                      </button>
                    </div>
                  ) : (
                    <div>
                      <div className="flex gap-3 items-center text-[#000000] text-[15px]">
                        <b className=" font-semibold">{user?.fullname}</b> -
                        <p className=" font-normal">{date}</p>
                      </div>
                      <div className="flex gap-5 text-[#000000] text-[15px] mt-2 items-center">
                        {activitieAuto.detail}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunityDetail;
