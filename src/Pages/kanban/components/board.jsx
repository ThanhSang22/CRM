import React, { useCallback, useState } from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import Column from './column';
import { Dialog, DialogBody } from '@material-tailwind/react';
import party from '../../../assets/images/party.png';
import salesPerson from '../../../assets/images/salesperson.png';
import HeaderBoard from './header-board';
import CreateOpportunity from '../../createOpportunity/createOpportunity';

function Board() {
  const [items, setItems] = useState([
    { id: 'item-1', name: 'Task 1', revenue: 1500000000, column: 'New' },
    { id: 'item-2', name: 'Task 2', revenue: 2000000000, column: 'Qualified' },
    { id: 'item-3', name: 'Task 3', revenue: 1800000000, column: 'Proposition' },
  ]);

  const [columns, setColumns] = useState({
    New: [],
    Qualified: [],
    Proposition: [],
    Won: [],
  });

  const [isCreatingTask, setIsCreatingTask] = useState(false);
  const [newTask, setNewTask] = useState({ name: '', revenue: '', column: '' });
  const [showCongratsModal, setShowCongratsModal] = useState(false);

  //Xử lý kéo thả
  const onDragEnd = useCallback(
    (result) => {
      if (!result.destination) return;

      const { source, destination } = result;
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];

      if (source.droppableId === destination.droppableId) {
        const newItems = [...sourceColumn];
        const movedItem = newItems.splice(source.index, 1)[0];
        newItems.splice(destination.index, 0, movedItem);
        setColumns({ ...columns, [source.droppableId]: newItems });
      } else {
        const movedItem = sourceColumn.splice(source.index, 1)[0];
        movedItem.column = destination.droppableId;
        destColumn.splice(destination.index, 0, movedItem);
        setColumns({
          ...columns,
          [source.droppableId]: sourceColumn,
          [destination.droppableId]: destColumn,
        });

        // Kiểm tra xem item có được kéo vào cột "Won" không
        if (destination.droppableId === 'Won') {
          setShowCongratsModal(true); // Hiển thị modal chúc mừng
          setTimeout(() => {
            setShowCongratsModal(false); // Ẩn modal sau 3 giây
          }, 3000);
        }
      }
    },
    [columns],
  );

  const toggleCreatingTask = () => {
    setIsCreatingTask(!isCreatingTask);
  };

  const handleDeleteColumn = (column) => {
    const updatedColumns = { ...columns };
    delete updatedColumns[column];
    setColumns(updatedColumns);
  };

  const handleAddTask = (column) => {
    setNewTask({ name: '', revenue: '', column: column });
  };

  const handleAddTaskInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const onSubmitTask = () => {
    if (newTask.name.trim() !== '') {
      const task = {
        id: `item-${columns[newTask.column].length + 1}`,
        name: newTask.name,
        revenue: newTask.revenue,
        column: newTask.column,
        avatar: salesPerson, // Avatar placeholder, bạn có thể thay đổi hình ảnh này sau
      };
      setItems([...items, task]);
      setColumns({ ...columns, [newTask.column]: [...columns[newTask.column], task] });
      setIsCreatingTask(false);
      setNewTask({ name: '', revenue: '', column: '' });
    }
  };

  const handleDeleteTask = (taskId, column) => {
    const updatedItems = items.filter((item) => item.id !== taskId);
    const updatedColumns = {
      ...columns,
      [column]: columns[column].filter((item) => item.id !== taskId),
    };
    setItems(updatedItems);
    setColumns(updatedColumns);
  };

  return (
    <>
      <HeaderBoard toggleCreatingTask={toggleCreatingTask} />
      <div className="bg-[#D9D9D926] mx-5 rounded-t-3xl h-100vh p-2">
        <DragDropContext onDragEnd={onDragEnd}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {Object.keys(columns).map((column, index) => (
              <Column
                key={column}
                column={column}
                tasks={columns[column]}
                index={index}
                onAddTask={() => handleAddTask(column)}
                onDeleteColumn={handleDeleteColumn}
                onAddTaskInputChange={handleAddTaskInputChange}
                onSubmitTask={onSubmitTask}
                newTask={newTask}
              />
            ))}
          </div>
        </DragDropContext>
        <Dialog open={showCongratsModal} onClose={() => setShowCongratsModal(false)}>
          <DialogBody className="flex gap-2 items-center justify-center">
            <img src={party} alt="" width={100} />
            <h1>
              Congratulations! <br /> You have made an opportunity won.
            </h1>
          </DialogBody>
        </Dialog>
      </div>
      {isCreatingTask && (
        <CreateOpportunity
          onCloseCreate={toggleCreatingTask}
          handleAddTask={handleAddTask}
          columns={columns}
        />
      )}
    </>
  );
}

export default Board;
