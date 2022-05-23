import { Route, Routes } from 'react-router-dom';
import './App.css';
import Parts from './pages/AllParts/Parts';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import RequiredAuth from './pages/Auth/RequiredAuth';
import Blogs from './pages/Blogs/Blogs';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
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

          {/* privet auth */}
          <Route element={<RequiredAuth />}>
            <Route path='/dashboard' element={<Dashboard />} />

          </Route>
          {/* admin route */}
          {/*  <Route element={<AdminAuth/>}>

       </Route> */}
        </Routes>
        <Footer />
      </Navbar>
    </div>
  );
}

export default App;
