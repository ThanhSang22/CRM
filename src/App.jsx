import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './Pages/SignIn/SignIn';

function App() {
    return (
        <Routes className="font-noto">
            <Route path="/sign-in" element={<SignIn />} />
        </Routes>
    );
}

export default App;
