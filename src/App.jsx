import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './pages/SignIn/SignIn';
import KanbanBoard from './pages/kanban/kanbanBoard';

function App() {
  return (
    <Routes className="App">
      <Route path="/" element={<SignIn />} />
      <Route path="/kanban-board" element={<KanbanBoard />} />
    </Routes>
  );
}

export default App;
