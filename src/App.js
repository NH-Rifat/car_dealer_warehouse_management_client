import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './pages/Blogs/Blogs';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Inventory from './pages/InventoryDetails/InventoryDetails';
import ManageInventory from './pages/ManageInventory/ManageInventory';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/manageInventory' element={<ManageInventory></ManageInventory>}></Route>
      <Route path='/inventoryDetails' element={<Inventory></Inventory>}></Route>
      <Route path='/blog' element={<Blogs></Blogs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
