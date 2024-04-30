
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { Provider } from 'react-redux'
import {store} from './redux/store'

function App() {

  return (
    <Provider store={store}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    </Provider>
  );
}

export default App;
