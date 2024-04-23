import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './Pages/SignIn/SignIn';
import KanbanBoard from './Pages/kanban/kanbanBoard';
import Opportunities from './Pages/opportunities/opportunities';
import Contacts from './Pages/contacts/contacts';
import Files from './Pages/files/files';
import Users from './Pages/user/users';
import OpportunityDetail from './Pages/opportunityDetail/opportunityDetail';
import DefaultLayout from './defaultLayout/defaultLayout';
import Board from './Pages/kanban/components/board';
import Header from './components/header';

function App() {
  return (
    <>
      {/* <Routes className="App">
      </Routes> */}
      {/* <DefaultLayout> */}
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/kanban-board" element={<KanbanBoard />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/files" element={<Files />} />
        <Route path="/users" element={<Users />} />
        <Route path="/opportunity-detail" element={<OpportunityDetail />} />
      </Routes>
      {/* </DefaultLayout> */}
    </>
  );
}

export default App;
