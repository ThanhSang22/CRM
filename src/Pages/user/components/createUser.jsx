import React, { useState } from 'react';
import InputCreate from '../../../components/inputCreate';
import { Dialog, DialogBody, DialogFooter, Option, Select } from '@material-tailwind/react';
import { IoIosClose } from 'react-icons/io';
import users from '../../../features/user';
import Notice from '../../../components/notice';
import Button from '../../../components/button';
import { MdClose } from 'react-icons/md';
import { FiSave } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { addUser } from '../../../redux/slice/usersSlice';

const CreateUser = ({ onUser }) => {
  const [isNotice, setIsNotice] = useState(false);
  const [addNewUser, setAddNewUser] = useState({
    firstname: '',
    lastname: '',
    fullname: '',
    email: '',
    phone: '',
    birthday: '',
    gender: '',
    username: '',
    role: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddNewUser({ ...addNewUser, [name]: value });
    console.log('====', addNewUser);
  };

  const dispatch = useDispatch();

  const handleAddUser = async (payload) => {
    // dispatch(addUser(payload));
    try {
      // Gọi API để thêm opportunity
      const addedUser = await users.addUser(addNewUser);
      console.log('=====', addedUser);
      setIsNotice(true);
      setTimeout(() => {
        setIsNotice(false);
      }, 2000);
      onUser();
    } catch (error) {
      console.error('Error adding opportunity:', error);
    }
  };
  return (
    <Dialog open={true} handler={onUser} className="py-4">
      <span
        className="text-4xl text-end flex justify-end text-[#8E8E8E] cursor-pointer"
        onClick={onUser}
      >
        <IoIosClose />
      </span>
      <h1 className="text-3xl text-[#4D648D] font-bold text-center my-[30px]">CREATE USER</h1>
      <DialogBody className="space-y-6 px-20 xl:px-10">
        <InputCreate
          name="firstname"
          value={addNewUser.firstname}
          onChange={handleChange}
          className="after:content-['*'] after:ml-0.5 after:text-red-500"
        />
        <InputCreate
          name="lastname"
          value={addNewUser.lastname}
          onChange={handleChange}
          className="after:content-['*'] after:ml-0.5 after:text-red-500"
        />
        <InputCreate
          value={addNewUser.email}
          name="email"
          onChange={handleChange}
          className="after:content-['*'] after:ml-0.5 after:text-red-500"
        />
        <InputCreate
          name="phone"
          onChange={handleChange}
          value={addNewUser.phone}
          className="after:content-['*'] after:ml-0.5 after:text-red-500"
        />
        <div className="flex justify-between">
          <InputCreate
            type="date"
            name="birthday"
            value={addNewUser.birthday}
            onChange={handleChange}
            className="after:content-['*'] after:ml-0.5 after:text-red-500 w-[120px]"
          />
          <div className="w-72 flex gap-4 items-center ml-[20px]">
            <h1 className="font-bold text-[#4D648D] after:content-['*'] after:ml-0.5 after:text-red-500">
              Gender
            </h1>
            <div className="w-40">
              <Select
                size="lg"
                variant="standard"
                className="text-base text-black w-[100px] mt-2 border-b-[0.3px] border-b-black outline-none !h-5 !p-5"
                name="gender"
                value={addNewUser.gender}
                onChange={(gender) => setAddNewUser({ ...addNewUser, gender })}
              >
                <Option value="female">Female</Option>
                <Option value="male">Male</Option>
              </Select>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <hr className="border-[0.2px] border-b-[#000000] w-full" />
          <i className="text-[#00000080] text-[13px] font-light whitespace-nowrap">
            User’s account
          </i>
          <hr className="border-[0.2px] border-b-[#000000] w-full" />
        </div>
        <InputCreate
          name="username"
          value={addNewUser.username}
          onChange={handleChange}
          className="after:content-['*'] after:ml-0.5 after:text-red-500"
        />
        <div className="w-40 flex gap-4 items-center">
          <h1 className="font-bold mt-2 text-[#4D648D] w-[100px] after:content-['*'] after:ml-0.5 after:text-red-500">
            Role
          </h1>
          <Select
            variant="standard"
            className="!h-7 !p-4 text-base text-black"
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
            name="role"
            value={addNewUser.role}
            onChange={(role) => setAddNewUser({ ...addNewUser, role: [role] })}
          >
            <Option value="User">User</Option>
            <Option value="Admin">Admin</Option>
          </Select>
        </div>
      </DialogBody>
      <DialogFooter className="flex justify-center items-center gap-5">
        <Button onClick={onUser} icon={<MdClose />} name="Cancel" className="!py-1 px-3 !text-lg" />
        <Button
          onClick={handleAddUser}
          icon={<FiSave />}
          name="Save"
          className="bg-[#4D648D] !py-1 px-4 text-white font-semibold !text-lg"
        />
      </DialogFooter>

      {isNotice && (
        <Notice
          onNotice={() => setIsNotice(false)}
          des="You have already created a new user successfully."
        />
      )}
    </Dialog>
  );
};

export default CreateUser;
