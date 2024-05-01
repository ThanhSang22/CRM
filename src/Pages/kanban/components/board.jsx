import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';
import { Avatar, Dialog, DialogBody, Rating } from '@material-tailwind/react';
import party from '../../../assets/images/party.png';
import board from '../../../features/board/api';
import AddOpportunity from '../../createOpportunity/addOpportunity';
import HeaderBoard from './header-board';
import { Link } from 'react-router-dom';

function Board() {
  const [stages, setStages] = useState([]);
  const [opportunities, setOpportunities] = useState([]);
  const [showCongratsModal, setShowCongratsModal] = useState(false);
  const [isCreatingOpportunity, setIsCreatingOpportunity] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const getStageData = await board.getStage();
        const getOpportunities = await board.getOpportunitiesAll();

        // Kiểm tra xem res có phải là mảng không
        if (Array.isArray(getStageData, getOpportunities)) {
          setStages(getStageData); // Gán kết quả vào stages nếu res là mảng
          setOpportunities(getOpportunities);
        } else {
          console.error('Kết quả trả về không phải là một mảng');
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    getData();
  }, []);
  const onDragEnd = (result) => {
    const { source, destination } = result;

    // Kiểm tra xem phép kéo thả có hợp lệ không
    if (!destination) return;

    // Lấy opportunity được kéo thả
    const draggedOpportunity = opportunities.find(
      (opportunity) => opportunity.id === result.draggableId,
    );

    // Kiểm tra xem opportunity có được di chuyển sang cột mới hay không
    const isMovedToNewColumn = source.droppableId !== destination.droppableId;

    // Lấy danh sách cơ hội từ cột nguồn
    const sourceOpportunities = opportunities.filter(
      (opportunity) => opportunity.stage.id === source.droppableId,
    );

    if (isMovedToNewColumn) {
      // Cập nhật cột đích của opportunity
      const updatedDraggedOpportunity = {
        ...draggedOpportunity,
        stage: { id: destination.droppableId },
      };

      // Cập nhật danh sách cơ hội với opportunity mới được kéo thả
      const updatedDestinationOpportunities = [
        ...opportunities.filter((opportunity) => opportunity.id !== draggedOpportunity.id),
        updatedDraggedOpportunity,
      ];

      // Cập nhật state
      setOpportunities(updatedDestinationOpportunities);
    } else {
      // Di chuyển opportunity trong cùng một cột
      const updatedOpportunities = [...sourceOpportunities];

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
      }, 3000);
    }
  };

  const toggleCreatingOpportunity = (newOpportunity) => {
    setIsCreatingOpportunity((prevState) => !prevState);
    setOpportunities([...opportunities, newOpportunity]);
  };

  const handleAddOpportunity = (newOpportunity) => {};

  return (
    <>
      <HeaderBoard toggleCreatingTask={toggleCreatingOpportunity} />
      <div className="bg-[#D9D9D926] mx-5 rounded-t-3xl h-100vh p-2">
        <DragDropContext onDragEnd={onDragEnd}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {stages.map((stage) => (
              <React.Fragment key={stage.id}>
                <Droppable droppableId={stage.id}>
                  {(provided, snapshot) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className={`m-3 w-[310px] max-h-[900px] min-h-[600px] ${snapshot.isDraggingOver ? ' bg-light-blue-50' : ''}`}
                    >
                      <div className="sticky z-10 top-0 pr-2 bg-[#f5eeee]">
                        <h1 className="p-3 font-bold">{stage.name}</h1>
                        <div className="pl-2 flex justify-between w-full items-center">
                          <hr
                            className={`${stage.revenue <= 5 ? 'border-[#D0E1F9] max-w-[50px]' : stage.revenue <= 10 ? 'border-[#A1D6E2] max-w-[110px]' : 'border-[#68829E] w-[180px]'} border-b-[10px]`}
                          />
                          <p className=" whitespace-nowrap">{stage.revenue} B</p>
                        </div>
                      </div>

                      {opportunities.map((opportunity, index) => {
                        if (opportunity.stage.id === stage.id) {
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
                                  className={`${snapshot.isDragging ? 'bg-[#F2D7D5]' : 'bg-[#ffffff]'} p-3 border-[0.3px] border-[#000000] space-y-2`}
                                >
                                  <Link to={`/opportunities/${opportunity.id}`}>
                                    <div className="flex justify-between items-center">
                                      <h1 className="text-lg font-medium">{opportunity.name}</h1>
                                      <MdOutlineAccessTimeFilled className="text-[#8E8E8E] text-3xl" />
                                    </div>
                                    <p>{opportunity.revenue} VND</p>
                                    <div className="flex justify-between items-center">
                                      <Rating count={3} />
                                      <Avatar
                                        src={opportunity.avatar?.physicalPath}
                                        alt="avatar"
                                        variant="rounded"
                                        size="xs"
                                      />
                                    </div>
                                  </Link>
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
        {isCreatingOpportunity && (
          <AddOpportunity
            onClose={toggleCreatingOpportunity}
            onAdd={handleAddOpportunity}
            stages={stages}
          />
          // <CreateOpportunity onCloseCreate={toggleCreatingOpportunity} stages={stages} />
        )}

        {/* Modal chúc mừng */}
        <Dialog open={showCongratsModal} onClose={() => setShowCongratsModal(false)}>
          <DialogBody className="flex gap-2 items-center justify-center">
            <img src={party} alt="" width={100} />
            <h1>
              Congratulations! <br /> You have made an opportunity won.
            </h1>
          </DialogBody>
        </Dialog>
      </div>
    </>
  );
}

export default Board;
