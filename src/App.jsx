import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './Pages/SignIn/SignIn';
import KanbanBoard from './Pages/kanban/kanbanBoard';
import Opportunities from './Pages/opportunities/opportunities';
import Contacts from './Pages/contacts/contacts';
import Files from './Pages/files/files';
import Users from './Pages/user/users';

function App() {
  return (
    <Routes className="App">
      <Route path="/" element={<SignIn />} />
      <Route path="/kanban-board" element={<KanbanBoard />} />
      <Route path="/opportunities" element={<Opportunities />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/files" element={<Files />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
}

export default App;
