import React, { useState } from 'react';
import InputCreate from '../../../components/inputCreate';
import { Dialog, DialogBody, DialogFooter, Option, Select } from '@material-tailwind/react';
import { IoIosClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../../redux/slice/contactSlice';
import { useParams } from 'react-router-dom';
import Notice from '../../../components/notice';
const CreateContact = ({ onContact, handlerContact }) => {
  const opportunity = useSelector((state) => state.opportunity.opportunity);
  const [isNotice, setIsNotice] = useState(false);

  const [contact, setContact] = useState({
    firstname: '',
    lastname: '',
    fullname: '',
    email: '',
    phone: '',
    birthday: '',
    gender: '',
    jobPosition: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
    console.log(contact);
  };

  const dispatch = useDispatch();
  const { id } = useParams();

  const handleAddContact = () => {
    try {
      dispatch(addContact(id, contact));
      setIsNotice(true);
      setTimeout(() => {
        setIsNotice(false);
      }, 1000);
      handlerContact();
    } catch (error) {
      console.error('Error adding opportunity:', error);
    }
  };

  return (
    <Dialog open={onContact} handler={handlerContact} className="py-4 px-5" size="md">
      <span
        className="text-4xl text-end flex justify-end text-[#8E8E8E] cursor-pointer"
        onClick={handlerContact}
      >
        <IoIosClose />
      </span>
      <h1 className="text-3xl text-[#4D648D] font-bold text-center my-[30px]">CREATE CONTACT</h1>
      <DialogBody className="space-y-6 px-16 xl:px-10">
        <InputCreate
          name="Opportunity"
          className="after:content-['*'] after:ml-0.5 after:text-red-500"
          value={opportunity?.name}
        />
        <InputCreate
          name="firstname"
          className="after:content-['*'] after:ml-0.5 after:text-red-500"
          value={contact.firstname}
          onChange={handleChange}
        />
        <InputCreate
          name="lastname"
          className="after:content-['*'] after:ml-0.5 after:text-red-500"
          value={contact.lastname}
          onChange={handleChange}
        />
        <InputCreate name="Email" className="after:content-['*'] after:ml-0.5 after:text-red-500" />
        <InputCreate name="Phone" className="after:content-['*'] after:ml-0.5 after:text-red-500" />
        <InputCreate
          name="jobPosition"
          className="after:content-['*'] after:ml-0.5 after:text-red-500"
          value={contact.jobPosition}
          onChange={handleChange}
        />
        <div className="flex justify-between">
          <InputCreate
            type="date"
            name="birthday"
            className="after:content-['*'] after:ml-0.5 after:text-red-500 w-[150px]"
            value={contact.birthday}
            onChange={handleChange}
          />
          <div className="w-40 flex gap-4 items-center ml-[20px]">
            <h1 className="font-bold mt-2 text-[#4D648D] after:content-['*'] after:ml-0.5 after:text-red-500">
              Gender
            </h1>
            <div className="w-40">
              <Select
                variant="standard"
                className="text-base text-black w-[100px] mt-2 border-b-[0.3px] border-b-black outline-none !h-5 !p-5"
                name="gender"
                value={contact.gender}
                onChange={(gender) => setContact({ ...contact, gender })}
              >
                <Option value="Female">Female</Option>
                <Option value="Male">Male</Option>
              </Select>
            </div>
          </div>
        </div>
      </DialogBody>
      <DialogFooter className="flex justify-center items-center gap-5 mb-3 mt-6">
        <button
          onClick={handlerContact}
          className="border-[1px] border-gray-500 py-1 px-4 rounded-[5px] text-gray-500 text-lg text-center flex justify-center "
        >
          Cancel
        </button>
        <button
          onClick={handleAddContact}
          className="bg-[#4D648D] py-1 px-4 rounded-[5px] text-white text-lg text-center flex justify-center"
        >
          Save
        </button>
        <Notice
          onNotice={isNotice}
          handler={() => setIsNotice(!isNotice)}
          des="You have already created a new contact successfully."
        />
      </DialogFooter>
    </Dialog>
  );
};

export default CreateContact;
