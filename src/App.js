import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import ManageInventory from './pages/ManageInventory/ManageInventory';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/manageInventory' element={<ManageInventory></ManageInventory>}></Route>
      </Routes>
    </div>
  );
}

export default App;
