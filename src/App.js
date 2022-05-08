import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './pages/AddItem/AddItem';
import Blogs from './pages/Blogs/Blogs';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import InventoryDetails from './pages/InventoryDetails/InventoryDetails';
import Login from './pages/Login/Login/Login';
import MyItems from './pages/Login/MyItems/MyItems';
import Register from './pages/Login/Register/Register';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import ManageInventory from './pages/ManageInventory/ManageInventory';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route
          path='/manageInventory'
          element={<ManageInventory></ManageInventory>}
        ></Route>
        <Route
          path='/inventoryDetails/:id'
          element={
            <RequireAuth>
              <InventoryDetails></InventoryDetails>
            </RequireAuth>
          }
        ></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route
          path='/addItems'
          element={
            <RequireAuth>
              <AddItem></AddItem>
            </RequireAuth>
          }
        ></Route>
        <Route path='/myItems' element={<MyItems></MyItems>}></Route>
      </Routes>
    </div>
  );
}

export default App;
