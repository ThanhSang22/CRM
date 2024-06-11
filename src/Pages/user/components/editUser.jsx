import React, { useEffect, useState } from 'react';
import InputCreate from '../../../components/inputCreate';
import {
  Dialog,
  DialogBody,
  DialogHeader,
  DialogFooter,
  Option,
  Select,
} from '@material-tailwind/react';
import { IoIosClose } from 'react-icons/io';
import Button from '../../../components/button';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiSave } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { editUser, getaUser } from '../../../redux/slice/usersSlice';
import Notice from '../../forgotPassword/notice';

const EditUser = ({ onEdit }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isNotice, setIsNotice] = useState(false);
  const handler = () => setIsNotice(!isNotice);
  const user = useSelector((state) => state.users.user);

  const [aUser, setAUser] = useState({
    firstname: user?.firstname,
    lastname: user?.lastname,
    fullname: user?.fullname,
    email: user?.email,
    phone: user?.phone,
    birthday: user?.birthday,
    gender: user?.gender,
    username: user?.username,
    roles: user?.roles,
  });

  useEffect(() => {
    dispatch(getaUser(id));
  }, [dispatch, id]);

  useEffect(() => {
    setAUser(user);
  }, [user]);

  const roleString = aUser?.roles?.join();
  const role = roleString?.slice(5).toLowerCase();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAUser({ ...aUser, [name]: value });
  };

  const navigate = useNavigate();

  const onSaveClicked = () => {
    dispatch(editUser(id));
    setIsNotice(!isNotice);
    navigate(`/users`);
  };

  return (
    <Dialog open={true} handler={onEdit} className="py-4">
      <DialogHeader className="flex !justify-end">
        <span
          className="text-4xl text-end flex justify-end text-[#8E8E8E] cursor-pointer mr-2"
          onClick={handler}
        >
          <Link to="/users">
            <IoIosClose />
          </Link>
        </span>
      </DialogHeader>
      <DialogBody className="space-y-6 px-20 xl:px-10">
        <h1 className="text-3xl text-[#4D648D] font-bold text-center mb-[50px]">EDIT USER</h1>
        <InputCreate
          value={aUser?.firstname}
          name="fristname"
          onChange={handleChange}
          className="after:content-['*'] after:ml-0.5 after:text-red-500"
        />
        <InputCreate
          value={aUser?.lastname}
          name="lastname"
          onChange={handleChange}
          className="after:content-['*'] after:ml-0.5 after:text-red-500"
        />
        <InputCreate
          value={aUser?.email}
          name="email"
          onChange={handleChange}
          className="after:content-['*'] after:ml-0.5 after:text-red-500"
        />
        <InputCreate
          value={aUser?.phone}
          onChange={handleChange}
          name="phone"
          className="after:content-['*'] after:ml-0.5 after:text-red-500"
        />
        <div className="flex">
          <InputCreate
            type="date"
            value={aUser?.birthday?.substr(0, 10)}
            onChange={handleChange}
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
                value={aUser?.gender}
                onChange={(gender) => setAUser({ ...aUser, gender })}
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
            onChange={(role) => setAUser({ ...aUser, role })}
          >
            <Option value="user">User</Option>
            <Option value="admin">Admin</Option>
          </Select>
        </div>
      </DialogBody>
      <DialogFooter className="flex justify-center items-center gap-5 my-7">
        <Link to="/users">
          <Button
            onClick={handler}
            icon={<MdClose />}
            name="Cancel"
            className="!py-1 !px-3 !text-lg"
          />
        </Link>
        <Button
          icon={<FiSave />}
          onClick={onSaveClicked}
          name="Save"
          className="bg-[#4D648D] !py-1 !px-3 text-white font-semibold !text-lg"
        />
      </DialogFooter>
      <Notice
        handler={handler}
        onNotice={isNotice}
        des="You have already updated a user successfully. "
      />
    </Dialog>
  );
};

export default EditUser;
