import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './Pages/SignIn/SignIn';
import KanbanBoard from './Pages/kanban/kanbanBoard';
import Opportunities from './Pages/opportunities/opportunities';
import Contacts from './Pages/contacts/contacts';
import Users from './Pages/user/users';
import OpportunityDetail from './Pages/opportunityDetail/opportunityDetail';
import EditUser from './Pages/user/components/editUser';
import EditContact from './Pages/contacts/components/editContact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/kanban-board" element={<KanbanBoard />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/opportunities/:id" element={<OpportunityDetail />} />
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/contacts/editcontact/:id" element={<EditContact />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/edituser/:id" element={<EditUser />} />
      </Routes>
    </>
  );
}

export default App;
