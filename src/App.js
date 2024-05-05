
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { Provider } from 'react-redux'
import {store} from './redux/store'
import UserProfile from './components/UserProfile';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Cabs from './components/Cabs';
import Admin from './components/Admin';

function App() {

  return (
    <Provider store={store}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword/>} />
      <Route path="/book-cabs" element={<Cabs />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
    </Provider>
  );
}

export default App;
