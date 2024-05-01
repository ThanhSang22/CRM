// import React from 'react';
// import { IoIosClose } from 'react-icons/io';
// import { Dialog, DialogBody, DialogFooter, Option, Select, Switch } from '@material-tailwind/react';
// import InputCreate from './components/inputCreate';
// import { useDispatch, useSelector } from 'react-redux';
// import { clearTaskData, setLoading, setTaskData } from '../../redux/action/opportunity';
// import opportunities from '../../features/opportunities';

// const CreateOpportunity = ({ onCloseCreate, stages }) => {
//   const dispatch = useDispatch();
//   const taskData = useSelector((state) => state.taskData);
//   const loading = useSelector((state) => state.loading);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     dispatch(setTaskData({ ...taskData, [name]: value }));
//   };

//   const handleSave = async () => {
//     dispatch(setLoading(true));
//     const addedOpportunity = await opportunities.addOpportunity(taskData);

//     // Thực hiện các thao tác cần thiết ở đây (ví dụ: gọi API)
//     setTimeout(() => {
//       // Giả sử gọi API thành công, sau đó reset trạng thái và đóng dialog
//       dispatch(clearTaskData());
//       dispatch(setLoading(false));
//       onCloseCreate();
//     }, 1000); // Giả định API mất 1 giây để hoàn thành
//   };

//   return (
//     <Dialog open={true} handler={onCloseCreate}>
//       <span
//         className="text-4xl text-end flex justify-end text-[#8E8E8E] cursor-pointer"
//         onClick={onCloseCreate}
//       >
//         <IoIosClose />
//       </span>
//       <h1 className="text-3xl text-[#4D648D] font-bold text-center my-[30px]">
//         CREATE OPPORTUNITY
//       </h1>
//       <DialogBody className="space-y-7 m-7">
//         <InputCreate name="name" onChange={handleChange} value={taskData?.name} />
//         <InputCreate name="email" onChange={handleChange} value={taskData?.email} />
//         <InputCreate name="phone" onChange={handleChange} value={taskData?.phone} />
//         <InputCreate name="website" onChange={handleChange} value={taskData?.website} />
//         <InputCreate name="address" onChange={handleChange} value={taskData?.address} />
//         <div className="flex mt-3">
//           <InputCreate
//             name="Expected Revenue"
//             onChange={handleChange}
//             value={taskData?.revenue}
//             className="flex flex-col text-start justify-start items-start w-[60%]"
//           />
//           <div className="w-40 gap-4 items-center ml-[50px]">
//             <h1 className="font-bold mt-2 text-[#4D648D]">Stage</h1>
//             <Select
//               variant="standard"
//               className="!h-5 !p-4 text-base text-black"
//               animate={{
//                 mount: { y: 0 },
//                 unmount: { y: 25 },
//               }}
//               onChange={(e) => dispatch(setTaskData({ ...taskData, stage: e.target.value }))}
//               name="stage"
//               value={taskData?.stage}
//             >
//               {stages.map((stage) => (
//                 <Option key={stage} value={stage}>
//                   {stage.name}
//                 </Option>
//               ))}
//             </Select>
//           </div>
//         </div>
//         <div className="flex gap-3 mt-10">
//           <h1 className="font-bold text-[#4D648D]">Customer</h1>
//           <Switch
//             id="custom-switch-component"
//             ripple={false}
//             className="h-full w-full checked:bg-[#4D648D]"
//             containerProps={{
//               className: 'w-10 h-5',
//             }}
//             circleProps={{
//               className: 'before:hidden left-0.5 rigth-0.5 border-none',
//             }}
//             checked={taskData?.customer}
//             onChange={(e) => dispatch(setTaskData({ ...taskData, customer: e.target.checked }))}
//           />
//         </div>
//       </DialogBody>
//       <DialogFooter className="flex justify-center items-center gap-5">
//         <button
//           onClick={onCloseCreate}
//           className="border-[1px] border-gray-500 py-1 px-4 rounded-[5px] text-gray-500 text-lg text-center flex justify-center "
//         >
//           Cancel
//         </button>
//         <button
//           onClick={handleSave}
//           className={`bg-[#4D648D] py-1 px-4 rounded-[5px] text-white text-lg text-center flex justify-center ${
//             loading ? 'opacity-50 cursor-not-allowed' : ''
//           }`}
//           disabled={loading}
//         >
//           {loading ? 'Saving...' : 'Save'}
//         </button>
//       </DialogFooter>
//     </Dialog>
//   );
// };

// export default CreateOpportunity;
