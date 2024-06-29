import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Bookingcar from './pages/Bookingcar';
import Landingpage from './pages/Landingpage';
import UserDash from './pages/UserDash';
import Mybookings from './components/Mybookings';
import Auth from './pages/Auth';
import AdminDash from './pages/AdminDash';
import AdminCarCard from './components/AdminCarCard';
import ViewUser from './pages/ViewUser';

function App() {
  return (
    <div className="App" >
      <Routes>
       <Route path='/' element={ <Landingpage></Landingpage>}></Route>
       <Route path='/Auth' element={ <Auth></Auth>}></Route>
       <Route path='/home' element={ <Homepage></Homepage>}></Route>
       <Route path='/booking' element={ <Bookingcar></Bookingcar>}></Route>
       <Route path='/userdash' element={ <UserDash></UserDash>}></Route>
       <Route path='/my_bookings' element={ <Mybookings></Mybookings>}></Route>
       <Route path='/admin_dash' element={ <AdminDash></AdminDash>}></Route>
       <Route path='/admin_car' element={ <AdminCarCard></AdminCarCard>}></Route>
       <Route path='/view_user' element={ <ViewUser></ViewUser>}></Route>
      </Routes>
    </div>
  );
}

export default App;
