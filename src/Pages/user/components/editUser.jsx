import React, { useEffect, useState } from 'react';
import InputCreate from '../../../components/inputCreate';
import { Dialog, DialogBody, DialogFooter, Option, Select } from '@material-tailwind/react';
import { IoIosClose } from 'react-icons/io';
import Button from '../../../components/button';
import { Link, useParams } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiSave } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import users from '../../../features/user';

const EditUser = ({ onEdit }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [aUser, setAUser] = useState({
    firstname: '',
    lastname: '',
    fullname: '',
    email: '',
    phone: '',
    birthday: '',
    gender: '',
    username: '',
    roles: [''],
  });

  useEffect(() => {
    const getData = async () => {
      const getAser = await users.getAUser(id);
      setAUser(getAser);
    };

    getData();
  }, []);
  console.log('----', users);

  const roleString = aUser.roles?.join();
  const role = roleString?.slice(5).toLowerCase();

  return (
    <Dialog open={true} handler={onEdit} className="py-4">
      <span
        className="text-4xl text-end flex justify-end text-[#8E8E8E] cursor-pointer mr-2"
        onClick={onEdit}
      >
        <Link to="/users">
          <IoIosClose />
        </Link>
      </span>
      <h1 className="text-3xl text-[#4D648D] font-bold text-center my-[10px]">EDIT USER</h1>
      <DialogBody className="space-y-6 px-20 xl:px-10">
        <InputCreate
          value={aUser.firstname}
          name="fristname"
          className="after:content-['*'] after:ml-0.5 after:text-red-500"
        />
        <InputCreate
          value={aUser.lastname}
          name="lastname"
          className="after:content-['*'] after:ml-0.5 after:text-red-500"
        />
        <InputCreate
          value={aUser.email}
          name="email"
          className="after:content-['*'] after:ml-0.5 after:text-red-500"
        />
        <InputCreate
          value={aUser.phone}
          name="phone"
          className="after:content-['*'] after:ml-0.5 after:text-red-500"
        />
        <div className="flex">
          <InputCreate
            type="date"
            value={aUser.birthday}
            name="birthday"
            className="after:content-['*'] after:ml-0.5 after:text-red-500 w-[120px]"
          />
          <div className="w-40 flex gap-4 items-center ml-[20px]">
            <h1 className="font-bold mt-2 text-[#4D648D] after:content-['*'] after:ml-0.5 after:text-red-500">
              Gender
            </h1>
            <div className="!min-w-[100px]">
              <select
                className="text-base text-black w-[100px] mt-2 border-b-[0.3px] border-b-black outline-none"
                value={aUser.gender}
              >
                <option value={'female'}>Female</option>
                <option value={'male'}>Male</option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-40 flex gap-4 items-center">
          <h1 className="font-bold mt-2 text-[#4D648D] w-[100px] after:content-['*'] after:ml-0.5 after:text-red-500">
            Role
          </h1>

          <Select
            variant="standard"
            className="!h-7 !p-4 text-base text-black capitalize"
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
            name="role"
            value={role}
          >
            <Option value="user">User</Option>
            <Option value="admin">Admin</Option>
          </Select>
        </div>
      </DialogBody>
      <DialogFooter className="flex justify-center items-center gap-5 my-7">
        <Link to="/users">
          <Button
            onClick={onEdit}
            icon={<MdClose />}
            name="Cancel"
            className="!py-1 !px-3 !text-lg"
          />
        </Link>
        <Button
          icon={<FiSave />}
          name="Save"
          className="bg-[#4D648D] !py-1 !px-3 text-white font-semibold !text-lg"
        />
      </DialogFooter>
    </Dialog>
  );
};

export default EditUser;
