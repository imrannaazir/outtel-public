import { Route, Routes } from 'react-router-dom';
import './App.css';
import Parts from './pages/AllParts/Parts';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import RequiredAuth from './pages/Auth/RequiredAuth';
import Blogs from './pages/Blogs/Blogs';
import Dashboard from './pages/Dashboard/Dashboard';
import UpdateProfile from './pages/Dashboard/UpdateProfile';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Purchase from './pages/Purchase';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <div className='bg-base-200'>
      <Navbar>
        <Routes>
          {/* root or public route */}
          <Route path='/' element={<Home />} />
          <Route path='/parts' element={<Parts />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          {/* protected routes */}
          <Route path='/purchase' element={<RequiredAuth><Purchase /></RequiredAuth>} />

          <Route path='/dashboard' element={<RequiredAuth><Dashboard /></RequiredAuth>} >
            <Route index element={<UpdateProfile />} />



          </Route>
        </Routes>
        {/* <Footer /> */}
      </Navbar>
    </div>
  );
}

export default App;
