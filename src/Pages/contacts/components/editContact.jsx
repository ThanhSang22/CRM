import React, { useEffect, useState } from 'react';
import InputCreate from '../../../components/inputCreate';
import { Dialog, DialogBody, DialogFooter, DialogHeader } from '@material-tailwind/react';
import { IoIosClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { editContact, getAContact } from '../../../redux/slice/contactSlice';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Notice from '../../../components/notice';
import moment from 'moment/moment';

const EditContact = ({ onEdit, handlerEdit }) => {
  const { id } = useParams();
  const contact = useSelector((state) => state.contact.contact);
  const [isNotice, setIsNotice] = useState(false);
  const handler = () => setIsNotice(!isNotice);

  const [aContact, setAContact] = useState({
    firstname: contact?.firstname,
    lastname: contact?.lastname,
    fullname: contact?.fullname,
    email: contact?.email,
    phone: contact?.phone,
    birthday: contact?.birthday,
    gender: contact?.gender,
    jobPosition: contact?.jobPosition,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAContact(id));
  }, [id]);

  useEffect(() => {
    setAContact(contact);
  }, [contact]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAContact({ ...aContact, [name]: value });
    console.log('==========', aContact);
  };

  const onSaveClicked = () => {
    dispatch(editContact(id));
    navigate(`/contacts`);
  };

  return (
    <Dialog open={onEdit} handler={handlerEdit} className="py-4 px-5">
      <DialogHeader className="flex !justify-end">
        <spans className="text-4xl text-end text-[#8E8E8E] cursor-pointer" onClick={handlerEdit}>
          <Link to="/contacts">
            <IoIosClose />
          </Link>
        </spans>
      </DialogHeader>
      <DialogBody className="space-y-6 px-20 xl:px-10">
        <h1 className="text-3xl text-[#4D648D] font-bold text-center mb-10">EDIT CONTACT</h1>
        <InputCreate
          onChange={handleChange}
          value={aContact?.firstname}
          name="firstname"
          className="after:content-['*'] after:ml-0.5 after:text-red-500"
        />
        <InputCreate
          onChange={handleChange}
          name="lastname"
          value={aContact?.lastname}
          className="after:content-['*'] after:ml-0.5 after:text-red-500"
        />
        <InputCreate
          onChange={handleChange}
          value={aContact?.email}
          name="email"
          className="after:content-['*'] after:ml-0.5 after:text-red-500"
        />
        <InputCreate
          onChange={handleChange}
          value={aContact?.phone}
          name="phone"
          className="after:content-['*'] after:ml-0.5 after:text-red-500"
        />
        <InputCreate
          onChange={handleChange}
          name="jobposition"
          value={aContact?.jobPosition}
          className="after:content-['*'] after:ml-0.5 after:text-red-500"
        />
        <div className="flex justify-between">
          <InputCreate
            onChange={handleChange}
            value={aContact?.birthday?.substr(0, 10)}
            type="date"
            name="birthday"
            className="after:content-['*'] after:ml-0.5 after:text-red-500 w-[120px]"
          />
          <div className="w-40 flex gap-4 items-center ml-[20px]">
            <h1 className="font-bold mt-2 text-[#4D648D] after:content-['*'] after:ml-0.5 after:text-red-500">
              Gender
            </h1>
            <select
              className="text-base text-black w-[100px] mt-2 border-b-[0.3px] border-b-black outline-none"
              value={aContact?.gender}
              onChange={(gender) => setAContact({ ...aContact, gender })}
            >
              <option value={'famale'}>Female</option>
              <option value={'male'}>Male</option>
            </select>
          </div>
        </div>
      </DialogBody>
      <DialogFooter className="flex justify-center items-center gap-5 mb-3 mt-6">
        <button
          onClick={handlerEdit}
          className="border-[1px] border-gray-500 py-1 px-4 rounded-[5px] text-gray-500 text-lg text-center flex justify-center "
        >
          <Link to="/contacts">Cancel</Link>
        </button>
        <button
          onClick={onSaveClicked}
          className="bg-[#4D648D] py-1 px-4 rounded-[5px] text-white text-lg text-center flex justify-center"
        >
          Save
        </button>
      </DialogFooter>
      <Notice
        handler={handler}
        onNotice={isNotice}
        des="You have already updated a contact successfully. "
      />
    </Dialog>
  );
};

export default EditContact;
