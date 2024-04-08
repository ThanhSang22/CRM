import React, { useState } from 'react';
import Header from './components/header';
import Board from './components/board';
import Task from './components/task';
import ChangePassword from './components/changePassword';

const KanbanBoard = () => {
  const [showChangePass, setShowChangePass] = useState(false);

  return (
    <div>
      <Header ShowChangePass={() => setShowChangePass(!showChangePass)} />
      {/* <h1 className="text-bold text-[#9d3d7f] text-2xl text-center ">Hello Kanban Board</h1> */}
      {/* <Task /> */}
      {showChangePass && (
        <ChangePassword
          onClosePass={() => setShowChangePass(!showChangePass)}
          className="fixed z-50 top-0 bottom-0"
        />
      )}
    </div>
  );
};

export default KanbanBoard;
