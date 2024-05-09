import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import SignIn from './Pages/SignIn/SignIn';
import KanbanBoard from './Pages/kanban/kanbanBoard';
import Opportunities from './Pages/opportunities/opportunities';
import Contacts from './Pages/contacts/contacts';
import Users from './Pages/user/users';
import OpportunityDetail from './Pages/opportunityDetail/opportunityDetail';
import EditUser from './Pages/user/components/editUser';
import EditContact from './Pages/contacts/components/editContact';
import { useSelector } from 'react-redux';

// const PrivateRoute = ({ element }) => {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   return isAuthenticated ? element : <Navigate to="/" replace />;
// };
const PrivateRoute = ({ element }) => {
  const token = localStorage.getItem('token');
  return token !== null ? element : <Navigate to="/" replace />;
};

function App() {
  // console.log(localStorage.getItem('token'), '===========');
  // const user = useSelector((state) => state.auth.user);
  // const roleString = user?.roles?.join();
  // const role = roleString?.slice(5).toLowerCase();

  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/kanban-board" element={<PrivateRoute element={<KanbanBoard />} />} />
        <Route path="/opportunities" element={<PrivateRoute element={<Opportunities />} />} />
        <Route
          path="/opportunities/:id"
          element={<PrivateRoute element={<OpportunityDetail />} />}
        />
        <Route path="/contacts" element={<PrivateRoute element={<Contacts />} />} />
        <Route
          path="/contacts/editcontact/:id"
          element={<PrivateRoute element={<EditContact />} />}
        />
        <Route path="/users" element={<PrivateRoute element={<Users />} />} />
        <Route path="/users/edituser/:id" element={<PrivateRoute element={<EditUser />} />} />
      </Routes>
    </>
  );
}

export default App;
