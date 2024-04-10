import React from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from '@hello-pangea/dnd';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { Avatar, Input, Rating } from '@material-tailwind/react';

const Container = styled.div`
  width: 400px;
  height: 575px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

function Column({
  column,
  index,
  tasks,
  onDeleteColumn,
  onAddTask,
  newTask,
  onAddTaskInputChange,
  onSubmitTask,
}) {
  return (
    <Droppable droppableId={column} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={`mt-3 mx-3
          ${snapshot.isDraggingOver ? ' bg-light-blue-50' : ''} `}
        >
          <div className="group/item sticky z-10 top-0 flex justify-between pr-2 bg-[#fffcfc]">
            <h1 className="p-3 font-bold">{column}</h1>
            {column && (
              <button
                className="group/edit invisible hover:bg-slate-200 group-hover/item:visible "
                onClick={() => onDeleteColumn(column)}
              >
                <RiDeleteBin5Line />
              </button>
            )}
          </div>
          {(tasks || []).map((task, index) => (
            <Draggable key={task.id} draggableId={task.id} index={index}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className={`${snapshot.isDragging ? 'bg-[#F2D7D5]' : 'bg-[#ffffff]'} p-3 border-[0.3px] border-[#000000] space-y-2`}
                >
                  <div className="flex justify-between items-center">
                    <h1 className="text-lg font-medium">{task.name}</h1>
                    <MdOutlineAccessTimeFilled className="text-[#8E8E8E] text-3xl" />
                  </div>
                  <p>{task.revenue} VND</p>
                  <div className="flex justify-between items-center">
                    <Rating count={3} />
                    <Avatar src={task.avatar} alt="avatar" variant="rounded" size="xs" />
                  </div>
                  {provided.placeholder}
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
          {column && (
            <div className="w-full">
              <button
                onClick={onAddTask}
                className="flex items-center justify-center bg-pink-100 p-2 rounded-md my-2"
              >
                Add Task
              </button>
              {newTask.column === column && (
                <div className="space-y-3 border-[1px] p-4">
                  <Input
                    type="name"
                    name="name"
                    value={tasks.name}
                    onChange={(e) => onAddTaskInputChange(e)}
                    placeholder="Enter task name"
                    className="!border !border-gray-300 bg-white text-gray-900 shadow-lg
                  shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 
                  placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                    labelProps={{
                      className: 'hidden',
                    }}
                    containerProps={{ className: 'min-w-[100px]' }}
                  />
                  <Input
                    type="name"
                    name="revenue"
                    value={tasks.revenue}
                    onChange={(e) => onAddTaskInputChange(e)}
                    placeholder="Enter task revenue"
                    className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 
                  ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 
                  focus:!border-t-gray-900 focus:ring-gray-900/10"
                    labelProps={{
                      className: 'hidden',
                    }}
                    containerProps={{ className: 'min-w-[100px]' }}
                  />
                  <button
                    onClick={onSubmitTask}
                    className="flex text-center items-center justify-center bg-blue-100 p-2 rounded-md my-2"
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>
          )}
        </Container>
      )}
    </Droppable>
  );
}

export default Column;
