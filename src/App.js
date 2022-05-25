import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './pages/AllParts/NotFound';
import Parts from './pages/AllParts/Parts';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import RequiredAuth from './pages/Auth/RequiredAuth';
import Blogs from './pages/Blogs/Blogs';
import AddParts from './pages/Dashboard/AddParts';
import Dashboard from './pages/Dashboard/Dashboard';
import Feedback from './pages/Dashboard/Feedback';
import MakeAdmin from './pages/Dashboard/MakeAdmin';
import ManageOrders from './pages/Dashboard/ManageOrders';
import ManageProducts from './pages/Dashboard/ManageProducts';
import Orders from './pages/Dashboard/Orders';
import Reviews from './pages/Dashboard/Reviews';
import UpdateProfile from './pages/Dashboard/UpdateProfile';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Purchase from './pages/Purchase/Purchase';
import Footer from './Shared/Footer';

import Navbar from './Shared/Navbar';

function App() {
  return (
    <div className='bg-base-200'>
      <Navbar>
        <Toaster />
        <Routes>
          {/* root or public route */}
          <Route path='/' element={<Home />} />
          <Route path='/parts' element={<Parts />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFound />} />

          {/* protected routes */}
          <Route path='/purchase/:id' element={<RequiredAuth><Purchase /></RequiredAuth>} />

          <Route path='/dashboard' element={<RequiredAuth><Dashboard /></RequiredAuth>} >
            <Route index element={<UpdateProfile />} />
            <Route path='orders' element={<Orders />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='feedback' element={<Feedback />} />
            <Route path='manage-orders' element={<ManageOrders />} />
            <Route path='add-part' element={<AddParts />} />
            <Route path='make-admin' element={<MakeAdmin />} />
            <Route path='manage-products' element={<ManageProducts />} />



          </Route>
        </Routes>
        {/* <Footer /> */}
      </Navbar>
    </div>
  );
}

export default App;
