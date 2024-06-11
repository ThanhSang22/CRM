import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';
import { Avatar, Dialog, DialogBody, Rating } from '@material-tailwind/react';
import party from '../../../assets/images/party.png';
import board from '../../../features/board/api';
import AddOpportunity from '../../createOpportunity/addOpportunity';
import HeaderBoard from './header-board';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getStage } from '../../../redux/slice/stageSlice';
import CreateActivity from './createActivity';
import { getOpportunitiesAll, updateOpp } from '../../../redux/slice/boardSlice';

function Board() {
  const [opportunities, setOpportunities] = useState([]);
  const [showCongratsModal, setShowCongratsModal] = useState(false);
  const [isCreatingOpportunity, setIsCreatingOpportunity] = useState(false);
  const handleOpen = () => setIsCreatingOpportunity(!isCreatingOpportunity);
  const [open, setOpen] = useState(false);
  const handler = () => setOpen(!open);

  const dispatch = useDispatch();
  const stages = useSelector((state) => state.stages.stages);
  const getOpportunities = useSelector((state) => state.boardReducer.opportunitiesBoard);

  // const [records, setRecords] = useState(getOpportunities);

  const Filter = (e) => {
    setOpportunities(
      getOpportunities?.filter((f) => f.name.toLowerCase().includes(e.target.value)),
    );
  };

  useEffect(() => {
    dispatch(getStage());
    dispatch(getOpportunitiesAll());
    setOpportunities(getOpportunities);
  }, []);

  useEffect(() => {
    setOpportunities(getOpportunities);
  }, [getOpportunities]);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // Kiểm tra xem phép kéo thả có hợp lệ không
    if (!destination) return;

    // Lấy opportunity được kéo thả
    const draggedOpportunity = opportunities.find(
      (opportunity) => opportunity.id === result.draggableId,
    );
    // const draggedOpportunity = opportunities.find(
    //   (opportunity) => dispatch(updateOpp(opportunity.id)) === result.draggableId,
    // );

    // Kiểm tra xem opportunity có được di chuyển sang cột mới hay không
    const isMovedToNewColumn = source.droppableId !== destination.droppableId;

    if (isMovedToNewColumn) {
      // Cập nhật cột đích của opportunity
      const updatedDraggedOpportunity = {
        ...draggedOpportunity,
        stage: { id: destination.droppableId },
      };
      // dispatch(updateOpp(draggedOpportunity.id));

      // Cập nhật danh sách cơ hội với opportunity mới được kéo thả
      const updatedDestinationOpportunities = [
        ...opportunities.filter((opportunity) => opportunity.id !== draggedOpportunity.id),
        updatedDraggedOpportunity,
      ];

      // Cập nhật state
      setOpportunities(updatedDestinationOpportunities);
    } else {
      // Di chuyển opportunity trong cùng một cột
      const updatedOpportunities = [...opportunities];

      // Loại bỏ opportunity khỏi vị trí cũ
      updatedOpportunities.splice(source.index, 1);

      // Chèn opportunity vào vị trí mới
      updatedOpportunities.splice(destination.index, 0, draggedOpportunity);

      // Cập nhật state
      setOpportunities(updatedOpportunities);
    }

    // Kiểm tra xem item có được kéo vào cột "Won" không
    if (destination.droppableId === '10a1716a-cd71-488e-8f8a-deb8cb8c6dfc') {
      setShowCongratsModal(true);
      setTimeout(() => {
        setShowCongratsModal(false);
      }, 2000);
    }
  };

  const toggleCreatingOpportunity = (newOpportunity) => {
    setIsCreatingOpportunity((prevState) => !prevState);
    setOpportunities([...opportunities, newOpportunity]);
  };

  // stages?.sort((a, b) => {
  //   return a.order - b.order;
  // });

  return (
    <>
      <HeaderBoard toggleCreatingTask={toggleCreatingOpportunity} onChange={Filter} />
      <div className="bg-[#D9D9D926] mx-5 rounded-t-3xl h-100vh px-2 overflow-scroll snap-y snap snap-mandatory">
        <DragDropContext onDragEnd={onDragEnd}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }} className="w-[1398px] ">
            {stages?.map((stage) => (
              <React.Fragment key={stage.id}>
                <Droppable droppableId={stage.id}>
                  {(provided, snapshot) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className={`mx-3 w-[320px] h-[595px] ${snapshot.isDraggingOver ? ' bg-light-blue-50' : ''} `}
                    >
                      <div className="sticky w-[320px] z-10 top-0 pr-2 bg-[#f5eeee] gap-1 flex justify-between items-center">
                        <h1 className="p-3 font-bold">{stage.name}</h1>
                        <p className="whitespace-nowrap text-end">{stage.revenue} VND</p>
                        {/* <div className="pl-2 flex justify-between w-full items-center">
                          <hr
                            className={`${stage.revenue <= 5 ? 'border-[#D0E1F9] max-w-[50px]' : stage.revenue <= 10 ? 'border-[#A1D6E2] max-w-[110px]' : 'border-[#68829E] w-[180px]'} border-b-[10px]`}
                          />
                          <p className="whitespace-nowrap text-end">{stage.revenue} VND</p>
                        </div> */}
                      </div>

                      {opportunities?.map((opportunity, index) => {
                        if (opportunity?.stage?.id === stage?.id) {
                          return (
                            <Draggable
                              key={opportunity.id}
                              draggableId={opportunity.id}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className={`${snapshot.isDragging ? 'bg-[#F2D7D5]' : 'bg-[#ffffff]'} flex justify-between p-3 border-[0.3px] border-[#000000] space-y-2 w-[320px] `}
                                >
                                  <Link to={`/opportunities/${opportunity.id}`} className="w-[95%]">
                                    <div className="flex justify-between items-center">
                                      <h1 className="text-lg font-medium">{opportunity.name}</h1>
                                    </div>
                                    <p>{opportunity.revenue} VND</p>
                                    <div className="flex justify-between items-center">
                                      <Rating
                                        count={3}
                                        value={
                                          opportunity.priority === null
                                            ? 0
                                            : opportunity.priority === 'MEDIUM'
                                              ? 1
                                              : opportunity.priority === 'HIGH'
                                                ? 2
                                                : 3
                                        }
                                      />
                                      {opportunity.salesperson && (
                                        <Avatar
                                          src={`http://192.168.199.242:8080/avatars/${opportunity.salesperson?.avatar?.id}`}
                                          alt="avatar"
                                          variant="rounded"
                                          size="xs"
                                        />
                                      )}
                                    </div>
                                  </Link>
                                  <div className="w-[7%] !mt-0">
                                    <MdOutlineAccessTimeFilled
                                      className="text-[#8E8E8E] text-3xl items-start"
                                      onClick={handler}
                                    />
                                    <CreateActivity open={open} handleOpen={handler} />
                                  </div>
                                  {provided.placeholder}
                                </div>
                              )}
                            </Draggable>
                          );
                        }
                      })}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </React.Fragment>
            ))}
          </div>
        </DragDropContext>

        <AddOpportunity onClose={isCreatingOpportunity} handleOpen={handleOpen} stages={stages} />

        {/* Modal chúc mừng */}
        <Dialog
          open={showCongratsModal}
          handler={() => setShowCongratsModal(false)}
          className="bg-opacity-0 bg-white"
        >
          <DialogBody className="flex gap-2 items-center justify-center">
            <img src={party} alt="" width={100} />
            <h1 className="text-white">
              Congratulations! <br /> You have made an opportunity won.
            </h1>
          </DialogBody>
        </Dialog>
      </div>
    </>
  );
}

export default Board;
