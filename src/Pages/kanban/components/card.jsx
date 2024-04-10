import { Avatar } from '@material-tailwind/react';
import React from 'react';
import { Draggable } from '@hello-pangea/dnd';
import styled from 'styled-components';

const Container = styled.div`
  border-radius: 10px;
  box-shadow: 5px 5px 5px 2px grey;
  padding: 8px;
  color: #000;
  margin-bottom: 8px;
  min-height: 120px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: ${(props) => bgcolorChange(props)};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

function bgcolorChange(props) {
  return props.isdragging
    ? 'lightgreen'
    : props.isDraggable
      ? props.isBacklog
        ? '#F2D7D5'
        : '#DCDCDC'
      : props.isBacklog
        ? '#F2D7D5'
        : '#EAF4FC';
}

export default function Card({ task, index }) {
  return (
    <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`${snapshot.isDragging} ? '#F2D7D5' : '#EAF4FC' `}
        >
          <div style={{ display: 'flex', justifyContent: 'start', padding: 2 }}>
            {/* <span>
              <small>
                #{task.id}
                {'  '}
              </small>
            </span> */}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
            <h1>{task.title}</h1>
          </div>
          <div className="p-1 flex justify-end">
            <Avatar
              onClick={() => console.log(task)}
              src={'https://joesch.moe/api/v1/random?key=' + task.id}
            />
          </div>
          {provided.placeholder}
        </Container>
      )}
    </Draggable>
  );
}
