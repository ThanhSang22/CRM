import React, { useState } from 'react';
import Button from '../../../components/button';
import { Dialog, DialogBody, DialogFooter, DialogHeader } from '@material-tailwind/react';
import InputCreate from '../../../components/inputCreate';
import { IoIosClose } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import SendEmail from './sendEmail';
import { useDispatch, useSelector } from 'react-redux';
import { sendQuotation } from '../../../redux/slice/mailsSilce';

const Quotation = ({ openQuotation, handleOpenQuotation }) => {
  const [openEmail, setOpenEmail] = useState(false);
  const handleOpenEmail = () => setOpenEmail(!openEmail);
  const [quotation, setQuotation] = useState('');
  const opp = useSelector((state) => state.opportunity.opportunity);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuotation({ ...quotation, [name]: value });
  };

  return (
    <Dialog open={openQuotation} handler={handleOpenQuotation} size="xl">
      <DialogHeader className="flex justify-between py-5 ">
        <h1 className="text-[25px] text-[#4D648D] font-bold text-center">QUOTATION</h1>
        <span
          className="text-4xl text-end flex justify-end text-[#8E8E8E] cursor-pointer"
          onClick={handleOpenQuotation}
        >
          <IoIosClose />
        </span>
      </DialogHeader>
      <hr />
      <DialogBody className="space-y-4 mx-8 !text-[17px]">
        <InputCreate name="company" value={opp?.company} onChange={handleChange} />
        <InputCreate name="address" value={opp?.address} onChange={handleChange} />
        <InputCreate
          name="product"
          classNameA="!mt-[50px]"
          className="after:content-['*'] after:ml-0.5 after:text-red-500"
        />
        <InputCreate name="description" value={opp?.description} onChange={handleChange} />
        <div className="flex w-[60%] space-x-20">
          <InputCreate
            name="price"
            className="after:content-['*'] after:ml-0.5 after:text-red-500 !w-[140px]"
          >
            <p className="text-[#000000] font-medium">VND</p>
          </InputCreate>
          <InputCreate
            name="tax"
            className="after:content-['*'] text-end after:ml-0.5 after:text-red-500"
          >
            <p className="text-[#000000] !font-medium">%</p>
          </InputCreate>
        </div>
        <InputCreate
          name="Quotation valid until"
          type="date"
          classNameA="!mt-[50px] w-[30%]"
          className="!w-[150px] mr-2 after:content-['*'] after:ml-0.5 after:text-red-500"
        />
        <div className="flex w-full !mt-[30px]">
          <div className="w-50% mr-[25%]">
            <h1 className="font-bold text-[#4D648D] whitespace-nowrap text-[15px] capitalize after:content-['*'] after:ml-0.5 after:text-red-500">
              Payment terms and Conditions
            </h1>
            <textarea
              className="border-b-[0.3px] w-[150%] border-b-[#00000099] p-4 text-[#00000099] outline-none italic"
              value="Write terms and conditons here..."
              readOnly
            >
              Write terms and conditons here...
            </textarea>
          </div>
          <div className="space-y-4 text-end w-[30%]">
            <InputCreate name="Untaxed Amount" className="w-[120px] text-end">
              <p className="text-[#000000] font-medium">VND</p>
            </InputCreate>
            <InputCreate name="VAT" className="!w-[75%] text-end">
              <p className="text-[#000000] font-medium">VND</p>
            </InputCreate>
            <InputCreate name="Total" className="!w-[75%] text-end">
              <p className="text-[#000000] font-medium">VND</p>
            </InputCreate>
          </div>
        </div>
      </DialogBody>
      <hr className=" mt-[20px]" />
      <DialogFooter className="flex justify-start gap-4">
        <Button
          type="submit"
          icon={<FiSend />}
          name="Send via email"
          onClick={handleOpenEmail}
          className="bg-[#4D648D] !py-1 !px-3 text-white font-semibold text-[15px]"
        />
        <Button
          onClick={handleOpenQuotation}
          icon={<MdClose />}
          name="Cancel"
          className="!py-1 !px-3 text-[15px]"
        />
      </DialogFooter>
      <SendEmail open={openEmail} handleOpen={handleOpenEmail} />
    </Dialog>
  );
};

export default Quotation;
