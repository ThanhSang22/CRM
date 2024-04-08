import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './pages/signIn/signIn';
import KanbanBoard from './pages/kanban/kanbanBoard';
import Login from './components/login';

function App() {
  return (
    <Routes className="App">
      <Route path="/" element={<SignIn />} />
      <Route path="/kanban-board" element={<KanbanBoard />} />
    </Routes>
  );
}

export default App;
