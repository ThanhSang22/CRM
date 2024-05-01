import React from 'react';
import Board from './components/board';
import DefaultLayout from '../defaultLayout/defaultLayout';

const KanbanBoard = () => {
  return (
    <DefaultLayout>
      <Board />
    </DefaultLayout>
  );
};

export default KanbanBoard;
