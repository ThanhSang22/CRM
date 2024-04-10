import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';
import { Avatar, Rating } from '@material-tailwind/react';
import salesPerson from '../../../assets/images/salesperson.png';

function Task({ task, index, handleDeleteTask }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            userSelect: 'none',
            padding: 8,
            margin: '0 0 8px 0',
            backgroundColor: snapshot.isDragging ? '#F2D7D5' : '#ffffff',
            borderRadius: '4px',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 style={{ fontSize: '18px', fontWeight: '500', margin: '0' }}>{task.name}</h1>
            <MdOutlineAccessTimeFilled style={{ color: '#8E8E8E', fontSize: '24px' }} />
          </div>
          <p style={{ fontSize: '14px', margin: '8px 0' }}>{task.revenue}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Rating count={3} />
            <Avatar src={salesPerson} alt="avatar" variant="rounded" size="xs" />
          </div>
          <button
            style={{
              marginTop: '8px',
              padding: '4px 8px',
              fontSize: '14px',
              backgroundColor: '#ff4d4f',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            onClick={() => handleDeleteTask(task.id)}
          >
            Delete Task
          </button>
        </div>
      )}
    </Draggable>
  );
}

export default Task;
